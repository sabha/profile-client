import React from "react";

function Art3() {
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

    const len = 10;
    let lines = [];
    for (let row = 1; row <= vh / len - 1; row++) {
      let l = [];
      for (let col = 1; col <= vw / len - 1; col++) {
        const r = col > 5 && col <= vw / len - 5 ? Math.random() * 10 - 2 : 0;
        l.push({ x: col * len, y: row * len + r });
      }
      lines[row - 1] = l;
    }

    for (let l = 0; l < lines.length; l++) {
      //setAlpha(0.1 * l);
      for (let r = 0; r < lines[l].length - 1; r++) {
        const p1 = lines[l][r];
        const p2 = lines[l][r + 1];
        line(p1, p2);
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

export default Art3;
