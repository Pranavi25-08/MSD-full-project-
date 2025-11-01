"use client"

import { useEffect, useState } from "react"

export function Header() {
  const [user, setUser] = useState({ name: "User", email: "" })

  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = async () => {
    try {
      const response = await fetch("/api/user/profile")
      if (response.ok) {
        const data = await response.json()
        setUser(data)
      }
    } catch (error) {
      console.error("Error fetching user:", error)
    }
  }

  return (
    <header className="border-b border-border bg-card sticky top-0 z-40">
      <div className="px-6 py-4 flex justify-between items-center">
        <div>
          <h2 className="text-sm text-muted-foreground">Welcome back</h2>
          <p className="text-lg font-semibold">{user.name}</p>
        </div>
        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
          <span className="text-primary font-semibold">{user.name.charAt(0)}</span>
        </div>
      </div>
    </header>
  )
}
