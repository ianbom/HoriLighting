import { Head, Link } from '@inertiajs/react';
import {
    ChevronRight,
    Gem,
    Heart,
    Minus,
    Package,
    Plus,
    RotateCcw,
    ShieldCheck,
    Sun,
    Truck,
    Wrench,
    X,
    ZoomIn,
} from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

import ShopLayout from '@/layouts/shop-layout';
import { home, list } from '@/routes';

const gallery = [
    {
        src: '/img/hori/pendant.jpg',
        alt: 'Astra Pendant Light in a warm neutral interior',
    },
    {
        src: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=85',
        alt: 'Astra Pendant Light illuminating a modern interior',
    },
    {
        src: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=85',
        alt: 'Close-up of the Astra pendant finish',
    },
    {
        src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
        alt: 'Astra Pendant Light in a warm dining room',
    },
];

const colors = [
    { name: 'Matte Black', swatch: '#242424' },
    { name: 'Soft White', swatch: '#e8e7e3' },
    { name: 'Brushed Brass', swatch: '#c4a16a' },
];

const sizes = [
    { name: 'Small', diameter: '25 cm' },
    { name: 'Medium', diameter: '35 cm' },
    { name: 'Large', diameter: '45 cm' },
];

const specifications = [
    ['Material', 'Aluminum, Steel'],
    ['Finish', 'Matte Black'],
    ['Dimensions', 'Ø 35 cm x H 20 cm'],
    ['Light Source', 'LED (not included)'],
    ['Bulb Type', 'E26 / E27'],
    ['Wattage', 'Max 60W'],
    ['Color Temperature', '2700K – 3000K (Warm White)'],
    ['Installation Type', 'Ceiling Mounted'],
    ['Voltage', '100–240V'],
    ['Weight', '1.8 kg'],
];

const benefits = [
    {
        icon: Gem,
        title: 'Premium Material',
        detail: 'High quality, durable finish',
    },
    {
        icon: Sun,
        title: 'Warm Ambient Lighting',
        detail: 'Soft, comfortable light',
    },
    {
        icon: Wrench,
        title: 'Easy Installation',
        detail: 'All hardware included',
    },
    {
        icon: ShieldCheck,
        title: '2 Year Warranty',
        detail: 'Buy with confidence',
    },
];

const delivery = [
    {
        icon: Truck,
        title: 'Free Shipping',
        detail: 'Enjoy free shipping on orders over $300.',
    },
    {
        icon: Package,
        title: 'Secure Packaging',
        detail: 'Carefully packed to ensure safe delivery.',
    },
    {
        icon: RotateCcw,
        title: 'Easy Returns',
        detail: 'Not satisfied? Return within 14 days for a full refund.',
    },
];

