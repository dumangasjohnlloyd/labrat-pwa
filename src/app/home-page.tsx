import { useEffect, useState } from "react";
import { Film } from "./film.interface";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./home-page.scss";  // Import the new styles

export function HomePage() {
  const [films, setFilms] = useState<Film[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://ghibliapi.vercel.app/films")
      .then((response) => setFilms(response.data));
  }, []);

  const handleNavigate = (filmId: string) => {
    navigate(filmId);
  };

  return (
    <div className="gallery">
      {films.map((film) => (
        <div
          key={film.id}
          className="film-item"
          onClick={() => handleNavigate(film.id)}
        >
          <img src={film.image} alt={film.title} className="film-image" />
          <div className="film-info">
            <p className="film-title">{film.title}</p>
            <p className="film-director">Directed by: {film.director}</p>
            <p className="film-release">Released: {film.release_date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
