import UsersClient from './UsersClient';
import { api } from '@/lib/api';

export default async function UsersPage() {
  try {
    const response = await api.get('/api/users');
    const users = response.data as any[];
    return <UsersClient initialUsers={users} />;
  } catch (error) {
    console.error('Failed to fetch users', error);
    return <UsersClient initialUsers={[]} />;
  }
}
