import Link from 'next/link';
import { cookies } from 'next/headers';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import CopyURLButton from '@/components/Profile/copy-url-button';
import AddLink from '@/components/Profile/add-link';
import LinksList from '@/components/Profile/links-list';

type Props = {};

export default async function ProfilePage({}: Props) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user: session },
    error: sessionError,
  } = await supabase.auth.getUser();

  // TODO!: Refactor DataBase Functions for change Username in Register
  const { data: user, error: userError } = await supabase
    .from('users')
    .select('id, name, user_name, avatar_url')
    .eq('id', session?.id as string)
    .single();

  // TODO!: Clavar un Skeleton Loader
  return (
    <section className="grid grid-cols-3 min-h-[100dvh] h-full pt-40 bg-oscuro">
      <div className="col-span-2 h-full flex flex-col items-center px-4">
        <div className="bg-claro rounded-md w-full p-4 flex flex-row items-center justify-between">
          <p>
            Your Linkify is live now:{' '}
            <Link
              href={`/${user?.name}`}
              target="_blank"
              className="font-semibold"
            >
              linkify.io/{user?.name}
            </Link>
          </p>

          <div className="flex flow-row items-center gap-x-2">
            <p>Share your Linkify to your socials</p>
            <CopyURLButton url={`linkify.io/${user?.name}`} />
          </div>
        </div>

        <div className="mt-8 w-1/2 mx-auto">
          <AddLink />
          <LinksList id={session?.id} />
        </div>
      </div>

      <div className="col-span-1 border-l border-zinc-500">Preview</div>
    </section>
  );
}
