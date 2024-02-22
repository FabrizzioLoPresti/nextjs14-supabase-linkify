import { cookies } from 'next/headers';
import { createClient } from '@/utils/supabase/server';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { LinkEntity } from '@/types/types';

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
    .eq('name', slug)
    .single();
  console.log(user, error);

  if (!user) {
    return notFound();
  }

  const { data: links, error: linksError } = await supabase
    .from('links')
    .select('*')
    .eq('user_id', user?.id as string)
    .eq('active', true);

  return (
    <main className="min-h-[100dvh] h-full bg-oscuro text-claro flex flex-col justify-between">
      <div className="h-full flex flex-col items-center">
        <div className="flex flex-col items-center gap-y-4 mt-12">
          <Image
            src={user?.avatar_url as string}
            alt={user?.name as string}
            width={100}
            height={100}
            className="rounded-full border-none"
          />
          <h1>@{user?.name}</h1>
        </div>

        <div className="mt-12 flex flex-col items-center gap-y-4 w-1/4">
          {links?.map((link: LinkEntity) => (
            <Link
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-claro p-4 w-full rounded-md text-center text-oscuro"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <footer className="h-12 bg-claro text-oscuro flex flex-row items-center justify-center">
        <Link href={process.env.NEXT_PUBLIC_URL as string}>Linkify</Link>
      </footer>
    </main>
  );
};

export default PublicUserPage;
