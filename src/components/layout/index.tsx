"use client";

import React, { useEffect } from "react";
import { Navbar } from "./Navbar";
import { useAuth } from "@/app/providers/AuthProvider";
import { useRouter } from "next/navigation";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  const Admin_Logged_IN_Tester =
    localStorage.getItem("admiinSignINSucc") || "server-error";
  console.log(Admin_Logged_IN_Tester);

  useEffect(() => {
    if (Admin_Logged_IN_Tester == "server-error") {
      router.push("/signin");
    } else {
      router.push("/");
    }
  }, [isAuthenticated, isLoading, router, Admin_Logged_IN_Tester]);

  if (isLoading) {
    return "Loading...";
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        {Admin_Logged_IN_Tester == "server-error" || <Navbar></Navbar>}
        {children}
      </div>
    </QueryClientProvider>
  );
}
