import '../../globals.css';
import NavbarProfile from '@/components/Layout/navbar-profile';

export const metadata = {
  title: 'Linkify | Profile',
  description:
    'Consolidate your online presence into one link with Linkify. Simplify and optimize your digital identity for enhanced web visibility.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavbarProfile />
        {children}
      </body>
    </html>
  );
}
