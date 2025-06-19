type Mood = 'Happy' | 'Neutral' | 'Sad';

export interface MoodEntry {
  id: string;
  mood: Mood;
  comment?: string;
  createdAt: Date;
}

let moods: MoodEntry[] = [];

export const getMoods = () => [...moods];

export const addMood = (mood: Mood, comment?: string) => {
  const newEntry: MoodEntry = {
    id: Math.random().toString(36).substring(2, 9),
    mood,
    comment,
    createdAt: new Date(),
  };
  moods.push(newEntry);
  return newEntry;
};

// For testing purposes
export const _resetMoods = () => {
  moods = [];
};