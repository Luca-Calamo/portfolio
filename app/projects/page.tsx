import Link from 'next/link';
import ProjectCard from './components/ProjectCard/ProjectCard';
import './projects.css';

const projects = [
    { id: 1, name: 'Project 1', image: 'images/placeholder.jpg' },
    { id: 2, name: 'Project 2', image: 'images/placeholder.jpg' },
    { id: 3, name: 'Project 3', image: 'images/placeholder.jpg' },
    { id: 4, name: 'Project 4', image: 'images/placeholder.jpg' },
    { id: 5, name: 'Project 5', image: 'images/placeholder.jpg' },
    { id: 6, name: 'Project 6', image: 'images/placeholder.jpg' },
];

export default function Projects() {
    return (
        <main className='projects-main'>
            <div className='embers'></div>
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
