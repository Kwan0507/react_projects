import Movie from "./content/Movie";
import { movieData } from "./movieData";

function App() {
  return (
    <div>
      <div className="container">
        {movieData.results.map((item) => {
          return (
            <Movie
              title={item.title}
              release_date={item.release_date}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
