import Layout from '@/components/layout';
import '@/app/globals.css';

export const metadata = {
  title: 'WorkSphere Job Portal',
  description: 'Connecting talents to employers.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
