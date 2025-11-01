"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
import Link from "next/link"

interface ForumPost {
  id: string
  title: string
  author: string
  category: string
  replies_count: number
  created_at: string
}

export default function Placements() {
  const [posts, setPosts] = useState<ForumPost[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/forum/placements")
      if (response.ok) {
        const data = await response.json()
        setPosts(data)
      }
    } catch (error) {
      console.error("Error fetching posts:", error)
    } finally {
      setLoading(false)
    }
  }

  const filteredPosts = posts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Placements Forum</h1>
          <p className="text-muted-foreground">Discuss placements, job opportunities, and interviews</p>
        </div>
        <Link href="/dashboard/placements/create">
          <Button>New Post</Button>
        </Link>
      </div>

      <div>
        <Input
          placeholder="Search discussions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
      </div>

      {loading ? (
        <div className="text-center py-12">Loading discussions...</div>
      ) : (
        <div className="space-y-4">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="hover:border-primary transition-colors cursor-pointer">
              <CardContent className="p-6 flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span>By {post.author}</span>
                    <span>•</span>
                    <span>{new Date(post.created_at).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{post.replies_count} replies</span>
                  </div>
                  <span className="inline-block px-2 py-1 bg-primary/20 text-primary text-xs rounded mt-3">
                    {post.category}
                  </span>
                </div>
                <Button variant="outline">View</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
