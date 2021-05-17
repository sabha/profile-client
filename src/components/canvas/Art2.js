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

function Art2() {
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
    const len = 15;
    for (let column = 1; column < vw / len - 2; column++) {
      for (let row = 1; row < vh / len - 2; row++) {
        const r = random(2);
        const x = column * len;
        const y = row * len;
        if (r === 0) {
          line({ x: x + len / 2, y }, { x: x + len / 2, y: y + len });
        } else {
          line({ x, y: y + len / 2 }, { x: x + len, y: y + len / 2 });
        }
      }
    }
    ctx.stroke();
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

export default Art2;
