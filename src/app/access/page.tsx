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
    error,
  } = await supabase.auth.getUser();

  // if (error) {
  //   redirect('/error');
  // }

  console.log(user);

  return (
    <section className="grid place-content-center min-h-[100dvh] bg-darkprimary">
      <AuthForm />
    </section>
  );
}
