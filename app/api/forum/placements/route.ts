export async function GET() {
  return Response.json([
    {
      id: "1",
      title: "Tips for Tech Interviews",
      author: "Raj Kumar",
      category: "Interview",
      replies_count: 23,
      created_at: "2024-11-10",
    },
    {
      id: "2",
      title: "Internship Experience at XYZ Corp",
      author: "Priya Singh",
      category: "Experience",
      replies_count: 15,
      created_at: "2024-11-09",
    },
    {
      id: "3",
      title: "Placement Statistics 2024",
      author: "Admin",
      category: "General",
      replies_count: 42,
      created_at: "2024-11-08",
    },
  ])
}
