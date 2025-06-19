'use client';
import { useState } from 'react';

import MoodForm from '../components/MoodForm';
import { useRouter } from 'next/navigation';

export default function MoodPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (mood: string, comment?: string) => {
    setIsSubmitting(true);
    try {
      await fetch('/api/mood', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mood, comment }),
      });
      router.push('/');
    } catch (error) {
      console.error('Submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container max-w-md py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">How are you feeling today?</h1>
      <MoodForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
    </div>
  );
}