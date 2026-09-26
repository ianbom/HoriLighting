import { Head, Link } from '@inertiajs/react';
import {
    ArrowRight,
    Gem,
    Heart,
    House,
    Leaf,
    Search,
    Truck,
} from 'lucide-react';
import { useState } from 'react';
import type { ReactNode } from 'react';

import ShopLayout from '@/layouts/shop-layout';
import { gallery, list } from '@/routes';

type Product = {
    title: string;
    category: string;
    price: number;
    image: string;
    badge?: string;
    oldPrice?: number;
};

const categories = [
    {
        title: 'Indoor Lighting',
        description: 'Elevate your everyday spaces.',
        image: '/img/hori/pendant.jpg',
    },
    {
        title: 'Outdoor Lighting',
        description: 'Designed for lasting beauty.',
        image: '/img/hori/sconce.jpg',
    },
    {
        title: 'Decorative Lighting',
        description: 'Statement pieces for every room.',
        image: '/img/hori/table.jpg',
    },
    {
        title: 'Smart Lighting',
        description: 'Smarter homes, brighter living.',
        image: '/img/hori/ceiling.jpg',
    },
    {
        title: 'Accessories',
        description: 'Complete your lighting setup.',
        image: '/img/hori/hero.jpg',
    },
];

const astra: Product = {
    title: 'Astra Pendant Light',
    category: 'Pendant Lights',
    price: 249,
    badge: 'Best Seller',
    image: '/img/hori/pendant.jpg',
};
const niko: Product = {
    title: 'Niko Wall Sconce',
    category: 'Wall Lighting',
    price: 129,
    badge: 'New',
    image: '/img/hori/sconce.jpg',
};
const luma: Product = {
    title: 'Luma Recessed Light',
    category: 'Ceiling Lights',
    price: 89,
    image: '/img/hori/ceiling.jpg',
};
const rhea: Product = {
    title: 'Rhea Table Lamp',
    category: 'Table Lamps',
    price: 199,
    oldPrice: 249,
    badge: 'New',
    image: '/img/hori/table.jpg',
};
const kuro: Product = {
    title: 'Kuro Pendant Light',
    category: 'Pendant Lights',
    price: 229,
    image: '/img/hori/pendant.jpg',
};
const riva: Product = {
    title: 'Riva Pendant Light',
    category: 'Pendant Lights',
    price: 259,
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&w=800&q=85',
};
const taro: Product = {
    title: 'Taro Ceiling Spotlight',
    category: 'Ceiling Lights',
    price: 99,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=85',
};
const mori: Product = {
    title: 'Mori Wall Light',
    category: 'Wall Lighting',
    price: 149,
    image: '/img/hori/sconce.jpg',
};

const featuredProducts = [astra, niko, luma, rhea, kuro];
const newArrivals = [riva, taro, mori];
const bestSellers = [astra, riva, taro];

const benefits = [
    {
        icon: Gem,
        title: 'Premium Design',
        description: 'Timeless, modern aesthetics for every home.',
    },
    {
        icon: Leaf,
        title: 'Quality Materials',
        description: 'Built to last with carefully selected materials.',
    },
    {
        icon: House,
        title: 'Smart Functionality',
        description: 'Thoughtful technology for modern living.',
    },
    {
        icon: Truck,
        title: 'Fast Delivery',
        description: 'Reliable and trackable shipping to your door.',
    },
];

const inspiration = [
    {
        title: 'Living Room Lighting',
        description:
            'Create a warm and inviting atmosphere for everyday living.',
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85',
    },
    {
        title: 'Dining Space Ambience',
        description: 'Set the perfect mood for meaningful moments.',
        image: '/img/hori/hero.jpg',
    },
    {
        title: 'Bedroom Light Layering',
        description: 'A softer, more comfortable space with layered lighting.',
        image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1000&q=85',
    },
];

const price = (amount: number) => '$' + amount.toFixed(2);

