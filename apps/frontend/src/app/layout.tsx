import '@template/ui/styles/global.scss';
import { cn } from '@template/ui/utils/cn';
import { sans, mono } from '@template/ui/fonts';
import '@template/presentation/styles/global.scss';

interface TRootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: TRootLayoutProps) {
  return (
    <html
      lang="en"
      className={cn(
        sans.variable,
        mono.variable,
        'touch-manipulation font-sans antialiased'
      )}
    >
      <body>{children}</body>
    </html>
  );
}
