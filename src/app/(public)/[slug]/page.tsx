import { cookies } from 'next/headers';
import { createClient } from '@/utils/supabase/server';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

const PublicUserPage = async ({ params: { slug } }: Props) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: user, error } = await supabase
    .from('users')
    .select('*')
    .eq('user_name', slug)
    .single();
  console.log(user, error);

  // if (!user) {
  //   return notFound();
  // }

  const { data: links, error: linksError } = await supabase
    .from('links')
    .select('*')
    .eq('user_id', user?.id as string);

  return <main className="min-h-[100dvh] h-full">PublicUserPage</main>;
};

export default PublicUserPage;