function SectionHeading({
    title,
    description,
    action = 'View All',
    href = list.url(),
}: {
    title: string;
    description?: string;
    action?: string;
    href?: string;
}) {
    return (
        <div className="mb-4 flex items-end justify-between gap-4">
            <div>
                <h2 className="text-[22px] leading-tight font-bold tracking-[-0.03em] text-[#101b38] sm:text-[26px]">
                    {title}
                </h2>
                {description && (
                    <p className="mt-1 text-sm text-[#697894]">{description}</p>
                )}
            </div>
            <Link
                href={href}
                className="inline-flex shrink-0 items-center gap-2 pb-1 text-xs font-medium text-[#101b38] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101b38]"
            >
                {action} <ArrowRight size={15} aria-hidden="true" />
            </Link>
        </div>
    );
}

function ProductCard({ product }: { product: Product }) {
    const [wishlisted, setWishlisted] = useState(false);

    return (
        <article className="min-w-0 overflow-hidden rounded-md border border-[#e8ebef] bg-white p-1.5">
            <div className="relative aspect-[1.32] overflow-hidden rounded bg-[#f2f0ec]">
                <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                />
                {product.badge && (
                    <span className="absolute top-2 left-2 rounded bg-[#ede2d1] px-2 py-1 text-[11px] font-medium text-[#25304a]">
                        {product.badge}
                    </span>
                )}
                <button
                    type="button"
                    aria-label={`${wishlisted ? 'Remove' : 'Add'} ${product.title} ${wishlisted ? 'from' : 'to'} wishlist`}
                    aria-pressed={wishlisted}
                    onClick={() => setWishlisted((current) => !current)}
                    className="absolute top-2 right-2 grid size-9 place-items-center rounded-full bg-white text-[#101b38] hover:bg-[#f6f5f2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101b38]"
                >
                    <Heart
                        size={18}
                        fill={wishlisted ? 'currentColor' : 'none'}
                        strokeWidth={1.8}
                    />
                </button>
            </div>
            <div className="px-1.5 pt-2 pb-1.5">
                <p className="text-[11px] text-[#71809a]">{product.category}</p>
                <h3
                    className="mt-0.5 truncate text-sm font-medium text-[#101b38]"
                    title={product.title}
                >
                    {product.title}
                </h3>
                <p className="mt-0.5 text-sm font-bold text-[#101b38]">
                    {price(product.price)}
                    {product.oldPrice && (
                        <span className="ml-2 text-xs font-normal text-[#9aa3b1] line-through">
                            {price(product.oldPrice)}
                        </span>
                    )}
                </p>
                <div
                    aria-label="Available finishes: black, white, brass"
                    className="mt-2 flex gap-2"
                >
                    <span className="size-3.5 rounded-full bg-[#252322]" />
                    <span className="size-3.5 rounded-full bg-[#dededb]" />
                    <span className="size-3.5 rounded-full bg-[#dbc6a8]" />
                </div>
            </div>
        </article>
    );
}

