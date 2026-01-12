import Link from 'next/link';
import './ProjectCard.css';

interface ProjectCardProps {
    id: number;
    name: string;
}

export default function ProjectCard({ id, name }: ProjectCardProps) {
    return (
        <Link href={`/projects/${id}`} className='project-link'>
            <div className='project-card'>
                <div className='project-image-placeholder'>
                    {/* Placeholder image */}
                </div>
                <h3 className='project-title'>{name}</h3>
            </div>
        </Link>
    );
}
