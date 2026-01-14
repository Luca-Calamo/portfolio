import Link from 'next/link';

export default function Home() {
    return (
        <main className='container'>
            <div className='content'>
                <h1>Landing Page</h1>
                <Link href='/projects'>
                    <button>Start Game</button>
                </Link>
            </div>
        </main>
    );
}
