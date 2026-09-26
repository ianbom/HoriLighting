import { Link } from '@inertiajs/react';
import { CircleUserRound, Menu, Search, ShoppingBag, X } from 'lucide-react';
import { useState } from 'react';

import { about, cart, gallery, home, list, login, myProfile } from '@/routes';

type NavbarCollection = { id: number; name: string; slug: string };
type NavbarProps = {
    cartCount?: number;
    collections?: NavbarCollection[];
    currentUrl?: string;
    isAuthenticated?: boolean;
    homepage?: boolean;
};

export default function Navbar({
    cartCount = 0,
    collections = [],
    currentUrl = '/',
    isAuthenticated = false,
    homepage = false,
}: NavbarProps) {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigation = [
        { label: 'Home', href: home.url() },
        { label: 'Lighting', href: list.url() },
        { label: 'Collections', href: list.url() },
        { label: 'Inspiration', href: gallery.url() },
        { label: 'About', href: about.url() },
    ];
    const accountHref = isAuthenticated ? myProfile.url() : login.url();
    const pathname = currentUrl.split('?')[0];

    return (
        <header className="relative z-50 border-b border-hairline bg-canvas">
            <div
                className={`flex items-center justify-between ${homepage ? 'h-[54px] px-[5vw]' : 'h-[72px] px-5 sm:px-8 lg:px-11'}`}
            >
                <Link
                    href={home.url()}
                    aria-label="HORI LIGHTING home"
                    className={`shrink-0 font-bold tracking-[0.015em] text-ink ${homepage ? 'text-[20px] sm:text-[23px]' : 'text-[23px] sm:text-[29px]'}`}
                >
                    HORI LIGHTING
                </Link>

                <nav
                    aria-label="Main navigation"
                    className={`absolute left-1/2 hidden -translate-x-1/2 items-center text-ink ${homepage ? 'gap-5 text-xs min-[900px]:flex lg:gap-9' : 'gap-10 text-[14px] lg:flex'}`}
                >
                    {navigation.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            aria-current={
                                pathname === item.href &&
                                item.label !== 'Collections'
                                    ? 'page'
                                    : undefined
                            }
                            className={`relative whitespace-nowrap hover:text-body ${pathname === item.href && item.label !== 'Collections' ? `font-semibold ${homepage ? 'after:absolute after:right-0 after:bottom-[-8px] after:left-0 after:h-px after:bg-ink' : ''}` : ''}`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4 text-ink sm:gap-6 lg:gap-7">
                    <Link
                        href={list.url()}
                        aria-label="Search products"
                        className={`flex items-center justify-center hover:text-body ${homepage ? 'size-8' : 'size-9'}`}
                    >
                        <Search className="size-6" strokeWidth={1.8} />
                    </Link>
                    <Link
                        href={accountHref}
                        aria-label={isAuthenticated ? 'Account' : 'Log in'}
                        className={`size-9 items-center justify-center hover:text-body ${homepage ? 'flex' : 'hidden sm:flex'}`}
                    >
                        <CircleUserRound className="size-6" strokeWidth={1.7} />
                    </Link>
                    <Link
                        href={cart.url()}
                        aria-label={`Shopping bag, ${cartCount} items`}
                        className={`relative flex items-center justify-center hover:text-body ${homepage ? 'size-8' : 'size-9'}`}
                    >
                        <ShoppingBag className="size-6" strokeWidth={1.8} />
                        <span className="absolute top-1 -right-1 flex size-[18px] items-center justify-center rounded-full bg-ink text-[10px] font-semibold text-white">
                            {cartCount > 99 ? '99+' : cartCount}
                        </span>
                    </Link>
                    <button
                        type="button"
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen(!menuOpen)}
                        className={`flex size-9 items-center justify-center ${homepage ? 'min-[900px]:hidden' : 'lg:hidden'}`}
                    >
                        {menuOpen ? (
                            <X className="size-6" />
                        ) : (
                            <Menu className="size-6" />
                        )}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <nav
                    aria-label="Mobile navigation"
                    className={`absolute top-full right-0 left-0 border-b border-hairline bg-canvas px-5 py-3 shadow-sm ${homepage ? 'min-[900px]:hidden' : 'lg:hidden'}`}
                >
                    {navigation.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                            className="block border-b border-hairline py-3 text-sm last:border-0"
                        >
                            {item.label}
                        </Link>
                    ))}
                    {collections.length > 0 && (
                        <div className="border-t border-hairline pt-2">
                            {collections.map((collection) => (
                                <Link
                                    key={collection.id}
                                    href={list.url({
                                        query: { collection: collection.slug },
                                    })}
                                    onClick={() => setMenuOpen(false)}
                                    className="block py-2 pl-4 text-sm text-body"
                                >
                                    {collection.name}
                                </Link>
                            ))}
                        </div>
                    )}
                    <Link
                        href={accountHref}
                        onClick={() => setMenuOpen(false)}
                        className="block py-3 text-sm sm:hidden"
                    >
                        {isAuthenticated ? 'Account' : 'Log in'}
                    </Link>
                </nav>
            )}
        </header>
    );
}
