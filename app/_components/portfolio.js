import friends from '@/utils/friends';

function Portfolio() {
  return (
    <div className="row portfolio-container">
      {friends.map((friend, index) => {
        return (
          <div
            className="col-lg-4 col-md-6 mb-4 portfolio-item first"
            key={index}
            style={{
              display:
                type === 'groom'
                  ? 'block'
                  : type === 'braid'
                  ? 'none'
                  : 'block',
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
  );
}

export default Portfolio;
