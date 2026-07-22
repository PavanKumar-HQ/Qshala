import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export async function triggerConfetti() {
  const { default: confetti } = await import('canvas-confetti');
  
  const count = 200;
  const defaults = {
    origin: { y: 0.7 }
  };

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio)
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
    colors: ['#30B2E7', '#FDB913', '#75B543']
  });
  fire(0.2, {
    spread: 60,
    colors: ['#30B2E7', '#FDB913', '#75B543']
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
    colors: ['#30B2E7', '#FDB913', '#75B543']
  });
}
