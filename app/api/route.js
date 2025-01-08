import connectMongoDB from "@/db/connectMongoDB";
import Invitee from "@/model/invitees";

export async function POST(request) {
  const { firstname, lastname } = await request.json();
  const baseURL = request.nextUrl.origin;
  await connectMongoDB();

  if (!firstname || !lastname) {
    return Response.json(
      { status: false, errorMessage: "Please provide all fields" },
      { status: 400 }
    );
  }

  try {
    const newInvitee = new Invitee({
      firstname,
      lastname,
    });

    newInvitee.url = `${baseURL}/${newInvitee._id}`;
    await newInvitee.save();
    return Response.json(
      { message: "Invitee added successfully", status: true },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { status: false, errorMessage: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  await connectMongoDB();

  try {
    const newInvitee = new Invitee({
      firstname,
      lastname,
    });

    newInvitee.url = `${baseURL}/${newInvitee._id}`;
    await newInvitee.save();
    return Response.json(
      { message: "Invitee added successfully", status: true },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { status: false, errorMessage: "Something went wrong" },
      { status: 500 }
    );
  }
}
