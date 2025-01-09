import connectMongoDB from '@/db/connectMongoDB';
import Invitee from '@/model/invitees';
import AddInviteeForm from '../_components/add-invitee-form';
import Table from '../_components/table';

export default async function Home() {
  await connectMongoDB();
  let invitees = await Invitee.find();
  console.log(invitees);
  return (
    <div className="container-fluid py-5" id="rsvp">
      <div className="container py-5">
        <div className="section-title position-relative text-center">
          <h6
            className="text-uppercase text-primary mb-3"
            style={{ letterSpacing: '3px' }}
          >
            Invitation page
          </h6>
          <h1 className="font-secondary display-4">Adesewa and Oluwafemi</h1>
          <i className="far fa-heart text-dark"></i>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center">
              <AddInviteeForm />
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <Table data={JSON.stringify(invitees)} />
      </div>
    </div>
  );
}
