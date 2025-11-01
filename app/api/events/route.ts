export async function GET() {
  return Response.json([
    {
      id: "1",
      title: "Tech Talk: AI in Education",
      date: "Nov 15, 2024",
      location: "Auditorium A",
      category: "Seminar",
      attendees_count: 45,
    },
    {
      id: "2",
      title: "Workshop: Web Development",
      date: "Nov 18, 2024",
      location: "Lab B",
      category: "Workshop",
      attendees_count: 30,
    },
    {
      id: "3",
      title: "Annual Sports Day",
      date: "Nov 20, 2024",
      location: "Sports Ground",
      category: "Sports",
      attendees_count: 200,
    },
  ])
}
