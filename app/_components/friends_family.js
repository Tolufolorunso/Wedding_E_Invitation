'use client';
import groomBridefriends from '@/utils/friends';
import { useState } from 'react';

function FamilyFriend() {
  const [type, setType] = useState('');

  return (
    <div className="container-fluid py-5" id="family">
      <div className="container pt-5 pb-3">
        <div className="section-title position-relative text-center">
          <h6
            className="text-uppercase text-primary mb-3"
            style={{ letterSpacing: '3px' }}
          >
            Friends & Family
          </h6>
          <h1 className="font-secondary display-4">
            Men in Agbada & Bridesmaid
          </h1>
          <i className="far fa-heart text-dark"></i>
        </div>
        <div className="row">
          <div className="col-12 text-center mb-2">
            <ul className="list-inline mb-4" id="portfolio-flters">
              <li
                className={`btn ${
                  type === 'groom' ? 'btn-primary' : 'btn-outline-primary'
                } font-weight-bold m-1 py-2 px-4`}
                onClick={() => setType('groom')}
              >
                Men in Agbada
              </li>
              <li
                className={`btn ${
                  type === 'bride' ? 'btn-primary' : 'btn-outline-primary'
                } font-weight-bold m-1 py-2 px-4`}
                onClick={() => setType('bride')}
              >
                Bridesmaid
              </li>
            </ul>
          </div>
        </div>
        <div className="row portfolio-container">
          {groomBridefriends.map((friend, index) => {
            return (
              <div
                className="col-lg-4 col-md-6 mb-4 portfolio-item first"
                key={index}
                style={{
                  display:
                    type === ''
                      ? 'block'
                      : type === friend.type
                      ? 'block'
                      : 'none',
                }}
              >
                <div className="position-relative mb-2">
                  <img className="img-fluid w-100" src={friend.img} alt="" />
                  <div className="bg-secondary text-center p-4">
                    <h4 className="mb-3">{friend.name}</h4>
                    <p className="text-uppercase">{friend.friend}</p>
                    <div className="d-inline-block">
                      <a className="mx-2" href={friend.social[0]}>
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a className="mx-2" href={friend.social[1]}>
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a className="mx-2" href={friend.social[2]}>
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a className="mx-2" href={friend.social[3]}>
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FamilyFriend;
