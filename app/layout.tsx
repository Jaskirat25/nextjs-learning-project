import '@/app/ui/global.css'; // Assuming you have a global CSS file
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { Open } from './ui/fonts'; // Adjust the import based on your fonts file

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${Open.className} antialiased`}>
          <div className="container">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}