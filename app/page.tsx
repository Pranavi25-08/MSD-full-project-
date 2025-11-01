import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">CF</span>
            </div>
            <h1 className="text-xl font-bold text-primary">Campus Flow</h1>
          </div>
          <div className="flex gap-4">
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8 mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-balance">
            Welcome to <span className="text-primary">Campus Flow</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your all-in-one platform for campus events, placement forums, and student community engagement
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Link href="/signup">
              <Button size="lg" className="px-8">
                Get Started
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline" className="px-8 bg-transparent">
                Explore
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 py-12">
          <div className="bg-card border border-border rounded-lg p-8 space-y-4">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary text-xl">
              📅
            </div>
            <h3 className="text-lg font-bold">Events</h3>
            <p className="text-muted-foreground">
              Create and discover campus events, manage attendance, and stay updated
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 space-y-4">
            <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center text-secondary text-xl">
              💼
            </div>
            <h3 className="text-lg font-bold">Placements</h3>
            <p className="text-muted-foreground">
              Connect with recruiters, share experiences, and discuss placement opportunities
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 space-y-4">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center text-accent text-xl">
              👥
            </div>
            <h3 className="text-lg font-bold">Community</h3>
            <p className="text-muted-foreground">Build your profile, connect with peers, and grow your network</p>
          </div>
        </div>
      </main>
    </div>
  )
}
