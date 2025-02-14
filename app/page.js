'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const [pass, setPass] = useState();
  const router = useRouter();
  const pin = 20250405;

  const login = () => {
    if (pin === Number(pass)) {
      localStorage.clear();
      localStorage.setItem('pass', 'pass');
      return router.replace('/invitation-page');
    }
  };

  return (
    <div className="container-fluid py-5" id="rsvp">
      <div className="container py-5">
        <div className="section-title position-relative text-center">
          <h1 className="font-secondary display-4">Oluwafemi and Adesewa</h1>
          <i className="far fa-heart text-dark"></i>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control bg-secondary border-0 py-4 px-3"
                    placeholder="Enter secret code"
                    onChange={(e) => setPass(e.target.value)}
                    value={pass}
                  />
                </div>
                <div>
                  <button
                    className="btn btn-primary font-weight-bold py-3 px-5"
                    type="button"
                    onClick={login}
                  >
                    login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