export default function Welcome() {
    const [searchMessage, setSearchMessage] = useState('');

    return (
        <ShopLayout variant="home">
            <Head title="HORI LIGHTING" />

            <section className="grid min-h-[300px] border-b border-[#ebeef1] md:h-[275px] md:min-h-0 md:grid-cols-[35%_65%] lg:h-[420px]">
                <div className="flex items-center bg-white px-6 py-10 sm:px-10 md:px-6 md:py-0 lg:px-[min(5vw,74px)]">
                    <div>
                        <p className="text-[10px] font-semibold tracking-[0.2em] text-[#536078] uppercase">
                            Modern lighting for a brighter home
                        </p>
                        <h1 className="mt-3 max-w-[520px] text-[44px] leading-[0.97] font-bold tracking-[-0.055em] text-[#101b38] sm:text-[56px] md:mt-2 md:text-[40px] lg:text-[68px]">
                            Illuminate
                            <br />
                            Your Space
                        </h1>
                        <p className="mt-4 text-base text-[#536078] md:mt-2 md:text-sm lg:text-lg">
                            Thoughtful lighting for every moment.
                        </p>
                        <div className="mt-5 flex flex-wrap gap-3 md:mt-3 lg:mt-5">
                            <Link
                                href={list.url()}
                                className="inline-flex min-h-11 items-center gap-3 rounded-md bg-[#151c28] px-5 text-sm font-medium text-white hover:bg-[#0d1320] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101b38]"
                            >
                                Shop Collection{' '}
                                <ArrowRight size={17} aria-hidden="true" />
                            </Link>
                            <Link
                                href={gallery.url()}
                                className="inline-flex min-h-11 items-center gap-2 rounded-md border border-[#dfe3e9] px-4 text-sm font-medium text-[#101b38] hover:bg-[#f7f7f5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101b38]"
                            >
                                Explore Inspiration{' '}
                                <ArrowRight size={16} aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                </div>
                <img
                    src="/img/hori/hero.jpg"
                    alt="Warm modern living space with statement lighting"
                    className="h-[260px] w-full object-cover object-center md:h-full"
                />
            </section>

            <div className="mx-auto w-[91%] max-w-[1440px] space-y-10 py-9 lg:space-y-11 lg:py-11">
                <section aria-labelledby="home-categories">
                    <div id="home-categories">
                        <SectionHeading
                            title="Shop by Category"
                            description="Find the perfect lighting for your space."
                            action="View All Categories"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
                        {categories.map((category) => (
                            <Link
                                key={category.title}
                                href={list.url()}
                                className="group min-w-0 overflow-hidden rounded-md border border-[#e7eaee] bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101b38]"
                            >
                                <div className="aspect-[1.65] overflow-hidden bg-[#f4f1ec]">
                                    <img
                                        src={category.image}
                                        alt=""
                                        loading="lazy"
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                                    />
                                </div>
                                <div className="flex items-center gap-2 px-3 py-2.5 text-[#101b38]">
                                    <div className="min-w-0 flex-1">
                                        <h3 className="truncate text-[13px] font-semibold">
                                            {category.title}
                                        </h3>
                                        <p className="mt-0.5 truncate text-[11px] text-[#71809a]">
                                            {category.description}
                                        </p>
                                    </div>
                                    <ArrowRight
                                        size={16}
                                        className="shrink-0"
                                        aria-hidden="true"
                                    />
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                <section aria-labelledby="home-featured">
                    <div id="home-featured">
                        <SectionHeading
                            title="Featured Lighting"
                            description="Our most loved pieces, chosen for modern living."
                            action="View All Products"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
                        {featuredProducts.map((product) => (
                            <ProductCard
                                key={product.title}
                                product={product}
                            />
                        ))}
                    </div>
                </section>

                <div className="grid gap-9 min-[900px]:grid-cols-2 min-[900px]:gap-6">
                    <section
                        aria-labelledby="home-new-arrivals"
                        className="min-w-0"
                    >
                        <div id="home-new-arrivals">
                            <SectionHeading title="New Arrivals" />
                        </div>
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                            {newArrivals.map((product) => (
                                <ProductCard
                                    key={product.title}
                                    product={product}
                                />
                            ))}
                        </div>
                    </section>
                    <section
                        aria-labelledby="home-best-sellers"
                        className="min-w-0 min-[900px]:border-l min-[900px]:border-[#edf0f3] min-[900px]:pl-6"
                    >
                        <div id="home-best-sellers">
                            <SectionHeading title="Best Sellers" />
                        </div>
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                            {bestSellers.map((product) => (
                                <ProductCard
                                    key={product.title}
                                    product={product}
                                />
                            ))}
                        </div>
                    </section>
                </div>

                <section aria-labelledby="home-benefits">
                    <h2
                        id="home-benefits"
                        className="text-[22px] leading-tight font-bold tracking-[-0.03em] text-[#101b38] sm:text-[26px]"
                    >
                        Why Choose HORI LIGHTING
                    </h2>
                    <p className="mt-1 text-sm text-[#697894]">
                        More than lighting — a brighter way of living.
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-3 min-[900px]:grid-cols-4">
                        {benefits.map(({ icon: Icon, title, description }) => (
                            <div
                                key={title}
                                className="flex items-center gap-4 rounded-md border border-[#e7eaee] bg-white p-4"
                            >
                                <Icon
                                    aria-hidden="true"
                                    className="size-9 shrink-0 text-[#101b38]"
                                    strokeWidth={1.5}
                                />
                                <div>
                                    <h3 className="text-sm font-semibold text-[#101b38]">
                                        {title}
                                    </h3>
                                    <p className="mt-1 text-xs leading-snug text-[#71809a]">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section aria-labelledby="home-inspiration">
                    <div id="home-inspiration">
                        <SectionHeading
                            title="Inspiration for a Brighter Home"
                            description="Design ideas, guides, and stories to help you create a more beautiful space."
                            action="View All Inspiration"
                            href={gallery.url()}
                        />
                    </div>
                    <div className="grid gap-3 md:grid-cols-3">
                        {inspiration.map((story) => (
                            <article
                                key={story.title}
                                className="overflow-hidden rounded-md border border-[#e7eaee] bg-white"
                            >
                                <img
                                    src={story.image}
                                    alt={story.title}
                                    loading="lazy"
                                    className="aspect-[2.8] w-full object-cover"
                                />
                                <div className="px-4 py-3">
                                    <h3 className="text-sm font-semibold text-[#101b38]">
                                        {story.title}
                                    </h3>
                                    <p className="mt-1 max-w-[255px] text-xs leading-snug text-[#71809a]">
                                        {story.description}
                                    </p>
                                    <Link
                                        href={gallery.url()}
                                        className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-[#101b38] hover:underline"
                                    >
                                        Read More{' '}
                                        <ArrowRight
                                            size={13}
                                            aria-hidden="true"
                                        />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section
                    aria-label="Discover More"
                    className="flex flex-col gap-3 border-t border-[#eef0f3] pt-4 min-[900px]:flex-row min-[900px]:items-center"
                >
                    <h2 className="shrink-0 text-lg font-bold text-[#101b38]">
                        Discover More
                    </h2>
                    <form
                        className="relative min-w-0 flex-1"
                        onSubmit={(event) => {
                            event.preventDefault();
                            setSearchMessage(
                                'Preview only — search is not connected to the catalog.',
                            );
                        }}
                    >
                        <label
                            htmlFor="home-discovery-search"
                            className="sr-only"
                        >
                            Search products, collections, or inspiration
                        </label>
                        <Search
                            aria-hidden="true"
                            size={17}
                            className="absolute top-1/2 left-3 -translate-y-1/2 text-[#101b38]"
                        />
                        <input
                            id="home-discovery-search"
                            type="search"
                            required
                            placeholder="Search products, collections, or inspiration"
                            className="h-10 w-full rounded-md border border-[#e3e7ec] bg-white pr-3 pl-10 text-xs text-[#101b38] outline-none placeholder:text-[#9aa4b5] focus:border-[#101b38]"
                        />
                        {searchMessage && (
                            <p
                                role="status"
                                className="mt-1 text-xs text-[#71809a]"
                            >
                                {searchMessage}
                            </p>
                        )}
                    </form>
                    <nav
                        aria-label="Discover categories"
                        className="flex gap-2 overflow-x-auto pb-1"
                    >
                        {[
                            'New Arrivals',
                            'Best Sellers',
                            'Collections',
                            'Pendant Lights',
                            'Smart Lighting',
                        ].map((name) => (
                            <Link
                                key={name}
                                href={list.url()}
                                className="inline-flex h-10 shrink-0 items-center rounded-full border border-[#e3e7ec] px-4 text-[11px] font-medium text-[#536078] hover:border-[#101b38] hover:text-[#101b38] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101b38]"
                            >
                                {name}
                            </Link>
                        ))}
                    </nav>
                </section>
            </div>
        </ShopLayout>
    );
}

Welcome.layout = (page: ReactNode) => page;
