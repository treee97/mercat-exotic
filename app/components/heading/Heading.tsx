const Heading = () => {
  return (
    <div className="min-h-screen">
      <h1 className="text-center text-6xl">El Arte De La Comida</h1>
      <video
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src="../video-mercat-exotic.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Heading;
