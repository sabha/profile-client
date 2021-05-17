import React from "react";

function Art4() {
  const canvasRef = React.useRef(null);
  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const vw = canvas.width;
    const vh = canvas.height;
    ctx.lineCap = "round";

    const circle = (x, y, r = 5) => {
      ctx.beginPath();
      ctx.arc(x, y, r, 0, 2 * Math.PI);
      ctx.stroke();
    };
    function recursive(radius) {
      if (radius < 0) return;
      circle(vw / 2, vh / 3 + radius / 2, radius);
      recursive(radius - 10);
    }
    recursive(90);
  }, []);
  return (
    <canvas
      ref={canvasRef}
      width={200}
      height={300}
      style={{
        border: "5px solid #000000",
        borderRadius: "5px",
        margin: "10px",
        padding: "10px",
      }}
    />
  );
}

export default Art4;
