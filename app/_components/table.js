'use client';
import { toast } from 'react-toastify';

const Table = ({ data }) => {
  const handleCopy = (url) => {
    navigator.clipboard.writeText(url).then(() => {
      toast.info('URL copied to clipboard!');
    });
  };
  data = JSON.parse(data);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>RSVP</th>
            <th>Message</th>
            <th>No of Guest</th>
            <th>URL Link</th>
            <th>Copy</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                {item.firstname} {item.lastname}
              </td>
              <td>{item.rsvp}</td>
              <td>{item.message}</td>
              <td>{item.numberOfGuest}</td>
              <td>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.url}
                </a>
              </td>
              <td>
                <button
                  className="btn btn-primary font-weight-bold py-2 px-3"
                  onClick={() => handleCopy(item.url)}
                >
                  Copy
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
