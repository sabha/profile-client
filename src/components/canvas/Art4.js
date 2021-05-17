import React from "react";

const clrs = [
  "#81B29A",
  "#F2CC8F",
  "#3D405B",
  "#0D2E41",
  "#44AD9F",
  //"#FA6135",
  "#F28A80",
  "#9ACFDD",
  "#202731",
  "#CABAAB",
  "#FFBFBF",
  "#FFD5D5",
];
const random = (max) => Math.floor(Math.random() * max);

function Art4() {
  const canvasRef = React.useRef(null);
  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const vw = canvas.width;
    const vh = canvas.height;
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    ctx.lineCap = "round";
    const line = (p1, p2, alpha = 1) => {
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
    };
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
