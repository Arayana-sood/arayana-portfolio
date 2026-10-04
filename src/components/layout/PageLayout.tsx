import { Navbar } from './Navbar';
import { Footer } from './Footer';

/* ─────────────────────────────────────────────────────────────────────────
   PAGE LAYOUT
   
   The top-level wrapper for every page.
   Renders: Navbar → main content → Footer.
   ─────────────────────────────────────────────────────────────────────────*/

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-base text-primary w-full max-w-full overflow-x-hidden">
      <Navbar />
      <main
        id="main-content"
        className="flex-1 pt-[68px] w-full max-w-full overflow-x-hidden" /* offset fixed navbar */
        tabIndex={-1}              /* programmatically focusable for skip link */
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
