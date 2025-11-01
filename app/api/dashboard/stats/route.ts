export async function GET() {
  return Response.json({
    stats: {
      upcomingEvents: 5,
      forumPosts: 12,
      attendedEvents: 8,
    },
    recentEvents: [
      { id: "1", title: "Tech Talk: AI in Education", date: "Nov 15, 2024" },
      { id: "2", title: "Sports Day 2024", date: "Nov 20, 2024" },
      { id: "3", title: "Career Fair", date: "Nov 25, 2024" },
    ],
  })
}
