import { usePage } from '@inertiajs/react';
import type { ReactNode } from 'react';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Toaster } from '@/components/ui/sonner';

interface ShopLayoutProps {
    children: ReactNode;
    variant?: 'default' | 'home';
}

type SharedShopProps = {
    auth: {
        user: unknown | null;
    };
    shop?: {
        cart_count?: number;
        featured_collections?: Array<{
            id: number;
            name: string;
            slug: string;
        }>;
    };
};

export default function ShopLayout({
    children,
    variant = 'default',
}: ShopLayoutProps) {
    const { url, props } = usePage<SharedShopProps>();
    const cartCount = props.shop?.cart_count ?? 0;
    const featuredCollections = props.shop?.featured_collections ?? [];
    const isAuthenticated = Boolean(props.auth.user);

    return (
        <div className="shop-shell flex min-h-screen flex-col overflow-x-hidden bg-canvas font-sans text-ink selection:bg-ink selection:text-white">
            <Navbar
                cartCount={cartCount}
                collections={featuredCollections}
                currentUrl={url}
                isAuthenticated={isAuthenticated}
                homepage={variant === 'home'}
            />
            <main className="w-full flex-grow bg-canvas">{children}</main>
            <Toaster />
            <Footer homepage={variant === 'home'} />
        </div>
    );
}
