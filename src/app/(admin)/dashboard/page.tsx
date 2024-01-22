import MagicButton from '@/app/components/magic-button';
import React from 'react';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <main>
      <h1 className="text-xl">Dashboard Page</h1>
      <MagicButton/>
    </main>
  );
}

// файл page.tsx - для створення маршруту, маршрути створюються за допомогою вкладеності папок