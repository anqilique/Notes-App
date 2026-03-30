import { useEffect, useState } from "react";

import axios from "axios";

import Navbar from '../components/Navbar';
import RateLimitedUI from '../components/RateLimitedUI';

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(true);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("/api/notes");
      } catch (error) {}

    }

    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      { isRateLimited && <RateLimitedUI /> }
    </div>
  )
}

export default HomePage;