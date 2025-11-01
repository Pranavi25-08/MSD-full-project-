"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from "react"

interface UserProfile {
  name: string
  email: string
  rollNo: string
  department: string
  year: number
  bio: string
}

export default function Profile() {
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [editing, setEditing] = useState(false)
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState<UserProfile>({
    name: "",
    email: "",
    rollNo: "",
    department: "",
    year: 1,
    bio: "",
  })

  useEffect(() => {
    fetchProfile()
  }, [])

  const fetchProfile = async () => {
    try {
      const response = await fetch("/api/user/profile")
      if (response.ok) {
        const data = await response.json()
        setProfile(data)
        setFormData(data)
      }
    } catch (error) {
      console.error("Error fetching profile:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = async () => {
    try {
      const response = await fetch("/api/user/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const data = await response.json()
        setProfile(data)
        setEditing(false)
      }
    } catch (error) {
      console.error("Error updating profile:", error)
    }
  }

  if (loading) {
    return <div className="p-6">Loading...</div>
  }

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">My Profile</h1>
        <p className="text-muted-foreground">Manage your profile information</p>
      </div>

      <Card>
        <CardHeader className="flex justify-between items-center">
          <CardTitle>Profile Information</CardTitle>
          <Button
            variant={editing ? "outline" : "default"}
            onClick={() => {
              if (editing) {
                handleSave()
              } else {
                setEditing(true)
              }
            }}
          >
            {editing ? "Save Changes" : "Edit Profile"}
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {editing ? (
            <>
              <div>
                <label className="text-sm font-medium mb-1 block">Name</label>
                <Input name="name" value={formData.name} onChange={handleChange} />
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">Email</label>
                <Input type="email" name="email" value={formData.email} onChange={handleChange} disabled />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Roll No</label>
                  <Input name="rollNo" value={formData.rollNo} onChange={handleChange} disabled />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Year</label>
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  >
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">Department</label>
                <Input name="department" value={formData.department} onChange={handleChange} disabled />
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">Bio</label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about yourself..."
                  className="w-full px-3 py-2 border border-input rounded-md bg-background"
                />
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Name</p>
                  <p className="font-semibold">{profile?.name}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold">{profile?.email}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Roll No</p>
                  <p className="font-semibold">{profile?.rollNo}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Department</p>
                  <p className="font-semibold">{profile?.department}</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Year</p>
                <p className="font-semibold">{profile?.year}th Year</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-1">Bio</p>
                <p className="text-sm">{profile?.bio || "No bio added yet"}</p>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
