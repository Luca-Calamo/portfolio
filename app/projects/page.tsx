import Link from 'next/link';
import ProjectCard from './components/ProjectCard/ProjectCard';
import './projects.css';
import { projectData } from './[id]/page';

const projects = [1, 2, 3, 4, 5, 6].map((id) => ({
    id,
    name: projectData[id.toString()].title,
    image: projectData[id.toString()].images[0],
}));

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
                        image={project.image}
                    />
                ))}
            </div>
        </main>
    );
}
