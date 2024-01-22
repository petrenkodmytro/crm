'use client';

import React from 'react';
import Button from '@/app/components/button';
import { useRouter } from 'next/navigation';

// відкладене завантаження => використаємо динамічний імпорт для оптимізації початкового завантаження

export default function AddCompanyButton() {
  const router = useRouter();
  return (
    <Button onClick={() => router.push('/companies/new', { scroll: false })}>
      Add company
    </Button>
  );
}
