import React from "react";

function Art5() {
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
    let r = 90;
    let lines = [];
    for (let c = 0; c < 12; c++) {
      r = r - c;
      let _lines = [];
      for (let i = 0; i < Math.PI * 2; i += 0.3) {
        const rand = Math.random() * 10;
        const x = cx + r * Math.cos(i) + rand;
        const y = cy + r * Math.sin(i) + rand;
        _lines.push({ x, y });
        //circle(x, y);
      }
      lines.push(_lines);
    }
    for (let l = 0; l < lines.length; l++) {
      for (let r = 0; r < lines[l].length - 1; r++) {
        const p1 = lines[l][r];
        const p2 = lines[l][r + 1];
        line(p1, p2);
      }
      line(lines[l][0], lines[l][lines[l].length - 1]);
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

export default Art5;
