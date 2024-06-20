import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Film } from "./film.interface";
import "./about-page.scss"; // Import the new styles

export function AboutPage() {
  const { filmId } = useParams();
  const navigate = useNavigate();
  const [filmDetails, setFilmDetails] = useState<Film>();

  useEffect(() => {
    axios
      .get(`https://ghibliapi.vercel.app/films/${filmId}`)
      .then((response) => setFilmDetails(response.data));
  }, [filmId]);

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="about-page">
      <h1>Welcome to {filmDetails?.title}</h1>
      <div className="details">
        <p>Details: {filmDetails?.description}</p>
        <p>Director: {filmDetails?.director}</p>
        <p>ID: {filmDetails?.id}</p>
        <p>Locations: {filmDetails?.locations.join(', ')}</p>
        <p>Movie Banner: <img src={filmDetails?.movie_banner} alt="Movie Banner" /></p>
        <p>Original Title: {filmDetails?.original_title}</p>
        <p>People: {filmDetails?.people}</p>
        <p>Producer: {filmDetails?.producer}</p>
        <p>Release Date: {filmDetails?.release_date}</p>
        <p>Running Time: {filmDetails?.running_time}</p>
        <p>RT score: {filmDetails?.rt_score}</p>
        <p>Species: {filmDetails?.species.join(', ')}</p>
        <p>URL: <a href={filmDetails?.url}>{filmDetails?.url}</a></p>
        <p>Vehicles: {filmDetails?.vehicles.join(', ')}</p>
      </div>
      <button className="back-button" onClick={handleBack}>Go Back</button>
    </div>
  );
}

export default AboutPage;
