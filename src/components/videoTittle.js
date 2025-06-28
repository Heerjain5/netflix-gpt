const VideoTittle = ({ tittle, overview }) => {
  return (
    <div className="pt-36 px-12 text-white absolute">
      <h1 className="text-6xl font-bold">{tittle}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-gray-500 text-white p-4 px-16 text-xl bg-opacity-50 rounded-lg">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-white p-4 px-16 text-xl bg-opacity-50 rounded-lg ml-4">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTittle;