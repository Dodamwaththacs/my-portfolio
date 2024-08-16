import React, { useEffect, useRef } from "react";

const GlitchEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let requestId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createGlitch = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < 20; i++) {
        ctx.beginPath();
        ctx.moveTo(Math.random() * canvas.width, 0);
        ctx.lineTo(Math.random() * canvas.width, canvas.height);
        ctx.strokeStyle = `rgba(255, 255, 255, ${Math.random() * 0.1})`;
        ctx.lineWidth = Math.random() * 5;
        ctx.stroke();
      }

      for (let i = 0; i < 5; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const width = Math.random() * 100;
        const height = Math.random() * 100;
        ctx.fillStyle = `rgba(0, 255, 255, ${Math.random() * 0.1})`;
        ctx.fillRect(x, y, width, height);
      }

      requestId = requestAnimationFrame(createGlitch);
    };

    window.addEventListener("resize", resize);
    resize();
    createGlitch();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(requestId);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
  );
};

export default GlitchEffect;
