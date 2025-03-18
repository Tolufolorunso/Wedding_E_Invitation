'use client';
import groomBridefriends, { babies, bridegroom } from '@/utils/friends';
import Image from 'next/image';
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
            Families and Friends
          </h6>
          <h1 className="font-secondary display-4">Our Squad</h1>
          <i className="far fa-heart text-dark"></i>
        </div>
        <div className="mt-4 mb-5">
          <h4 className="font-secondary display-6 text-center mb-2">
            Little Bride & Ring Bearer
          </h4>
          <div className="row portfolio-container mb-4">
            {babies.map((friend, index) => {
              return (
                <div className="col-lg-6 col-md-6 position-relative mb-2">
                  <div
                    style={{
                      height: '500px',
                    }}
                  >
                    <img
                      className="img-fluid w-100 h-100"
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center top',
                      }}
                      src={friend.img}
                      alt={friend.name}
                    />
                  </div>
                  <div className="bg-secondary text-center p-3">
                    <h5 className="mb-2">{friend.name}</h5>
                    <p className="text-uppercase">{friend.friend}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-4 mb-5">
          <h4 className="font-secondary display-6 text-center mb-2">
            Chief Bridesmaid & Best Man
          </h4>
          <div className="row portfolio-container mb-4">
            {bridegroom.map((friend, index) => {
              return (
                <div
                  className="col-lg-6 col-md-6  portfolio-item first"
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
                    <div style={{ height: '500px' }}>
                      <img
                        className="img-fluid w-100 h-100"
                        style={{
                          objectFit: 'cover',
                          objectPosition: ' top',
                        }}
                        src={friend.img}
                        alt={friend.name}
                      />
                    </div>

                    <div className="bg-secondary text-center p-3">
                      <h5 className="mb-2">{friend.name}</h5>
                      <p className="text-uppercase">{friend.friend}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center mb-1">
            <ul className="list-inline mb-4" id="portfolio-flters">
              <li
                className={`btn ${
                  type === 'groom' ? 'btn-primary' : 'btn-outline-primary'
                } font-weight-bold m-1 py-2 px-4`}
                onClick={() => setType('groom')}
              >
                Groomsmen
              </li>
              <li
                className={`btn ${
                  type === 'bride' ? 'btn-primary' : 'btn-outline-primary'
                } font-weight-bold m-1 py-2 px-4`}
                onClick={() => setType('bride')}
              >
                Bridesmaids
              </li>
            </ul>
          </div>
        </div>
        <div className="row portfolio-contai">
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
                  <div style={{ height: '400px' }}>
                    <img
                      className="img-fluid w-100 h-100"
                      style={{ objectFit: 'cover', objectPosition: ' top' }}
                      src={friend.img}
                      alt={friend.name}
                    />
                  </div>

                  <div className="bg-secondary text-center p-4">
                    <h5 className="mb-3">{friend.name}</h5>
                    <p className="text-uppercase">{friend.friend}</p>
                    <div className="d-inline-block">
                      <a
                        className="mx-2"
                        href={friend.social[0]}
                        target={
                          friend.social[0].includes('#') ? '_self' : '_blank'
                        }
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a
                        className="mx-2"
                        href={friend.social[1]}
                        target={
                          friend.social[1].includes('#') ? '_self' : '_blank'
                        }
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a
                        className="mx-2"
                        href={friend.social[2]}
                        target={
                          friend.social[2].includes('#') ? '_self' : '_blank'
                        }
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a
                        className="mx-2"
                        href={friend.social[3]}
                        target={
                          friend.social[3].includes('#') ? '_self' : '_blank'
                        }
                      >
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
