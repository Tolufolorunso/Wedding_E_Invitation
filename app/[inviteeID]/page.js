import connectMongoDB from '@/db/connectMongoDB';
import Invitee from '@/model/invitees';
import { redirect } from 'next/navigation';
import Rsvp from '../_components/rsvp';
import FamilyFriend from '../_components/friends_family';
import Nav from '../_components/nav';

async function InvitationPage({ params }) {
  const inviteeID = (await params).inviteeID;

  await connectMongoDB();

  let invitee = await Invitee.findById(inviteeID);

  if (!invitee) {
    return redirect(`/contact`);
  }

  return (
    <>
      <Nav id={invitee._id} />
      {/* Carousel Start  */}
      <div className="container-fluid p-0 mb-5 pb-5" id="home">
        <div
          id="header-carousel"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div
              className="carousel-item position-relative active"
              style={{ height: '100vh', minHeight: '400px' }}
            >
              <img
                className="position-absolute w-100 h-100"
                src="img/carousel-4.jpg"
                style={{ objectFit: 'cover' }}
                alt="carousel-1"
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: '900px' }}>
                  <h1 className="display-1 font-secondary text-white mt-n3 mb-md-4">
                    Fẹ́mi & Sẹwà
                  </h1>
                  <div className="d-inline-block border-top border-bottom border-light py-3 px-4">
                    <h3
                      className="text-uppercase font-weight-normal text-white m-0"
                      style={{ letterSpacing: '2px' }}
                    >
                      We're getting married
                    </h3>
                  </div>
                  <div className="d-inline-block mt-3  py-3 px-4">
                    <h3
                      className="text-uppercase font-weight-normal text-white m-0"
                      style={{ letterSpacing: '2px' }}
                    >
                      You're cordially Invited: <br />
                      <span className="pt-1 small font-italic bg-dark">
                        {`${invitee.fullname}`}
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="carousel-item position-relative"
              style={{ height: '100vh', minHeight: '400px' }}
            >
              <img
                className="position-absolute w-100 h-100"
                src="img/carousel-2.jpg"
                style={{ objectFit: 'cover' }}
                alt="carousel-2"
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: '900px' }}>
                  <h1 className="display-1 font-secondary text-white mt-n3 mb-md-4">
                    Fẹ́mi & Sẹwà
                  </h1>
                  <div className="d-inline-block border-top border-bottom border-light py-3 px-4">
                    <h3
                      className="text-uppercase font-weight-normal text-white m-0"
                      style={{ letterSpacing: '2px' }}
                    >
                      We're getting married
                    </h3>
                  </div>
                  <button
                    type="button"
                    className="btn-play mx-auto"
                    data-toggle="modal"
                    data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                    data-target="#videoModal"
                  >
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <a
            className="carousel-control-prev justify-content-start"
            href="#header-carousel"
            data-slide="prev"
          >
            <div
              className="btn btn-primary px-0"
              style={{ width: '68px', height: '68px' }}
            >
              <span className="carousel-control-prev-icon mt-3"></span>
            </div>
          </a>
          <a
            className="carousel-control-next justify-content-end"
            href="#header-carousel"
            data-slide="next"
          >
            <div
              className="btn btn-primary px-0"
              style={{ width: '68px', height: '68px' }}
            >
              <span className="carousel-control-next-icon mt-3"></span>
            </div>
          </a> */}
        </div>
      </div>
      {/* Carousel End  */}

      {/* About Start  */}
      <div className="container-fluid py-5" id="about">
        <div className="container py-5">
          <div className="section-title position-relative text-center">
            <h6
              className="text-uppercase text-primary mb-3"
              style={{ letterSpacing: '3px' }}
            >
              About
            </h6>
            <h1 className="font-secondary display-4">Groom & Bride</h1>
            <i className="far fa-heart text-dark"></i>
          </div>
          <div className="row m-0 mb-4 mb-md-0 pb-2 pb-md-0">
            <div className="col-md-6 p-0 text-center text-md-right">
              <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-5">
                <h3 className="mb-3">The Groom</h3>
                <p>
                  The groom is a kind-hearted and charming soul, whose love,
                  strength, and unwavering commitment light up every room. With
                  a warm smile and a caring nature, he is the perfect partner to
                  embark on this beautiful journey of love and togetherness.
                </p>
                <h3 className="font-secondary font-weight-normal text-muted mb-3">
                  <i className="fa fa-male text-primary pr-3"></i>Oluwafemi
                </h3>
                <div className="position-relative">
                  <a
                    className="btn btn-outline-primary btn-square mr-1"
                    href="#"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-outline-primary btn-square mr-1"
                    href="#"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-outline-primary btn-square mr-1"
                    href="#"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a className="btn btn-outline-primary btn-square" href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 p-0"
              style={{ minHeight: '400px', position: 'relative' }}
            >
              <img
                className="position-absolute w-100 h-100"
                src="img/about-1.jpg"
                style={{ objectFit: 'cover' }}
                alt="about-1"
              />
            </div>
          </div>
          <div className="row m-0">
            <div
              className="col-md-6 p-0"
              style={{ minHeight: '400px', position: 'relative' }}
            >
              <img
                className="position-absolute w-100 h-100"
                src="img/about-2.jpg"
                style={{ objectFit: 'cover' }}
                alt="about-2"
              />
            </div>
            <div className="col-md-6 p-0 text-center text-md-left">
              <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-5">
                <h3 className="mb-3">The Bride</h3>
                <p>
                  The bride is a radiant and graceful presence, whose kindness
                  and joy touch everyone around her. With a heart full of love
                  and a spirit that inspires, she is the embodiment of beauty
                  and elegance, ready to begin this wonderful chapter of life.
                </p>
                <h3 className="font-secondary font-weight-normal text-muted mb-3">
                  <i className="fa fa-female text-primary pr-3"></i>Adesewa
                </h3>
                <div className="position-relative">
                  <a
                    className="btn btn-outline-primary btn-square mr-1"
                    href="#"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    className="btn btn-outline-primary btn-square mr-1"
                    href="#"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-outline-primary btn-square mr-1"
                    href="#"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a className="btn btn-outline-primary btn-square" href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End  */}

      {/* Story Start  */}
      <div className="container-fluid py-5" id="story">
        <div className="container pt-5 pb-3">
          <div className="section-title position-relative text-center">
            <h6
              className="text-uppercase text-primary mb-3"
              style={{ letterSpacing: '3px' }}
            >
              Story
            </h6>
            <h1 className="font-secondary display-4">Our Love Story</h1>
            <i className="far fa-heart text-dark"></i>
          </div>
          <div className="container timeline position-relative p-0">
            <div className="row">
              <div className="col-md-6 text-center text-md-right">
                <img
                  className="img-fluid mr-md-3"
                  src="img/story-1.jpg"
                  alt=""
                />
              </div>
              <div className="col-md-6 text-center text-md-left">
                <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4 ml-md-3">
                  <h4 className="mb-2">First Meet</h4>
                  <p className="text-uppercase mb-2">25th August, 2019</p>
                  <p className="m-0">
                    On August 25th, 2019, two paths crossed and a beautiful
                    story unfolded. We met on this blessed Sunday evening, when
                    I was coming from AYF Joint Fellowship from Messiah Anglican
                    with a friend Mr. Gbenga Ogundipe. It was the day our hearts
                    first connected, sparking a journey of love, laughter, and
                    endless possibilities. Little did we know, that moment would
                    change everything.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 text-center text-md-right">
                <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4 mr-md-3">
                  <h4 className="mb-2">First Date</h4>
                  <p className="text-uppercase mb-2">7th Sep, 2019</p>
                  <p className="m-0">
                    On September 7th, 2019, we took our first step into a world
                    of shared smiles and heartfelt conversations. It was a day
                    filled with butterflies, laughter, and the beginning of
                    something truly magical. Our first date marked the start of
                    a love story we’ll cherish forever.
                  </p>
                </div>
              </div>
              <div
                className="col-md-6 text-center text-md-left"
                style={{ width: '300px !important', height: '300px' }}
              >
                <img
                  className="img-fluid ml-md-3"
                  src="img/story-2.jpg"
                  alt=""
                  style={{
                    width: '100% !important',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-6 text-center text-md-right"
                style={{ width: '300px !important', height: '300px' }}
              >
                <img
                  className="img-fluid mr-md-3"
                  src="img/story-3.jpg"
                  alt=""
                  style={{
                    width: '100% !important',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div className="col-md-6 text-center text-md-left">
                <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4 ml-md-3">
                  <h4 className="mb-2">Proposal</h4>
                  <p className="text-uppercase mb-2">10th Oct. 2020</p>
                  <p className="m-0">
                    On October 10th, 2020, our hearts found their forever home.
                    With love as our guide, we took the first step into a
                    lifetime of shared dreams and endless happiness. This is
                    where our story began, and we’re so grateful to have you be
                    a part of it.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 text-center text-md-right">
                <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4 mr-md-3">
                  <h4 className="mb-2">Engagement</h4>
                  <p className="text-uppercase mb-2">5th April, 2025</p>
                  <p className="m-0">
                    Join us as we celebrate a day filled with love and joy on
                    April 5th, 2025! Together, let’s create unforgettable
                    memories and cherish every moment. Your presence will make
                    this day even more special. We can’t wait to share this
                    beautiful journey with you!
                  </p>
                </div>
              </div>
              <div className="col-md-6 text-center text-md-left">
                <img
                  className="img-fluid ml-md-3"
                  src="img/story-4.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Story End  */}

      {/* Event Start  */}
      <div className="container-fluid py-5" id="event">
        <div className="container py-5">
          <div className="section-title position-relative text-center">
            <h6
              className="text-uppercase text-primary mb-3"
              style={{ letterSpacing: '3px' }}
            >
              Event
            </h6>
            <h1 className="font-secondary display-4">Our Wedding Events</h1>
            <i className="far fa-heart text-dark"></i>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 text-center">
              <h5 className="font-weight-normal text-muted mb-3 pb-3">
                Join us as we celebrate the union of{' '}
                <span className="text-primary">Oluwafemi</span> and{' '}
                <span className="text-primary">Adesewa</span> in an
                unforgettable evening of love, laughter, and joy. Surrounded by
                families and friends, we will exchange our vows and begin our
                new life together.
              </h5>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 border-right border-primary">
              <div className="text-center text-md-right mr-md-3 mb-4 mb-md-0">
                <img className="img-fluid mb-4" src="img/event-1.jpg" alt="" />
                <h4 className="mb-3">Church Service</h4>
                <p className="mb-2">
                  @St. Peter's Anglican Church, Ipere Ekiti,Ilejemeje LG.
                  Nigeria
                </p>
                <p className="mb-0">Time: 9:00am</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-center text-md-left ml-md-3">
                <img className="img-fluid mb-4" src="img/event-2.jpg" alt="" />
                <h4 className="mb-3">Engagement / Reception</h4>
                <p className="mb-2">
                  @ Ijemo Street, Ipere Ekiti Ekiti, Nigeria
                </p>
                <p className="mb-0">12:00 pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Event End */}

      {/* Friends & Family Start */}
      <FamilyFriend />
      {/* Friends & Family End */}

      {/* RSVP Start */}
      <Rsvp id={invitee._id} fullname={`${invitee.fullname.toUpperCase()}`} />
      {/* RSVP End */}

      {/* Footer Start */}
      <div
        className="container-fluid bg-dark text-white py-5"
        id="contact"
        style={{ marginTop: '90px' }}
      >
        <div className="container text-center py-5">
          <div className="section-title position-relative text-center">
            <h1 className="font-secondary display-3 text-white">Thank You</h1>
            <i className="far fa-heart text-white"></i>
          </div>
          <div className="d-flex justify-content-center mb-4">
            <a
              className="btn btn-lg btn-outline-light btn-lg-square mr-2"
              href="https://x.com/Developer_Tolu"
              target="_blank"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="btn btn-lg btn-outline-light btn-lg-square mr-2"
              href="https://www.facebook.com/Tolu4you"
              target="_blank"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="btn btn-lg btn-outline-light btn-lg-square mr-2"
              href="https://www.linkedin.com/in/tolufolorunso/"
              target="_blank"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              className="btn btn-lg btn-outline-light btn-lg-square"
              href="https://www.instagram.com/developer_tolu/"
              target="_blank"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="d-flex justify-content-center py-2">
            <p className="text-white">tolufolorunso@yahoo.com</p>
            <span className="px-3">|</span>
            <p className="text-white">+2348068963757</p>
          </div>
          <p className="m-0">
            &copy;{' '}
            <a className="text-primary" href="#">
              2025
            </a>
            . Designed by{' '}
            <a
              className="text-primary"
              target="_blank"
              href="https://x.com/developer_tolu"
            >
              Tolulope Folorunso
            </a>
          </p>
        </div>
      </div>
      {/* Footer End */}
    </>
  );
}

export default InvitationPage;
