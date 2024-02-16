'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { IconClick, IconMenuDeep, IconX } from '@tabler/icons-react';
import { createClient } from '@/utils/supabase/client';
import { type User } from '@supabase/supabase-js';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type Props = {};

const NavLinks = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <>
      <Link
        href="/profile"
        className={`hover:font-bold transition-all ease-in-out duration-300 pl-8 md:pl-0 ${
          pathname === '/profile' && 'font-bold'
        }`}
      >
        Links
      </Link>
      <Link
        href="/profile/appearance"
        className={`hover:font-bold transition-all ease-in-out duration-300 pl-8 md:pl-0 ${
          pathname === '/profile/appearance' && 'font-bold'
        }`}
      >
        Appearance
      </Link>
      <Link
        href="/profile/analytics"
        className={`hover:font-bold transition-all ease-in-out duration-300 pl-8 md:pl-0 ${
          pathname === '/profile/analytics' && 'font-bold'
        }`}
      >
        Analytics
      </Link>
      <Link
        href="/profile/settings"
        className={`hover:font-bold transition-all ease-in-out duration-300 pl-8 md:pl-0 ${
          pathname === '/profile/settings' && 'font-bold'
        }`}
      >
        Settings
      </Link>
    </>
  );
};

const NavbarProfile = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [session, setSession] = useState<User | null>(null);
  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (error) {
        console.error(error);
      }
      setSession(user);
    };

    getUser();
  }, [supabase.auth]);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error(error);
    }
    setSession(null);
    router.refresh();
  };

  return (
    <header>
      <div className="max-w-7xl mx-auto fixed top-6 left-0 right-0 z-50 bg-claro text-oscuro rounded-full flex flex-row items-center justify-between py-4 px-8">
        <div className="flex flex-row gap-x-4 items-center">
          <Link
            href="/"
            className="font-bold flex flex-row gap-x-1 items-center"
          >
            <IconClick size={24} />
          </Link>

          <nav className="md:flex flex-row gap-x-6 hidden">
            <NavLinks />
          </nav>
        </div>

        <div className="flex flex-row gap-x-4 items-center">
          <Link
            href="/upgrade"
            className="border-2 border-oscuro px-4 py-2 rounded-full hover:font-bold transition-all ease-in-out duration-300"
          >
            Upgrade
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="border border-oscuro px-4 py-2 rounded-full hover:font-bold transition-all ease-in-out duration-300">
                Share
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
              <DropdownMenuItem>
                <button type="button" onClick={handleSignOut}>
                  Log Out
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
              <DropdownMenuItem>
                <button type="button" onClick={handleSignOut}>
                  Log Out
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {isMenuOpen ? (
            <IconX
              size={24}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            />
          ) : (
            <IconMenuDeep
              size={24}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            />
          )}
        </div>
      </div>

      <nav
        className={`md:hidden fixed inset-0 bg-fuchsia-700 text-white z-10 flex flex-col gap-y-4 pt-32 transition-transform duration-300 ${
          isMenuOpen ? 'transform -translate-x-0' : 'transform translate-x-full'
        }`}
      >
        <NavLinks />
      </nav>
    </header>
  );
};

export default NavbarProfile;
