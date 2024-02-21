import { Metadata } from 'next';
import '../../globals.css';

export const metadata: Metadata = {
  title: 'Linkify | Your online essence, captured in one link.',
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
      <body>{children}</body>
    </html>
  );
}
