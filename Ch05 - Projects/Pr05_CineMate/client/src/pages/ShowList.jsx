import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useLocation, useParams } from 'react-router-dom';
import { jwtToken } from '../constants/authToken';
import moment from "moment";

const ShowsList = () => {
  const [shows, setShows] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { theatreId } = useParams();
  const [movies, setMovies] = useState([]);
  const [newShow, setNewShow] = useState({
    name: '',
    movie: '',
    theatre: theatreId,
    date: '',
    time: '',
    totalSeats: '',
    ticketPrice: '',
  });

  const location = useLocation();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewShow({ ...newShow, [name]: value });
  };

  const handleAddShow = (e) => {
    e.preventDefault();
    fetch("http://localhost:5010/api/show", {
      method: "POST",
      body: JSON.stringify(newShow),
      headers: {
        "Content-Type": "application/json",
        jwttoken: jwtToken
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setShows([...shows, newShow]);
        setNewShow({
          name: '',
          movie: '',
          date: '',
          time: '',
          theatre: theatreId,
          totalSeats: '',
          ticketPrice: '',
        });
        setModalIsOpen(false);
      })
      .catch((e) => {
        window.alert(e.message);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5010/api/show?theatre=${theatreId}`, {
      headers: {
        jwttoken: jwtToken
      },
    })
      .then((res) => res.json())
      .then((data) => setShows(data));

    fetch("http://localhost:5010/api/movie", {
        headers: {
          jwttoken: jwtToken
        },
      })
        .then((res) => res.json())
        .then((data) => setMovies(data));
  }, []);


  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Shows</h2>
        <div className="mb-4 flex justify-between items-center">
          <input
            type="text"
            placeholder="Search by show"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline max-w-sm"
          />
          {location.pathname.startsWith('/owner') && (
            <button
                onClick={() => setModalIsOpen(true)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Add Show
            </button>
          )}
        </div>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200">Name</th>
              <th className="py-2 px-4 border-b border-gray-200">Movie</th>
              <th className="py-2 px-4 border-b border-gray-200">Date</th>
              <th className="py-2 px-4 border-b border-gray-200">Time</th>
              <th className="py-2 px-4 border-b border-gray-200">Total Seats</th>
              <th className="py-2 px-4 border-b border-gray-200">Price</th>
              {location.pathname.startsWith('/owner') && (
                <th className="py-2 px-4 border-b border-gray-200">Actions</th>
              )}
            </tr>
          </thead>
          <tbody>
            {shows.map((show, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b border-gray-200">{show.name}</td>
                <td className="py-2 px-4 border-b border-gray-200">{movies.find(movie =>  movie._id === show.movie)?.title}</td>
                <td className="py-2 px-4 border-b border-gray-200">{moment(show.date).format('DD-MM-YYYY')}</td>
                <td className="py-2 px-4 border-b border-gray-200">{show.time}</td>
                <td className="py-2 px-4 border-b border-gray-200">{show.totalSeats}</td>
                <td className="py-2 px-4 border-b border-gray-200">{show.ticketPrice}</td>
                {location.pathname.startsWith('/owner') && (
                  <td className="py-2 px-4 border-b border-gray-200 flex space-x-2">
                    <button
                      className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Add Show"
        className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg mt-12"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <h2 className="text-2xl font-bold mb-4">Add Show</h2>
        <form onSubmit={handleAddShow}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={newShow.name}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="movie">
              Movie
            </label>
            <select
              id="movie"
              name="movie"
              value={newShow.movie}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select Movie</option>
              {
                movies.map((movie) => (
                  <option value={movie._id}>{movie.title}</option>
                ))
              }
              
              <option value="Movie 2">Movie 2</option>
              {/* Add more movie options here */}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={newShow.date}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
              Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={newShow.time}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="totalSeats">
              Total Seats
            </label>
            <input
              type="number"
              id="totalSeats"
              name="totalSeats"
              value={newShow.totalSeats}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Total Seats"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ticketPrice">
              Price
            </label>
            <input
              type="text"
              id="ticketPrice"
              name="ticketPrice"
              value={newShow.ticketPrice}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Price"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={handleAddShow}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Show
            </button>
            <button
              type="button"
              onClick={() => setModalIsOpen(false)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cancel
            </button>
            </div>
        </form>
      </Modal>
    </div>
  );
};

export default ShowsList;