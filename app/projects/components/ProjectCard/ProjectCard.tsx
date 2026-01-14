'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import './ProjectCard.css';

interface ProjectCardProps {
    id: number;
    name: string;
    image: string;
}

export default function ProjectCard({ id, name, image }: ProjectCardProps) {
    return (
        <Link href={`/projects/${id}`} className='project-link'>
            <motion.div
                className='project-card'
                layoutId={`card-${id}`}
                transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                }}
            >
                <motion.div
                    className='project-image-placeholder'
                    layoutId={`image-${id}`}
                >
                    <motion.img
                        src={image}
                        alt={name}
                        className='project-image'
                        layoutId={`img-${id}`}
                    />
                </motion.div>
                <motion.h3 className='project-title' layoutId={`title-${id}`}>
                    {name}
                </motion.h3>
            </motion.div>
        </Link>
    );
}
