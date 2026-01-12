import Link from 'next/link';

export default function Home() {
    return (
        <main className='container'>
            <div className='content'>
                <h1>Under Construction!</h1>
                <Link href='/projects'>
                    <button>Start</button>
                </Link>
            </div>
        </main>
    );
}
