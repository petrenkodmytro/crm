import Header from '@/app/components/header';
import MagicButton from '@/app/components/magic-button';
import React from 'react';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Header>Dashboard</Header>
    </>
  );
}

// файл page.tsx - для створення маршруту, маршрути створюються за допомогою вкладеності папок
