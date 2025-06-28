const VideoTittle = ({ tittle, overview }) => {
  return (
    // <div></div>
    <div className=" w-screen aspect-video pt-[10%] px-24 text-white absolute bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{tittle}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black p-4 px-12 text-xl  rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className=" mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg ml-4">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTittle;