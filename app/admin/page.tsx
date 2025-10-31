import { redirect } from 'next/navigation';
import AdminDashboard from '@/components/admin-dashboard';

interface AdminPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function AdminPage({ searchParams }: AdminPageProps) {
  const password = searchParams.password as string;

  // Check if password matches
  if (password !== process.env.ADMIN_PASSWORD) {
    // If no password or wrong password, redirect to login
    redirect('/admin/login');
  }

  return <AdminDashboard />;
}
