import { NextResponse } from 'next/server';
import { addMood, getMoods } from '../../lib/moods';

type Mood = 'Happy' | 'Neutral' | 'Sad';

export async function GET() {
  const moods = getMoods();
  return NextResponse.json(moods);
}

export async function POST(req: Request) {
  const { mood, comment } = await req.json();
  
  if (!['Happy', 'Neutral', 'Sad'].includes(mood)) {
    return NextResponse.json(
      { error: 'Invalid mood selection' },
      { status: 400 }
    );
  }

  const newEntry = addMood(mood as Mood, comment);
  return NextResponse.json(newEntry, { status: 201 });
}