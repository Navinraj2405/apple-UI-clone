import React from "react";

function Header() {
  return (
    <header className="w-full h-full overflow-hidden relative p-10 mt-5 shadow-xl">
      <video
        src="addvideo.mp4"
        className="w-full h-full object-cover rounded-xl shadow-xl"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        />
      </header>
  );
}

export default Header;
