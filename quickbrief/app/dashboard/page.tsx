'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

export default function DashboardPage() {
  const router = useRouter()
  const [briefs, setBriefs] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUserAndBriefs = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/auth')
        return
      }
      setUser(user)

      const { data, error } = await supabase
        .from('briefs')
        .select('*')
        .eq('user_id', user.id)
      if (error) console.error('Error fetching briefs:', error)
      else setBriefs(data || [])
    }

    fetchUserAndBriefs()
  }, [router])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  const handleDeleteBrief = async (briefId) => {
    const { error } = await supabase
      .from('briefs')
      .delete()
      .eq('id', briefId)
    if (error) console.error('Error deleting brief:', error)
    else setBriefs(briefs.filter(brief => brief.id !== briefId))
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <Link href="/settings">
              <Button variant="outline">Settings</Button>
            </Link>
            <Button onClick={handleSignOut} variant="ghost">Sign Out</Button>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Your Briefs</h2>
            <Link href="/questionnaire">
              <Button>Create New Brief</Button>
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {briefs.map((brief) => (
              <Card key={brief.id}>
                <CardHeader>
                  <CardTitle>{brief.project_type}</CardTitle>
                  <CardDescription>Created on: {new Date(brief.created_at).toLocaleDateString()}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">{brief.project_goals.substring(0, 100)}...</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link href={`/brief/${brief.id}`}>
                    <Button variant="outline">View</Button>
                  </Link>
                  <Button variant="destructive" onClick={() => handleDeleteBrief(brief.id)}>Delete</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}