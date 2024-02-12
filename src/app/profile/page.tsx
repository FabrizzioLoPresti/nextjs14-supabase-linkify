import { cookies } from 'next/headers';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

type Props = {};

export default async function ProfilePage({}: Props) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    redirect('/login');
  }

  console.log(user);

  return (
    <section className="grid place-content-center min-h-[100dvh] bg-darkprimary">
      <h1>Profile</h1>
      <p>{user?.email}</p>
    </section>
  );
}
