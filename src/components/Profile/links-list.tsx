import { cookies } from 'next/headers';
import { createClient } from '@/utils/supabase/server';
import LinkCard from './link-card';

type Props = {
  id?: string;
};

const LinksList = async ({ id }: Props) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  // TODO!: Refactor this adding tags from Next.js 14 Fetch to RevalidateTag in Actions
  const { data, error } = await supabase
    .from('links')
    .select('*')
    .eq('user_id', id as string);

  return (
    <div className="mt-8">
      {data && data?.length > 0 ? (
        data?.map((link) => <LinkCard key={link.id} link={link} />)
      ) : (
        <p className="font-bold text-claro text-2xl text-center">
          No links yet
        </p>
      )}
    </div>
  );
};

export default LinksList;
