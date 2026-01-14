'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import ProjectCard from './components/ProjectCard/ProjectCard';
import './projects.css';
import { gsap } from 'gsap';
import { projectData } from './[id]/page';

// Select which projects to display on the main page
const projects = [1, 2, 3, 4, 5, 6].map((id) => ({
    id,
    name: projectData[id.toString()].title,
    image: projectData[id.toString()].images[0],
}));

export default function Projects() {
    const fireRef1 = useRef<HTMLDivElement>(null);
    const fireRef2 = useRef<HTMLDivElement>(null);
    const embersContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!fireRef1.current || !fireRef2.current) return;

        // Realistic fire flickering for first flame
        gsap.to(fireRef1.current, {
            opacity: 0.9,
            duration: gsap.utils.random(0.3, 0.6),
            repeat: -1,
            yoyo: true,
            ease: 'rough({ template: none.out, strength: 2, points: 20, taper: none, randomize: true, clamp: false})',
            onRepeat: function () {
                gsap.to(this.targets()[0], {
                    duration: gsap.utils.random(0.3, 0.6),
                    opacity: gsap.utils.random(0.7, 1.0),
                });
            },
        });

        // Organic movement for first flame
        gsap.to(fireRef1.current, {
            x: '+=30',
            scaleX: 1.15,
            scaleY: 0.92,
            duration: gsap.utils.random(1.5, 2.5),
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
        });

        gsap.to(fireRef1.current, {
            y: '-=20',
            duration: gsap.utils.random(1, 1.8),
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
        });

        // Realistic fire flickering for second flame
        gsap.to(fireRef2.current, {
            opacity: 0.85,
            duration: gsap.utils.random(0.4, 0.7),
            repeat: -1,
            yoyo: true,
            ease: 'rough({ template: none.out, strength: 2, points: 20, taper: none, randomize: true, clamp: false})',
            onRepeat: function () {
                gsap.to(this.targets()[0], {
                    duration: gsap.utils.random(0.4, 0.7),
                    opacity: gsap.utils.random(0.65, 0.95),
                });
            },
        });

        // Organic movement for second flame
        gsap.to(fireRef2.current, {
            x: '-=35',
            scaleX: 1.2,
            scaleY: 0.88,
            duration: gsap.utils.random(2, 3),
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
        });

        gsap.to(fireRef2.current, {
            y: '-=25',
            duration: gsap.utils.random(1.2, 2.2),
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
        });

        // Create and animate embers
        if (embersContainerRef.current) {
            const container = embersContainerRef.current;
            const emberCount = 25;

            for (let i = 0; i < emberCount; i++) {
                const ember = document.createElement('div');
                ember.className = 'ember';

                // Random starting position - spread across the screen height for immediate movement
                const startX = gsap.utils.random(0, 100);
                const startY = gsap.utils.random(0, 100);
                const size = gsap.utils.random(3, 8);

                ember.style.left = `${startX}%`;
                ember.style.bottom = `${startY}%`;
                ember.style.width = `${size}px`;
                ember.style.height = `${size}px`;

                container.appendChild(ember);

                // Animate each ember with unique properties
                const duration = gsap.utils.random(8, 15);
                const xMovement = gsap.utils.random(-15, 15);

                // Use negative delay to start at different points in the animation
                const negativeDelay = gsap.utils.random(-duration, 0);

                // Main floating animation - starts immediately with negative delay
                gsap.to(ember, {
                    bottom: '110%',
                    x: `${xMovement}%`,
                    duration: duration,
                    delay: negativeDelay,
                    repeat: -1,
                    ease: 'none',
                    onRepeat: function () {
                        gsap.set(ember, {
                            bottom: '-10%',
                            left: `${gsap.utils.random(0, 100)}%`,
                            x: 0,
                        });
                    },
                });

                // Horizontal drift (side to side wobble) - starts immediately
                gsap.to(ember, {
                    x: `+=${gsap.utils.random(10, 30)}`,
                    duration: gsap.utils.random(1.5, 3),
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                });

                // Opacity flickering - starts immediately
                gsap.to(ember, {
                    opacity: gsap.utils.random(0.3, 0.7),
                    duration: gsap.utils.random(0.5, 1.5),
                    repeat: -1,
                    yoyo: true,
                    ease: 'rough({ template: none.out, strength: 1, points: 15, taper: none, randomize: true, clamp: false})',
                });

                // Size pulsing (growing/shrinking) - starts immediately
                gsap.to(ember, {
                    scale: gsap.utils.random(0.6, 1.4),
                    duration: gsap.utils.random(0.8, 2),
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                });

                // Slight rotation for realism - starts immediately
                gsap.to(ember, {
                    rotation: gsap.utils.random(-180, 180),
                    duration: gsap.utils.random(3, 6),
                    repeat: -1,
                    ease: 'none',
                });
            }
        }
    }, []);

    return (
        <main className='projects-main'>
            <div ref={fireRef1} className='fire-stream-1'></div>
            <div ref={fireRef2} className='fire-stream-2'></div>
            <div ref={embersContainerRef} className='embers'></div>
            <Link href='/'>
                <button>Home</button>
            </Link>
            <h1>Select Your Project</h1>
            <div className='projects-grid'>
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        id={project.id}
                        name={project.name}
                        image={project.image}
                    />
                ))}
            </div>
        </main>
    );
}
