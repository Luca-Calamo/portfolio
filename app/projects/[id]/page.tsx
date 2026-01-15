import Link from 'next/link';
import Tag from '../components/Tag/Tag';
import './project-detail.css';

// Dummy project data
export const projectData: { [key: string]: any } = {
    '1': {
        title: 'Project 1',
        types: ['UX/UI Design', 'Development'],
        tools: ['Adobe Photoshop', 'Figma'],
        images: [
            '/images/placeholder.jpg',
            '/images/placeholder.jpg',
            '/images/placeholder.jpg',
        ],
        process: [
            'This web application started with understanding the client needs and creating a comprehensive sitemap. I conducted stakeholder interviews to identify key features and user flows that would drive engagement.',
            'After establishing the architecture, I moved into wireframing and prototyping in Figma. The iterative design process involved multiple rounds of user testing to refine the interface and ensure optimal usability.',
        ],
    },
    '2': {
        title: 'Project 2',
        types: ['Marketing'],
        tools: ['Adobe Illustrator', 'Adobe InDesign'],
        images: [
            '/images/placeholder.jpg',
            '/images/placeholder.jpg',
            '/images/placeholder.jpg',
        ],
        process: [
            'The branding campaign began with market research and competitor analysis. I identified the target audience demographics and crafted a unique brand voice that would resonate with potential customers.',
            'Visual assets were developed using Adobe Illustrator, focusing on consistency across all touchpoints. The final deliverables included social media templates, email campaigns, and print materials that maintained cohesive brand identity.',
        ],
    },
    '3': {
        title: 'Project 3',
        types: ['UX/UI Design'],
        tools: ['Figma', 'Adobe Photoshop'],
        images: [
            '/images/placeholder.jpg',
            '/images/placeholder.jpg',
            '/images/placeholder.jpg',
        ],
        process: [
            'User research was the foundation of this project. I conducted interviews with 20 participants and created detailed personas to guide design decisions throughout the development process.',
            'Wireframes evolved through five iterations based on feedback sessions. The high-fidelity mockups incorporated accessibility standards and modern design patterns to create an intuitive user experience.',
        ],
    },
    '4': {
        title: 'Project 4',
        types: ['Development'],
        tools: ['Adobe Photoshop', 'Adobe Illustrator'],
        images: [
            '/images/placeholder.jpg',
            '/images/placeholder.jpg',
            '/images/placeholder.jpg',
        ],
        process: [
            'This mobile application required careful planning of the tech stack and architecture. I chose React Native for cross-platform compatibility and implemented a clean component structure for maintainability.',
            'Development followed agile methodology with two-week sprints. Each feature was thoroughly tested on multiple devices to ensure consistent performance and responsive design across different screen sizes.',
        ],
    },
    '5': {
        title: 'Project 5',
        types: ['UX/UI Design', 'Marketing'],
        tools: ['Adobe InDesign', 'Figma'],
        images: [
            '/images/placeholder.jpg',
            '/images/placeholder.jpg',
            '/images/placeholder.jpg',
        ],
        process: [
            'The e-commerce platform design focused on reducing friction in the checkout process. I analyzed user behavior data to identify drop-off points and redesigned the flow to increase conversion rates.',
            'Product photography and layout design were optimized for visual appeal while maintaining fast load times. The final design increased customer engagement by 40% according to analytics tracking.',
        ],
    },
    '6': {
        title: 'Project 6',
        types: ['Development'],
        tools: ['Adobe Photoshop', 'Adobe Illustrator'],
        images: [
            '/images/placeholder.jpg',
            '/images/placeholder.jpg',
            '/images/placeholder.jpg',
        ],
        process: [
            'Building this RESTful API required careful planning of endpoints and data structures. I designed the schema to be scalable and wrote comprehensive documentation for future developers.',
            'Security was paramount, implementing OAuth authentication and rate limiting to protect against common vulnerabilities. Extensive testing ensured reliability under high traffic conditions.',
        ],
    },
    '7': {
        title: 'Project 7',
        types: ['Marketing', 'UX/UI Design'],
        tools: ['Adobe Illustrator', 'Figma'],
        images: [
            '/images/placeholder.jpg',
            '/images/placeholder.jpg',
            '/images/placeholder.jpg',
        ],
        process: [
            'This social media campaign leveraged trending topics and platform-specific content strategies. I created a content calendar spanning three months with daily posts optimized for engagement.',
            'Visual consistency was maintained through custom templates and brand guidelines. Performance metrics were tracked daily, allowing for real-time adjustments to maximize reach and interaction rates.',
        ],
    },
    '8': {
        title: 'Project 8',
        types: ['Development', 'UX/UI Design'],
        tools: ['Adobe Photoshop', 'Figma'],
        images: [
            '/images/placeholder.jpg',
            '/images/placeholder.jpg',
            '/images/placeholder.jpg',
        ],
        process: [
            'The analytics dashboard required understanding complex data visualization needs. I collaborated with stakeholders to determine which metrics were most critical for decision-making.',
            'Interactive charts were built using D3.js to provide real-time insights. The interface prioritized clarity and allowed users to drill down into specific data points for deeper analysis.',
        ],
    },
    '9': {
        title: 'Project 9',
        types: ['Marketing'],
        tools: ['Adobe InDesign', 'Adobe Illustrator'],
        images: [
            '/images/placeholder.jpg',
            '/images/placeholder.jpg',
            '/images/placeholder.jpg',
        ],
        process: [
            'This print design project involved creating a cohesive visual narrative across multiple magazine spreads. Typography and color choices were carefully selected to enhance readability and emotional impact.',
            'Print specifications were managed meticulously, ensuring CMYK color accuracy and proper bleed margins. Close collaboration with the print vendor guaranteed that the final product matched the digital proofs.',
        ],
    },
    '10': {
        title: 'Project 10',
        types: ['UX/UI Design'],
        tools: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator'],
        images: [
            '/images/placeholder.jpg',
            '/images/placeholder.jpg',
            '/images/placeholder.jpg',
        ],
        process: [
            'Accessibility improvements began with a comprehensive audit using WCAG 2.1 guidelines. I identified areas where color contrast, keyboard navigation, and screen reader support needed enhancement.',
            'Redesigned components met AA standards while maintaining the visual brand identity. User testing with individuals using assistive technologies validated the improvements and revealed additional optimization opportunities.',
        ],
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

            <div className='project-detail-container'>
                <div className='project-image-large'>
                    <img
                        src={project.images[0]}
                        alt={project.title}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </div>

                <h1 className='project-detail-title'>{project.title}</h1>
            </div>

            <div className='tags-container'>
                {project.types.map((type: string, index: number) => (
                    <Tag key={index} label={type} />
                ))}
            </div>

            <div>
                <h2 className='section-header'>My Process</h2>
                {project.process.map((paragraph: string, index: number) => (
                    <p key={index} className='process-text'>
                        {paragraph}
                    </p>
                ))}
            </div>

            {project.images.length > 1 && (
                <div className='additional-images'>
                    {project.images
                        .slice(1)
                        .map((imageSrc: string, index: number) => (
                            <div key={index} className='project-image-large'>
                                <img
                                    src={imageSrc}
                                    alt={`${project.title} - Image ${
                                        index + 2
                                    }`}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                />
                            </div>
                        ))}
                </div>
            )}

            <div>
                <h2 className='section-header'>Tools</h2>
                <div className='tags-container'>
                    {project.tools.map((tool: string, index: number) => (
                        <Tag key={index} label={tool} />
                    ))}
                </div>
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
