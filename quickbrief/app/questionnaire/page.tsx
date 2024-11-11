'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

const projectTypes = ['Web', 'Mobile', 'Automation', 'Other']
const budgetRanges = ['$1,000 - $5,000', '$5,000 - $10,000', '$10,000 - $50,000', '$50,000+']
const timelineRanges = ['1-2 weeks', '1 month', '2-3 months', '3-6 months', '6+ months']

export default function QuestionnairePage() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState({
    project_type: '',
    project_goals: '',
    key_features: '',
    budget_estimate: '',
    timeline_estimate: '',
    additional_notes: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNext = () => setStep((prev) => prev + 1)
  const handlePrev = () => setStep((prev) => prev - 1)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push('/auth')
      return
    }

    const { data, error } = await supabase
      .from('briefs')
      .insert({ ...formData, user_id: user.id })

    if (error) {
      console.error('Error saving brief:', error)
    } else {
      router.push(`/brief/${data[0].id}`)
    }
  }

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <>
            <div className="space-y-4">
              <div>
                <Label htmlFor="project_type">Project Type</Label>
                <Select name="project_type" onValueChange={(value) => handleSelectChange('project_type', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    {projectTypes.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="project_goals">Project Goals</Label>
                <Textarea
                  id="project_goals"
                  name="project_goals"
                  value={formData.project_goals}
                  onChange={handleInputChange}
                  rows={4}
                />
              </div>
            </div>
            <Button onClick={handleNext} className="mt-4">Next</Button>
          </>
        )
      case 1:
        return (
          <>
            <div className="space-y-4">
              <div>
                <Label htmlFor="key_features">Key Features</Label>
                <Textarea
                  id="key_features"
                  name="key_features"
                  value={formData.key_features}
                  onChange={handleInputChange}
                  rows={4}
                />
              </div>
              <div>
                <Label htmlFor="budget_estimate">Budget Estimate</Label>
                <Select name="budget_estimate" onValueChange={(value) => handleSelectChange('budget_estimate', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetRanges.map((range) => (
                      <SelectItem key={range} value={range}>{range}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <Button onClick={handlePrev} variant="outline">Previous</Button>
              <Button onClick={handleNext}>Next</Button>
            </div>
          </>
        )
      case 2:
        return (
          <>
            <div className="space-y-4">
              <div>
                <Label htmlFor="timeline_estimate">Timeline Estimate</Label>
                <Select name="timeline_estimate" onValueChange={(value) => handleSelectChange('timeline_estimate', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    {timelineRanges.map((range) => (
                      <SelectItem key={range} value={range}>{range}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="additional_notes">Additional Notes</Label>
                <Textarea
                  id="additional_notes"
                  name="additional_notes"
                  value={formData.additional_notes}
                  onChange={handleInputChange}
                  rows={4}
                />
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <Button onClick={handlePrev} variant="outline">Previous</Button>
              <Button onClick={handleSubmit}>Generate Brief</Button>
            </div>
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create Your Project Brief
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Step {step + 1} of 3
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            {renderStep()}
          </div>
        </div>
      </div>
    </div>
  )
}