import { popularOneMoviesData as trailers } from "@/data/movie";
import MovieCard from "../Card/MovieCard";

export default function MovieList() {
  return (
    <div className="genres-area py-80">
      <div className="container">
        {trailers && trailers.length > 0 && (
          <div className="row row-gap-4">
            {trailers.reverse().map((movie, index) => (
              <div key={index} className="col-lg-4 col-sm-6">
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
