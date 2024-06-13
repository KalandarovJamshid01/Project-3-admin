'use client';

import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { useAuth } from '@/app/providers/AuthProvider';
import { useRouter } from 'next/navigation'; // or 'next/router' based on your setup
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/signin');
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return 'Loading...';
  }

  if (!isAuthenticated) {
    return null; // or some loading component
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Navbar />
        {children}
      </div>
    </QueryClientProvider>
  );
}
