import { useEffect, useRef } from "react";

// A single canvas keeps the network out of React's render loop.
export function NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0, height = 0, frame = 0, lastTime = 0;
    let visible = true;
    let nodes: { x: number; y: number; vx: number; vy: number; phase: number }[] = [];
    const pointer = { x: -1000, y: -1000 };

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = width * ratio;
      canvas!.height = height * ratio;
      context!.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = Math.min(width < 768 ? 34 : 85, Math.floor(width * height / 15000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width, y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22, vy: (Math.random() - 0.5) * 0.22,
        phase: Math.random() * Math.PI * 2,
      }));
      if (motion.matches) draw(0);
    }

    function draw(time: number) {
      const ctx = context!;
      const delta = Math.min((time - lastTime) / 16.67 || 1, 2);
      lastTime = time;
      ctx.clearRect(0, 0, width, height);
      nodes.forEach((node, i) => {
        if (!motion.matches) {
          node.x += node.vx * delta;
          node.y += node.vy * delta;
          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;
        }
        const proximity = Math.hypot(node.x - pointer.x, node.y - pointer.y);
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const distance = Math.hypot(node.x - other.x, node.y - other.y);
          if (distance > 165) continue;
          const strength = 1 - distance / 165;
          ctx.strokeStyle = `rgba(55,105,162,${strength * (proximity < 220 ? 0.5 : 0.19)})`;
          ctx.lineWidth = 0.7;
          ctx.beginPath(); ctx.moveTo(node.x, node.y); ctx.lineTo(other.x, other.y); ctx.stroke();
          if (!motion.matches && strength > 0.3 && i % 4 === 0) {
            const progress = (time * 0.00015 + node.phase) % 1;
            ctx.fillStyle = `rgba(18,121,157,${strength * 0.65})`;
            ctx.beginPath();
            ctx.arc(node.x + (other.x - node.x) * progress, node.y + (other.y - node.y) * progress, 1.4, 0, Math.PI * 2);
            ctx.fill();
          }
        }
        if (proximity < 190) {
          ctx.strokeStyle = `rgba(27,118,163,${(1 - proximity / 190) * 0.45})`;
          ctx.beginPath(); ctx.moveTo(node.x, node.y); ctx.lineTo(pointer.x, pointer.y); ctx.stroke();
        }
        ctx.fillStyle = proximity < 190 ? "#267baf" : `rgba(53,112,170,${0.35 + Math.sin(time * 0.0008 + node.phase) * 0.15})`;
        ctx.beginPath(); ctx.arc(node.x, node.y, proximity < 190 ? 2.3 : 1.5, 0, Math.PI * 2); ctx.fill();
      });
    }
    function tick(time: number) {
      if (visible && !motion.matches) draw(time);
      frame = requestAnimationFrame(tick);
    }
    function move(event: PointerEvent) { pointer.x = event.clientX; pointer.y = event.clientY; }
    function leave() { pointer.x = pointer.y = -1000; }
    function sync() {
      cancelAnimationFrame(frame);
      visible = !document.hidden;
      if (visible && !motion.matches) frame = requestAnimationFrame(tick);
      else if (visible) draw(0);
    }
    resize(); sync();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", leave);
    document.addEventListener("visibilitychange", sync);
    motion.addEventListener("change", sync);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      document.removeEventListener("visibilitychange", sync);
      motion.removeEventListener("change", sync);
    };
  }, []);

  return <canvas ref={canvasRef} className="neural-network" aria-hidden="true" />;
}
