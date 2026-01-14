import Link from 'next/link';
import Image from 'next/image';
import './ProjectCard.css';

interface ProjectCardProps {
    id: number;
    name: string;
    image: string;
}

export default function ProjectCard({ id, name, image }: ProjectCardProps) {
    return (
        <Link href={`/projects/${id}`} className='project-link'>
            <div className='project-card'>
                <div className='project-image-placeholder'>
                    <img src={image} alt={name} className='project-image' />
                </div>
                <h3 className='project-title'>{name}</h3>
            </div>
        </Link>
    );
}
