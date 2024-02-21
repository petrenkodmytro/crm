import React from 'react';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { getCompanies } from '@/lib/api';
import getQueryClient from '@/lib/utils/getQueryClient';
import CompanyTable from '@/app/components/company-table';

export interface PageProps {}

export default async function Page({}: PageProps) {
  // спочатку отримуємо квері клієнта
  const queryClient = getQueryClient();

  // завантаження компаниій
  await queryClient.prefetchQuery({
    // ключ
    queryKey: ['companies'],
    // не потрібно кешувати і сторінка стає динамічною
    // функція завантаження данних
    queryFn: () => getCompanies({ cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  // state
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <CompanyTable />
    </HydrationBoundary>
  );
}
