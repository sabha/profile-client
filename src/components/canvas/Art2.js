import React from "react";

const random = (max) => Math.floor(Math.random() * max);

function Art2() {
  const canvasRef = React.useRef(null);
  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const vw = canvas.width;
    const vh = canvas.height;
    ctx.lineCap = "round";
    const line = (p1, p2, alpha = 1) => {
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
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
