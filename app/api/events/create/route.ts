export async function POST(request: Request) {
  const body = await request.json()

  console.log("Create event:", body)

  return Response.json({
    success: true,
    message: "Event created successfully",
  })
}
