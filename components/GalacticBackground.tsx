"use client";

import React, { useEffect, useRef } from 'react';

export default function GalacticBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let w = canvas.width = window.innerWidth;
        let h = canvas.height = window.innerHeight;

        interface Star {
            x: number;
            y: number;
            size: number;
            speed: number;
            opacity: number;
            color: string;
            cluster?: boolean;
        }

        const stars: Star[] = [];
        const starCount = 180;
        const starDustCount = 40; // Clustered nebula particles

        const init = () => {
            stars.length = 0;
            // Background Stars
            for (let i = 0; i < starCount; i++) {
                stars.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    size: Math.random() * 1.5,
                    speed: Math.random() * 0.05 + 0.01,
                    opacity: Math.random(),
                    color: Math.random() > 0.8 ? '#4a9eff' : '#fff'
                });
            }
            // Star Dust clusters
            for (let i = 0; i < starDustCount; i++) {
                stars.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    size: Math.random() * 40 + 20, // Large soft spots
                    speed: Math.random() * 0.02 + 0.005,
                    opacity: Math.random() * 0.1, // Very faint
                    color: Math.random() > 0.5 ? 'rgba(212, 175, 55, 0.05)' : 'rgba(74, 158, 255, 0.05)',
                    cluster: true
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, w, h);

            stars.forEach(star => {
                ctx.beginPath();
                if (star.cluster) {
                    // Draw Star Dust as soft radial clusters
                    const grad = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size);
                    grad.addColorStop(0, star.color);
                    grad.addColorStop(1, 'transparent');
                    ctx.fillStyle = grad;
                    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                    ctx.fill();
                } else {
                    ctx.fillStyle = `rgba(${star.color === '#fff' ? '255,255,255' : '74,158,255'}, ${star.opacity})`;
                    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                    ctx.fill();

                    // Twinkle logic
                    if (Math.random() > 0.98) star.opacity = Math.random();
                }

                // Organic movement
                star.y -= star.speed;
                if (star.y < -star.size) star.y = h + star.size;
            });

            requestAnimationFrame(draw);
        };

        init();
        draw();

        const handleResize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
            init();
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0, backgroundColor: '#000' }}
        />
    );
}
