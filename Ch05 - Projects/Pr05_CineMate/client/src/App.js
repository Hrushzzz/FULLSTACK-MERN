import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MovieList from './pages/MovieList';
import TheatreList from './pages/TheatreList';
import ShowsList from './pages/ShowList';
import MovieDetail from './pages/MovieDetail';
import Theatres from './pages/Theatres';
import ShowPage from './pages/ShowDetail';
import Navbar from './components/Navbar';
import Bookings from './pages/Bookings';
import Chat from './pages/Chat';
import io from 'socket.io-client';
import { loadStripe } from '@stripe/stripe-js';
export const stripePromise = loadStripe("pk_test_51QjO0gB2qkcK8mR1uGMlF2QGfo0YDjuPlVN218AMeLrYLSVD8Y3Ox9hkbIoDEGovPhu8KYZkYqkczqqdEx4w1HMs00PpyMibuo");

export const socket = io("http://localhost:5001");

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/movie/:movieId/theatres/:theatreId/shows/:showId" element={<ShowPage />} />
          <Route path="/movie/:movieId" element={<MovieDetail />} />
          <Route path="/movie/:movieId/theatres" element={<Theatres />} />
          <Route path="/admin/movies" element={<MovieList />} />
          <Route path="/admin/theatres" element={<TheatreList />} />
          <Route path="/admin/theatres/:theatreId/shows" element={<ShowsList />} />
          <Route path="/owner/theatres" element={<TheatreList />} />
          <Route path="/owner/theatres/:theatreId/shows" element={<ShowsList />} />
          <Route path="/profile/bookings" element={<Bookings />} />
          <Route path="/chat" element={<Chat />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;