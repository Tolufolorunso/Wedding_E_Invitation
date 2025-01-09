'use client';

import fetchApi from '@/utils/fetch-api';
import { useState } from 'react';
import { toast } from 'react-toastify';

function Rsvp({ name, id }) {
  const [data, setData] = useState({
    numberOfGuest: 0,
    rsvp: 'Undecided Yet',
    message: 'No Message',
  });
  const [loading, setLoading] = useState(false);

  const handleOnchange = (e) => {
    console.log(e.target.name);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitRsvp = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log(1, id, data);

    try {
      const res = await fetchApi('/', 'PATCH', {
        id,
        ...data,
      });
      toast.success(res.message || 'RSVP added successfully!');
    } catch (error) {
      console.log(error);
      toast.error(error?.message || 'Something went wrong, please try again.');
    } finally {
      setMessage('');
      setRsvp('');
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid py-5" id="rsvp">
      <div className="container py-5">
        <div className="section-title position-relative text-center">
          <h6
            className="text-uppercase text-primary mb-3"
            style={{ letterSpacing: '3px' }}
          >
            RSVP
          </h6>
          <h1 className="font-secondary display-4">Join Our Party</h1>
          <i className="far fa-heart text-dark"></i>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center">
              <form onSubmit={submitRsvp}>
                <div className="form-row">
                  <div className="form-group col-sm-6">
                    <input
                      type="text"
                      className="form-control bg-secondary border-0 py-4 px-3"
                      value={name}
                      readOnly
                      disabled
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <select
                      className="form-control bg-secondary border-0"
                      style={{ height: '52px' }}
                      name="numberOfGuest"
                      onChange={handleOnchange}
                    >
                      <option selected disabled>
                        Number of Guest of yours
                      </option>
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                    </select>
                  </div>
                </div>
                <div className="form-group text-left">
                  <label htmlFor="rsvp">RSVP (Are you Coming?)</label>
                  <select
                    id="rsvp"
                    className="form-control bg-secondary border-0"
                    style={{ height: '52px' }}
                    name="rsvp"
                    onChange={handleOnchange}
                    value={data.rsvp}
                    required
                  >
                    <option value="I'm Attending">I'm Attending</option>
                    <option value="I'm not Attending">I'm not Attending</option>
                    <option value="Undecided Yet">Undecided Yet</option>
                  </select>
                </div>
                <div className="form-group text-left">
                  <label htmlFor="message">Drop Oko ati Iyawo a Message</label>
                  <textarea
                    id="message"
                    className="form-control bg-secondary border-0 py-2 px-3"
                    rows="5"
                    placeholder="Message"
                    onChange={handleOnchange}
                    value={data.message}
                    name="message"
                  ></textarea>
                </div>
                <div>
                  <button
                    className="btn btn-primary font-weight-bold py-3 px-5"
                    type="submit"
                  >
                    Submit
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

export default Rsvp;
