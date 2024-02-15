import { cookies } from 'next/headers';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import AuthForm from '@/components/Auth/auth-form';

type Props = {};

export default async function AccessPage({}: Props) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) redirect('/profile');

  return (
    <section className="grid place-content-center min-h-[100dvh] bg-darkViolet">
      <AuthForm />
    </section>
  );
}
