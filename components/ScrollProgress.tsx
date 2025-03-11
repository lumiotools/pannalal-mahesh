'use client';

interface ScrollProgressProps {
  progress: number;
}

export default function ScrollProgress({ progress }: ScrollProgressProps) {
  return (
    <div className="fixed bottom-0 left-0 w-full h-2 bg-gray-200 dark:bg-gray-800">
      <div
        className="h-full bg-blue-600 rounded-r-3xl transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}