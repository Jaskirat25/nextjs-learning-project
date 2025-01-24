import '@/app/ui/global.css';
import { inter,Open } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

<body className={`${Open.className} antialiased`}>{children}</body>
</html>
  );
}
