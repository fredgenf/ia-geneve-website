
import Link from 'next/link';
import { Logo } from '@/components/icons';

const navLinks = [
  { href: '/legal', label: 'Mentions légales' },
];

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex-shrink-0">
            <Link href="/" aria-label="Page d'accueil">
              <Logo />
            </Link>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AI Solutions PME genève. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