export default function DetailProduct() {
    const [activeImage, setActiveImage] = useState(0);
    const [selectedColor, setSelectedColor] = useState(colors[0].name);
    const [selectedSize, setSelectedSize] = useState('Medium');
    const [quantity, setQuantity] = useState(1);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [isZoomOpen, setIsZoomOpen] = useState(false);

    return (
        <ShopLayout>
            <Head title="Astra Pendant Light" />
            <div className="mx-auto w-full max-w-[1440px] px-4 pt-3 pb-12 sm:px-6 lg:px-8 lg:pt-7 lg:pb-16">
                <nav
                    aria-label="Breadcrumb"
                    className="mb-4 flex items-center gap-2 overflow-x-auto text-xs whitespace-nowrap text-[#71809a] sm:text-sm"
                >
                    <Link
                        className="transition-colors hover:text-[#101b38]"
                        href={home()}
                    >
                        Home
                    </Link>
                    <ChevronRight aria-hidden="true" size={14} />
                    <Link
                        className="transition-colors hover:text-[#101b38]"
                        href={list()}
                    >
                        Lighting
                    </Link>
                    <ChevronRight aria-hidden="true" size={14} />
                    <Link
                        className="transition-colors hover:text-[#101b38]"
                        href={list()}
                    >
                        Pendant Lights
                    </Link>
                    <ChevronRight aria-hidden="true" size={14} />
                    <span className="text-[#101b38]">Astra Pendant Light</span>
                </nav>

                <section className="grid gap-7 md:grid-cols-2 md:gap-8 xl:gap-12">
                    <div className="grid min-w-0 grid-cols-[64px_minmax(0,1fr)] gap-3 sm:grid-cols-[76px_minmax(0,1fr)] sm:gap-4">
                        <div className="order-2 col-span-2 flex gap-2 overflow-x-auto md:order-1 md:col-span-1 md:flex-col">
                            {gallery.map((image, index) => (
                                <button
                                    key={image.src}
                                    type="button"
                                    aria-label={
                                        'View product image ' + (index + 1)
                                    }
                                    aria-pressed={activeImage === index}
                                    onClick={() => setActiveImage(index)}
                                    className={[
                                        'h-[68px] w-[68px] shrink-0 overflow-hidden rounded-md border bg-[#f2f0ec] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17213a] sm:h-[76px] sm:w-[76px]',
                                        activeImage === index
                                            ? 'border-[#17213a] ring-1 ring-[#17213a]'
                                            : 'border-[#e5e7eb]',
                                    ].join(' ')}
                                >
                                    <img
                                        src={image.src}
                                        alt=""
                                        className="h-full w-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>

                        <div className="relative order-1 aspect-square min-w-0 overflow-hidden rounded-md bg-[#eeece8] md:order-2 md:aspect-[6/7]">
                            <img
                                src={gallery[activeImage].src}
                                alt={gallery[activeImage].alt}
                                className="h-full w-full object-cover"
                            />
                            <button
                                type="button"
                                aria-label="Enlarge product image"
                                onClick={() => setIsZoomOpen(true)}
                                className="absolute right-3 bottom-3 grid size-10 place-items-center rounded-full bg-white text-[#17213a] shadow-sm transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17213a]"
                            >
                                <ZoomIn size={19} />
                            </button>
                        </div>
                    </div>

                    <div className="flex min-w-0 flex-col pt-1 md:pt-2">
                        <p className="mb-1 text-sm font-medium text-[#536078]">
                            Pendant Lights
                        </p>
                        <h1 className="text-[30px] leading-[1.15] font-bold tracking-[-0.04em] text-[#101b38]">
                            Astra Pendant Light
                        </h1>
                        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#101b38]">
                            <div
                                className="flex items-center gap-0.5 text-[#b68b4c]"
                                aria-label="Rated 4.8 out of 5"
                            >
                                {Array.from({ length: 5 }, (_, index) => (
                                    <span
                                        key={index}
                                        className="text-[20px] leading-none"
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                            <span className="font-semibold">4.8</span>
                            <span className="text-[#536078]">128 reviews</span>
                        </div>

                        <p className="mt-3 text-[26px] leading-tight font-bold tracking-[-0.03em] text-[#101b38]">
                            $249.00
                        </p>
                        <p className="mt-2 max-w-xl text-[15px] leading-[1.55] text-[#536078]">
                            A refined pendant light designed to bring warmth,
                            simplicity, and modern elegance into any living
                            space.
                        </p>

                        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm">
                            <span className="inline-flex items-center gap-2 font-medium text-[#277442]">
                                <span className="size-2.5 rounded-full bg-[#278044]" />{' '}
                                In Stock
                            </span>
                            <span
                                aria-hidden="true"
                                className="hidden h-4 border-l border-[#dfe2e8] sm:block"
                            />
                            <span className="text-[#71809a]">
                                SKU: HR-AP-001
                            </span>
                        </div>

                        <fieldset className="mt-4">
                            <legend className="sr-only">Color</legend>
                            <div className="grid grid-cols-[34px_repeat(3,minmax(0,1fr))] items-center gap-2 sm:grid-cols-[36px_repeat(3,minmax(0,1fr))]">
                                <span className="text-sm font-semibold text-[#101b38]">
                                    Color
                                </span>
                                {colors.map((color) => (
                                    <button
                                        key={color.name}
                                        type="button"
                                        aria-pressed={
                                            selectedColor === color.name
                                        }
                                        onClick={() =>
                                            setSelectedColor(color.name)
                                        }
                                        className={[
                                            'flex min-h-11 min-w-0 items-center justify-center gap-1 rounded-md border px-1 text-[11px] text-[#536078] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17213a] sm:justify-start sm:px-2 sm:text-xs',
                                            selectedColor === color.name
                                                ? 'border-[#17213a] ring-1 ring-[#17213a]'
                                                : 'border-[#e2e5ea] hover:border-[#9aa3b3]',
                                        ].join(' ')}
                                    >
                                        <span
                                            className="size-5 shrink-0 rounded-full border border-black/10 shadow-inner"
                                            style={{
                                                backgroundColor: color.swatch,
                                            }}
                                        />
                                        <span className="truncate">
                                            {color.name}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </fieldset>

                        <fieldset className="mt-3">
                            <legend className="sr-only">Size</legend>
                            <div className="grid grid-cols-[34px_repeat(3,minmax(0,1fr))] items-center gap-2 sm:grid-cols-[36px_repeat(3,minmax(0,1fr))]">
                                <span className="text-sm font-semibold text-[#101b38]">
                                    Size
                                </span>
                                {sizes.map((size) => (
                                    <button
                                        key={size.name}
                                        type="button"
                                        aria-pressed={
                                            selectedSize === size.name
                                        }
                                        onClick={() =>
                                            setSelectedSize(size.name)
                                        }
                                        className={[
                                            'flex min-h-12 min-w-0 flex-col items-center justify-center rounded-md border px-1 text-center text-xs leading-tight text-[#536078] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17213a] sm:text-sm',
                                            selectedSize === size.name
                                                ? 'border-[#17213a] ring-1 ring-[#17213a]'
                                                : 'border-[#e2e5ea] hover:border-[#9aa3b3]',
                                        ].join(' ')}
                                    >
                                        <span className="font-medium">
                                            {size.name}
                                        </span>
                                        <span className="mt-0.5 text-[11px]">
                                            Ø {size.diameter}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </fieldset>

                        <div className="mt-3 grid grid-cols-[auto_minmax(0,1fr)_minmax(0,0.85fr)_48px] gap-2">
                            <div className="flex h-11 items-center rounded-md border border-[#e2e5ea]">
                                <button
                                    type="button"
                                    aria-label="Decrease quantity"
                                    disabled={quantity <= 1}
                                    onClick={() =>
                                        setQuantity((current) =>
                                            Math.max(1, current - 1),
                                        )
                                    }
                                    className="grid h-full w-9 place-items-center text-[#101b38] disabled:opacity-40"
                                >
                                    <Minus size={15} />
                                </button>
                                <span
                                    aria-live="polite"
                                    className="min-w-5 text-center text-sm font-medium text-[#101b38]"
                                >
                                    {quantity}
                                </span>
                                <button
                                    type="button"
                                    aria-label="Increase quantity"
                                    onClick={() =>
                                        setQuantity((current) => current + 1)
                                    }
                                    className="grid h-full w-9 place-items-center text-[#101b38]"
                                >
                                    <Plus size={15} />
                                </button>
                            </div>
                            <button
                                type="button"
                                onClick={() =>
                                    toast.info('Preview only — cart unchanged')
                                }
                                className="h-11 min-w-0 rounded-md bg-[#151c28] px-2 text-xs font-semibold text-white transition-colors hover:bg-[#0d1320] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17213a] sm:px-4 sm:text-sm"
                            >
                                Add to Cart
                            </button>
                            <button
                                type="button"
                                onClick={() =>
                                    toast.info(
                                        'Preview only — checkout unavailable',
                                    )
                                }
                                className="h-11 min-w-0 rounded-md border border-[#e2e5ea] px-2 text-xs font-semibold text-[#101b38] transition-colors hover:bg-[#f7f7f5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17213a] sm:px-4 sm:text-sm"
                            >
                                Buy Now
                            </button>
                            <button
                                type="button"
                                aria-label={
                                    isWishlisted
                                        ? 'Remove Astra Pendant Light from wishlist'
                                        : 'Add Astra Pendant Light to wishlist'
                                }
                                aria-pressed={isWishlisted}
                                onClick={() =>
                                    setIsWishlisted((current) => !current)
                                }
                                className={[
                                    'grid size-11 place-items-center rounded-md border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17213a]',
                                    isWishlisted
                                        ? 'border-[#17213a] bg-[#f1f2f4] text-[#101b38]'
                                        : 'border-[#e2e5ea] text-[#101b38] hover:bg-[#f7f7f5]',
                                ].join(' ')}
                            >
                                <Heart
                                    size={19}
                                    fill={
                                        isWishlisted ? 'currentColor' : 'none'
                                    }
                                />
                            </button>
                        </div>

                        <div className="mt-3 grid grid-cols-2 gap-x-1 gap-y-3 sm:grid-cols-4">
                            {benefits.map(({ icon: Icon, title, detail }) => (
                                <div
                                    key={title}
                                    className="flex items-center gap-1.5 text-[#101b38]"
                                >
                                    <Icon
                                        aria-hidden="true"
                                        className="size-5 shrink-0"
                                        strokeWidth={1.7}
                                    />
                                    <div className="min-w-0">
                                        <p className="text-[11px] leading-tight font-semibold">
                                            {title}
                                        </p>
                                        <p className="mt-0.5 text-[10px] leading-tight text-[#71809a]">
                                            {detail}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section
                    aria-label="Product information"
                    className="mt-6 grid gap-3 md:grid-cols-3"
                >
                    <article className="rounded-md border border-[#edf0f3] bg-white p-5 sm:p-6">
                        <h2 className="text-xl font-bold tracking-[-0.03em] text-[#101b38]">
                            Product Description
                        </h2>
                        <p className="mt-4 text-sm leading-[1.65] text-[#536078]">
                            The Astra Pendant Light features a clean, modern
                            silhouette that brings warmth and elegance to any
                            interior. Its refined dome design and soft downward
                            glow create a welcoming atmosphere, perfect for
                            dining rooms, kitchens, living spaces, and more.
                        </p>
                        <p className="mt-4 text-sm leading-[1.65] text-[#536078]">
                            Crafted from premium materials with a beautifully
                            matte finish, Astra blends timeless design with
                            everyday functionality, making it a versatile
                            centerpiece for modern homes.
                        </p>
                    </article>

                    <article className="rounded-md border border-[#edf0f3] bg-white p-5 sm:p-6">
                        <h2 className="text-xl font-bold tracking-[-0.03em] text-[#101b38]">
                            Specifications
                        </h2>
                        <dl className="mt-3">
                            {specifications.map(([label, value]) => (
                                <div
                                    key={label}
                                    className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-3 border-t border-[#eceef1] py-2 text-xs leading-snug sm:text-[13px]"
                                >
                                    <dt className="text-[#536078]">{label}</dt>
                                    <dd className="text-[#536078]">{value}</dd>
                                </div>
                            ))}
                        </dl>
                    </article>

                    <article className="rounded-md border border-[#edf0f3] bg-white p-5 sm:p-6">
                        <h2 className="text-xl font-bold tracking-[-0.03em] text-[#101b38]">
                            Shipping &amp; Returns
                        </h2>
                        <div className="mt-6 space-y-6 sm:mt-7 sm:space-y-7">
                            {delivery.map(({ icon: Icon, title, detail }) => (
                                <div
                                    key={title}
                                    className="flex items-start gap-4"
                                >
                                    <Icon
                                        aria-hidden="true"
                                        className="mt-0.5 size-7 shrink-0 text-[#101b38]"
                                        strokeWidth={1.7}
                                    />
                                    <div>
                                        <h3 className="text-sm font-semibold text-[#101b38]">
                                            {title}
                                        </h3>
                                        <p className="mt-1 text-xs leading-relaxed text-[#71809a]">
                                            {detail}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </article>
                </section>
            </div>

            {isZoomOpen && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label="Astra Pendant Light image"
                    className="fixed inset-0 z-50 grid place-items-center bg-[#101b38]/90 p-4"
                    onClick={() => setIsZoomOpen(false)}
                >
                    <button
                        type="button"
                        aria-label="Close enlarged image"
                        onClick={() => setIsZoomOpen(false)}
                        className="absolute top-5 right-5 grid size-11 place-items-center rounded-full bg-white text-[#101b38]"
                    >
                        <X size={20} />
                    </button>
                    <img
                        src={gallery[activeImage].src}
                        alt={gallery[activeImage].alt}
                        onClick={(event) => event.stopPropagation()}
                        className="max-h-[88vh] max-w-full rounded-md object-contain"
                    />
                </div>
            )}
        </ShopLayout>
    );
}
