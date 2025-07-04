import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTittle from "./videoTittle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies || movies.length === 0) {
    return <div className="text-black">Loading movies...</div>;
  }

  const mainMovie = movies[0];
  
  const { original_title, overview, id } = mainMovie;

  return (
    <div className=" pt-[30%] bg-whites min-h-screen md:pt-0">
      <VideoTittle tittle={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
