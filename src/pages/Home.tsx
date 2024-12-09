import { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import portfolioData from '../data/portfolioData.json';
import '../styles/Home.css';

const Home = () => {

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const workerRef = useRef<Worker>();

  // Create particle animation objects using the canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const particles: Array<{ x: number; y: number; dx: number; dy: number }> = [];

    const animate = () => {
      ctx.fillStyle = portfolioData.landing.canvas.fadeEffect;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        ctx.fillStyle = portfolioData.landing.canvas.particleColor;
        ctx.fillRect(particle.x, particle.y, 2, 2);

        particle.x += particle.dx;
        particle.y += particle.dy;

        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;
      });

      animationId = requestAnimationFrame(animate);
    };

    for (let i = 0; i < portfolioData.landing.canvas.particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2
      });
    }

    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  useEffect(() => {
    const workerCode = `
      self.onmessage = function(e) {
        const result = e.data * 2;
        self.postMessage(result);
      }
    `;
    const blob = new Blob([workerCode], { type: 'application/javascript' });
    workerRef.current = new Worker(URL.createObjectURL(blob));

    return () => workerRef.current?.terminate();
  }, []);

  return (
    <div className='landing-container'>
      <div className='content-wrapper'>

        <div className='content-text'>
          <h1>Hi, I'm {portfolioData.landing.name}</h1>
          <h2>{portfolioData.landing.title}</h2>
          <div className='about-me'>
            <p>{portfolioData.landing.description}</p>
          </div>
          <div className='social-links'>
            <a href={portfolioData.landing.social.github} target='_blank' className="link">
              <Github size={28} />
            </a>
            <a href={portfolioData.landing.social.linkedin} target='_blank' className="link">
              <Linkedin size={28} />
            </a>
            <a href={`mailto:${portfolioData.landing.social.email}`} target='_blank' className="link">
              <Mail size={28} />
            </a>
          </div>
        </div>

        <canvas
          ref={canvasRef}
          className='canvas'
        />
      </div>
    </div>
  );
};

export default Home;