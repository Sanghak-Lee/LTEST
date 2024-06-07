import React, { useState, useEffect, useRef } from 'react';

const Game = () => {
  const canvasRef = useRef(null);
  const [player, setPlayer] = useState({ x: 200, y: 500, width: 20, height: 20 });
  const [poops, setPoops] = useState([]);
  const [score, setScore] = useState(0);
  const gameLoopRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Initialize poops
    setPoops([{ x: Math.random() * canvas.width, y: 0, width: 20, height: 20 }]);

    return () => {
      cancelAnimationFrame(gameLoopRef.current);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        setPlayer((prev) => ({ ...prev, x: prev.x - 10 }));
      } else if (event.key === 'ArrowRight') {
        setPlayer((prev) => ({ ...prev, x: prev.x + 10 }));
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    gameLoopRef.current = requestAnimationFrame(function gameLoop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const newPoops = poops
        .map((poop) => ({ ...poop, y: poop.y + 10 }))
        .filter((poop) => poop.y < canvas.height);

      if (Math.random() < 0.1) {
        newPoops.push({ x: Math.random() * canvas.width, y: 0, width: 20, height: 20 });
      }

      setPoops(newPoops);

      newPoops.forEach((poop) => {
        if (
          player.x < poop.x + poop.width &&
          player.x + player.width > poop.x &&
          player.y < poop.y + poop.height &&
          player.y + player.height > poop.y
        ) {
          alert('Game Over');
          setPlayer({ x: 200, y: 500, width: 30, height: 30 });
          setPoops([]);
          setScore(0);
        }
      });

      setScore((prev) => prev + 1);

      ctx.fillStyle = 'brown';
      newPoops.forEach((poop) => {
        ctx.fillRect(poop.x, poop.y, poop.width, poop.height);
      });

      ctx.fillStyle = 'green';
      ctx.fillRect(player.x, player.y, player.width, player.height);

      gameLoopRef.current = requestAnimationFrame(gameLoop);
    });

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      cancelAnimationFrame(gameLoopRef.current)
      }
    }, [poops, player]);
  
    return (
      <div style={{maxWidth:'100vw',maxHeight:'100vh',overflow:'hidden'}}>
        <h1>Poop Dodger</h1>
        <p>Score: {score}</p>
        <canvas ref={canvasRef} width={400} height={600} />
        <button onClick={startGame}>Start Game</button>
      </div>
    );
  
    function startGame() {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
  
      setPoops([{ x: Math.random() * canvas.width, y: 0, width: 20, height: 20 }]);
      setPlayer({ x: 200, y: 500, width: 20, height: 20 });
      setScore(0);
  
      gameLoopRef.current = requestAnimationFrame(function gameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
  
        const newPoops = poops
          .map((poop) => ({ ...poop, y: poop.y + 10 }))
          .filter((poop) => poop.y < canvas.height);
  
        if (Math.random() < 0.1) {
          newPoops.push({ x: Math.random() * canvas.width, y: 0, width: 20, height: 20 });
        }
  
        setPoops(newPoops);
  
        newPoops.forEach((poop) => {
          if (
            player.x < poop.x + poop.width &&
            player.x + player.width > poop.x &&
            player.y < poop.y + poop.height &&
            player.y + player.height > poop.y
          ) {
            alert('Game Over');
            setPlayer({ x: 200, y: 500, width: 20, height: 20 });
            setPoops([]);
            setScore(0);
          }
        });
  
        setScore((prev) => prev + 1);
  
        ctx.fillStyle = 'brown';
        newPoops.forEach((poop) => {
          ctx.fillRect(poop.x, poop.y, poop.width, poop.height);
        });
  
        ctx.fillStyle = 'green';
        ctx.fillRect(player.x, player.y, player.width, player.height);
  
        gameLoopRef.current = requestAnimationFrame(gameLoop);
      });
    }
  };
  
  export default Game;
  