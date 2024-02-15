import { cookies } from 'next/headers';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

type Props = {};

export default async function ProfilePage({}: Props) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    redirect('/access');
  }

  const { data, error } = await supabase
    .from('links')
    .select('*, user:users(name, email, user_name, avatar_url)')
    .eq('user_id', user?.id);

  if (error) {
    redirect('/access');
  }

  console.log(data);

  return (
    <section className="grid place-content-center min-h-[100dvh] bg-darkViolet">
      <h1>Profile</h1>
    </section>
  );
}
