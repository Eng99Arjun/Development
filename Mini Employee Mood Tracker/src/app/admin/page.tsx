// Update the import to match the actual exports from table.tsx
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from  '../components/ui/table';
'use client';
import { ThemeToggle } from '../components/ThemeToggle';

const getMoods = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/mood`, {
    cache: 'no-store',
  });
  return res.json();
};

export default async function AdminPage() {
  const moods = await getMoods();

  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Mood Dashboard</h1>
        <ThemeToggle />
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Mood</TableHead>
              <TableHead>Comment</TableHead>
              <TableHead className="text-right">Date & Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {moods.map((entry: any) => (
              <TableRow key={entry.id}>
                <TableCell className="font-medium">
                  <MoodEmoji mood={entry.mood} />
                </TableCell>
                <TableCell>{entry.comment || '-'}</TableCell>
                <TableCell className="text-right">
                  {new Date(entry.createdAt).toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {moods.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          No mood entries yet
        </div>
      )}
    </div>
  );
}

const MoodEmoji = ({ mood }: { mood: string }) => {
  const emojiMap: Record<string, string> = {
    Happy: '😄 Happy',
    Neutral: '😐 Neutral',
    Sad: '😞 Sad',
  };
  return <span>{emojiMap[mood] || mood}</span>;
};

