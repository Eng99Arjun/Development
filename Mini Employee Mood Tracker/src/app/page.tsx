'use client';
import Link from 'next/link';
import { Button } from './components/ui/button';
import { ThemeToggle } from './components/ThemeToggle';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold mb-4">Employee Mood Tracker</h1>
        <p className="text-lg mb-8 text-muted-foreground">
          Share how you're feeling today to help us improve the workplace
        </p>
        <Button asChild size="lg">
          <Link href="/mood">Submit Your Mood</Link>
        </Button>
      </div>
    </main>
  );
}