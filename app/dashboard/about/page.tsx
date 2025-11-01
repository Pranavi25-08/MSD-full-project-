"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">About Campus Flow</h1>
        <p className="text-muted-foreground">Learn more about our platform</p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>What is Campus Flow?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p>
              Campus Flow is an integrated student management platform designed to streamline campus life. It connects
              students, facilitates event discovery, and creates opportunities for meaningful interactions within the
              academic community.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Key Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>
                  <strong>Events Management:</strong> Discover, create, and manage campus events
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>
                  <strong>Placements Forum:</strong> Connect with peers and discuss career opportunities
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>
                  <strong>Student Profiles:</strong> Build your professional profile
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>
                  <strong>Community:</strong> Network with fellow students
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Support</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p>For any questions or issues, please contact us at support@campusflow.edu</p>
            <Button>Contact Support</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
