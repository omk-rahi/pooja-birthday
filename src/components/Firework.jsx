import { Fireworks } from "@fireworks-js/react";
import { useEffect } from "react";
import { useRef } from "react";

function Firework() {
  const audioRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      audioRef.current.play();
    }, 1000);
  }, []);

  return (
    <>
      <Fireworks
        options={{ opacity: 0.5, delay: { min: 100, max: 150 } }}
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          position: "fixed",
        }}
      />
      <audio src="fireworks.mp3" loop ref={audioRef}></audio>
    </>
  );
}

export default Firework;
