import { cache } from 'react';
import { QueryClient } from '@tanstack/react-query';

// викорисстовується на сервері і сворює QueryClient один раз на запит
const getQueryClient = cache(() => new QueryClient()) as () => QueryClient;
export default getQueryClient;
