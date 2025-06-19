'use client';
import { useState } from 'react';
import { Button } from './ui/button';
import { Textarea } from './ui/textArea';

interface MoodFormProps {
  onSubmit: (mood: string, comment?: string) => void;
  isSubmitting: boolean;
}

export default function MoodForm({ onSubmit, isSubmitting }: MoodFormProps) {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedMood) onSubmit(selectedMood, comment);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        {['Happy', 'Neutral', 'Sad'].map((mood) => (
          <Button
            key={mood}
            type="button"
            variant={selectedMood === mood ? 'default' : 'outline'}
            className="flex-1 py-8 text-lg"
            onClick={() => setSelectedMood(mood)}
          >
            {mood === 'Happy' && '😄 Happy'}
            {mood === 'Neutral' && '😐 Neutral'}
            {mood === 'Sad' && '😞 Sad'}
          </Button>
        ))}
      </div>

      <Textarea
        placeholder="Any comments? (Optional)"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        disabled={isSubmitting}
      />

      <Button
        type="submit"
        className="w-full"
        disabled={!selectedMood || isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Mood'}
      </Button>
    </form>
  );
}