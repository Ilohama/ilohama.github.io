export default function P2End() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-3xl">GG !</h1>
      <iframe
        height="20"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={process.env.NEXT_PUBLIC_SC_MIX_REWARD}
        className="w-full md:w-4/5 mx-auto"
      />
    </div>
  );
}
