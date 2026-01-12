import Link from 'next/link';
import Tag from '../components/Tag/Tag';
import './project-detail.css';

// Dummy project data
const projectData: { [key: string]: any } = {
    '1': {
        title: 'Project 1',
        types: ['UX/UI Design', 'Development'],
        tools: ['Adobe Photoshop', 'Figma'],
    },
    '2': {
        title: 'Project 2',
        types: ['Marketing'],
        tools: ['Adobe Illustrator', 'Adobe InDesign'],
    },
    '3': {
        title: 'Project 3',
        types: ['UX/UI Design'],
        tools: ['Figma', 'Adobe Photoshop'],
    },
    '4': {
        title: 'Project 4',
        types: ['Development'],
        tools: ['Adobe Photoshop', 'Adobe Illustrator'],
    },
    '5': {
        title: 'Project 5',
        types: ['UX/UI Design', 'Marketing'],
        tools: ['Adobe InDesign', 'Figma'],
    },
    '6': {
        title: 'Project 6',
        types: ['Development'],
        tools: ['Adobe Photoshop', 'Adobe Illustrator'],
    },
    '7': {
        title: 'Project 7',
        types: ['Marketing', 'UX/UI Design'],
        tools: ['Adobe Illustrator', 'Figma'],
    },
    '8': {
        title: 'Project 8',
        types: ['Development', 'UX/UI Design'],
        tools: ['Adobe Photoshop', 'Figma'],
    },
    '9': {
        title: 'Project 9',
        types: ['Marketing'],
        tools: ['Adobe InDesign', 'Adobe Illustrator'],
    },
    '10': {
        title: 'Project 10',
        types: ['UX/UI Design'],
        tools: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator'],
    },
};

export default function ProjectDetail({ params }: { params: { id: string } }) {
    const project = projectData[params.id];
    const currentId = parseInt(params.id);
    const prevId = currentId > 1 ? currentId - 1 : null;
    const nextId = currentId < 10 ? currentId + 1 : null;

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <main className='project-detail-main'>
            <div className='navigation-buttons'>
                <Link href='/projects' className='back-button'>
                    ← Back to Projects
                </Link>
            </div>

            <h1 className='project-detail-title'>{project.title}</h1>

            <div className='tags-container'>
                {project.types.map((type: string, index: number) => (
                    <Tag key={index} label={type} />
                ))}
            </div>

            <div className='project-image-large'></div>

            <h2 className='section-header'>My Process</h2>
            <p className='process-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className='additional-images'>
                <div className='project-image-large'></div>
                <div className='project-image-large'></div>
            </div>

            <h2 className='section-header'>Tools</h2>
            <div className='tags-container'>
                {project.tools.map((tool: string, index: number) => (
                    <Tag key={index} label={tool} />
                ))}
            </div>

            <div className='project-navigation'>
                {prevId && (
                    <Link href={`/projects/${prevId}`} className='nav-button'>
                        ← Previous
                    </Link>
                )}
                {nextId && (
                    <Link href={`/projects/${nextId}`} className='nav-button'>
                        Next →
                    </Link>
                )}
            </div>
        </main>
    );
}
