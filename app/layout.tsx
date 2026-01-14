import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Next.js App',
    description: 'A basic Next.js application',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <head>
                <link
                    href='https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap'
                    rel='stylesheet'
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
