export interface User {
  id: string
  email: string
  name: string
  roll_no: string
  department: string
  year: number
  avatar_url?: string
  bio?: string
  created_at: string
}

export interface Event {
  id: string
  title: string
  description: string
  date: string
  location: string
  organizer_id: string
  category: string
  attendees_count: number
  max_capacity?: number
  image_url?: string
  created_at: string
}

export interface ForumPost {
  id: string
  title: string
  content: string
  author_id: string
  category: string
  likes_count: number
  replies_count: number
  created_at: string
}

export interface AuthUser {
  id: string
  email: string
  role: "student" | "admin"
}
