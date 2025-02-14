import connectMongoDB from '@/db/connectMongoDB';
import Invitee from '@/model/invitees';

export const revalidate = 0;

export async function POST(request) {
  let { firstname, lastname, title } = await request.json();
  const baseURL = request.nextUrl.origin;
  await connectMongoDB();

  if (!firstname || !lastname) {
    return Response.json(
      { status: false, errorMessage: 'Please provide all fields' },
      { status: 400 }
    );
  }

  firstname =
    firstname.charAt(0).toUpperCase() + firstname.slice(1).toLowerCase();
  lastname = lastname.charAt(0).toUpperCase() + lastname.slice(1).toLowerCase();
  title = title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();

  let fullname = `${title} ${firstname} ${lastname}`;

  try {
    const newInvitee = new Invitee({
      firstname,
      lastname,
      fullname,
    });

    newInvitee.url = `${baseURL}/${newInvitee._id}`;
    await newInvitee.save();
    return Response.json(
      { message: 'Invitee added successfully', status: true },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { status: false, errorMessage: 'Something went wrong' },
      { status: 500 }
    );
  }
}

export async function PATCH(request) {
  let { id, rsvp, message, numberOfGuest } = await request.json();
  await connectMongoDB();

  message = message || 'No Message';

  if (!id || !rsvp) {
    return Response.json(
      { status: false, errorMessage: 'Please provide all fields' },
      { status: 400 }
    );
  }

  try {
    const updatedRsvp = await Invitee.findByIdAndUpdate(
      { _id: '677d8eab91fcfabfe3265e09' },
      { rsvp, message, numberOfGuest: numberOfGuest || 0 },
      { new: true }
    );

    return Response.json(
      { message: 'RSVP added successfully', status: true },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { status: false, errorMessage: 'Something went wrong' },
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
      { message: 'Invitee added successfully', status: true },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { status: false, errorMessage: 'Something went wrong' },
      { status: 500 }
    );
  }
}
