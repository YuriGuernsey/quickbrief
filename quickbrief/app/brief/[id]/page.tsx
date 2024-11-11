'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

export default function BriefPage({ params }) {
  const router = useRouter()
  const [brief, setBrief] = useState(null)

  useEffect(() => {
    const fetchBrief = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/auth')
        return
      }

      const { data, error } = await supabase
        .from('briefs')
        .select('*')
        .eq('id', params.id)
        .single()

      if (error) {
        console.error('Error fetching brief:', error)
        router.push('/dashboard')
      } else {
        setBrief(data)
      }
    }

    fetchBrief()
  }, [params.id, router])

  const handleDownload = () => {
    // In a real application, you would generate a PDF here
    // For this example, we'll just create a text version
    const content = `
      Project Brief

      Project Type: ${brief.project_type}
      Project Goals: ${brief.project_goals}
      Key Features: ${brief.key_features}
      Budget Estimate: ${brief.budget_estimate}
      Timeline Estimate: ${brief.timeline_estimate}
      Additional Notes: ${brief.additional_notes}
    `

    const element = document.createElement('a')
    const file = new Blob([content], {type: 'text/plain'})
    element.href = URL.createObjectURL(file)
    element.download = 'project_brief.txt'
    document.body.appendChild(element)
    element.click()
  }

  if (!brief) return null

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Project Brief</CardTitle>
            <CardDescription>Generated on {new Date(brief.created_at).toLocaleDateString()}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">Project Type</h3>
              <p>{brief.project_type}</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Project Goals</h3>
              <p>{brief.project_goals}</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Key Features</h3>
              <p>{brief.key_features}</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Budget Estimate</h3>
              <p>{brief.budget_estimate}</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Timeline Estimate</h3>
              <p>{brief.timeline_estimate}</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Additional Notes</h3>
              <p>{brief.additional_notes}</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button onClick={() => router.push('/dashboard')}>Back to Dashboard</Button>
            <Button onClick={handleDownload}>Download Brief</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}