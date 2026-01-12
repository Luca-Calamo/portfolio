import Link from 'next/link';
import ProjectCard from './components/ProjectCard/ProjectCard';
import './projects.css';

const projects = [
    { id: 1, name: 'Project 1' },
    { id: 2, name: 'Project 2' },
    { id: 3, name: 'Project 3' },
    { id: 4, name: 'Project 4' },
];

export default function Projects() {
    return (
        <main className='projects-main'>
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
                    />
                ))}
            </div>
        </main>
    );
}
