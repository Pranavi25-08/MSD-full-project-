export async function GET() {
  return Response.json({
    name: "John Doe",
    email: "john@university.edu",
    rollNo: "21CSE001",
    department: "Computer Science",
    year: 3,
    bio: "Passionate about web development and competitive programming",
  })
}

export async function PUT(request: Request) {
  const body = await request.json()

  console.log("Update profile:", body)

  return Response.json({
    ...body,
    message: "Profile updated successfully",
  })
}
