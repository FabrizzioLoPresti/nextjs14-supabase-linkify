'use client';

import { createClient } from '@/utils/supabase/client';
import { Auth } from '@supabase/auth-ui-react';
import {
  // Import predefined theme
  ThemeSupa,
} from '@supabase/auth-ui-shared';

type Props = {};

const AuthForm = (props: Props) => {
  const supabase = createClient();
  return (
    <div className="bg-zinc-800 py-4 px-8">
      <Auth
        supabaseClient={supabase}
        theme="dark"
        appearance={{ theme: ThemeSupa }}
        providers={['google']}
        redirectTo="http://localhost:3000/auth/callback"
      />
    </div>
  );
};

export default AuthForm;
