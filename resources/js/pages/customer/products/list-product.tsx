import { Head } from '@inertiajs/react';
import {
    ArrowRight,
    ChevronDown,
    ChevronRight,
    Grid2X2,
    Heart,
    List,
    Search,
    SlidersHorizontal,
    X,
} from 'lucide-react';
import { useMemo, useState } from 'react';

import ShopLayout from '@/layouts/shop-layout';

const products = [
    {
        id: 'astra',
        title: 'Astra Pendant Light',
        category: 'Pendant Lights',
        type: 'Pendant Lights',
        room: 'Dining Room',
        style: 'Modern',
        material: 'Metal',
        price: 249,
        oldPrice: null,
        badge: 'Best Seller',
        image: '/img/hori/pendant.jpg',
        colors: [
            { name: 'Black', value: '#242424' },
            { name: 'White', value: '#dedbd5' },
            { name: 'Brass', value: '#c2af93' },
        ],
    },
    {
        id: 'niko',
        title: 'Niko Wall Sconce',
        category: 'Wall Lighting',
        type: 'Wall Lighting',
        room: 'Hallway',
        style: 'Minimalist',
        material: 'Aluminum',
        price: 129,
        oldPrice: null,
        badge: 'New',
        image: '/img/hori/sconce.jpg',
        colors: [
            { name: 'Black', value: '#242424' },
            { name: 'White', value: '#dedbd5' },
            { name: 'Sand', value: '#dfd0b9' },
        ],
    },
    {
        id: 'luma',
        title: 'Luma Recessed Light',
        category: 'Ceiling Lights',
        type: 'Ceiling Lights',
        room: 'Living Room',
        style: 'Contemporary',
        material: 'Aluminum',
        price: 89,
        oldPrice: null,
        badge: null,
        image: '/img/hori/ceiling.jpg',
        colors: [
            { name: 'White', value: '#ffffff' },
            { name: 'Silver', value: '#c9c9c9' },
            { name: 'Black', value: '#242424' },
        ],
    },
    {
        id: 'rhea',
        title: 'Rhea Table Lamp',
        category: 'Table Lamps',
        type: 'Table Lamps',
        room: 'Bedroom',
        style: 'Organic',
        material: 'Ceramic',
        price: 199,
        oldPrice: 249,
        badge: 'New',
        image: '/img/hori/table.jpg',
        colors: [
            { name: 'Black', value: '#242424' },
            { name: 'Sand', value: '#dfd0b9' },
            { name: 'Ivory', value: '#e8e2d8' },
        ],
    },
];

const categories = [
    'Indoor Lighting',
    'Outdoor Lighting',
    'Decorative Lighting',
    'Smart Lighting',
    'Accessories',
];

const filterGroups = [
    {
        label: 'Product Type',
        options: [
            'Pendant Lights',
            'Wall Lighting',
            'Ceiling Lights',
            'Table Lamps',
        ],
    },
    {
        label: 'Room',
        options: ['Dining Room', 'Hallway', 'Living Room', 'Bedroom'],
    },
    {
        label: 'Style',
        options: ['Modern', 'Minimalist', 'Contemporary', 'Organic'],
    },
    { label: 'Material', options: ['Metal', 'Aluminum', 'Ceramic'] },
    {
        label: 'Color',
        options: ['Black', 'White', 'Brass', 'Sand', 'Silver', 'Ivory'],
    },
    { label: 'Price', options: ['Under $100', '$100–$200', '$200 and up'] },
] as const;

type FilterName = (typeof filterGroups)[number]['label'];
type Filters = Record<FilterName, string>;
type Product = (typeof products)[number];

const emptyFilters: Filters = {
    'Product Type': '',
    Room: '',
    Style: '',
    Material: '',
    Color: '',
    Price: '',
};

const sortOptions = [
    'Featured',
    'Price: Low to High',
    'Price: High to Low',
    'Name',
];

function matchesFilter(product: Product, filter: FilterName, value: string) {
    if (!value) {
        return true;
    }

    if (filter === 'Product Type') {
        return product.type === value;
    }

    if (filter === 'Room') {
        return product.room === value;
    }

    if (filter === 'Style') {
        return product.style === value;
    }

    if (filter === 'Material') {
        return product.material === value;
    }

    if (filter === 'Color') {
        return product.colors.some((color) => color.name === value);
    }

    if (value === 'Under $100') {
        return product.price < 100;
    }

    if (value === '$100–$200') {
        return product.price >= 100 && product.price <= 200;
    }

    return product.price > 200;
}

function FilterSidebar({
    selectedCategory,
    filters,
    setCategory,
    setFilter,
}: {
    selectedCategory: string;
    filters: Filters;
    setCategory: (category: string) => void;
    setFilter: (filter: FilterName, value: string) => void;
}) {
    const [openGroups, setOpenGroups] = useState<string[]>([]);

    return (
        <div className="h-full px-6 pt-8 pb-7 xl:px-[43px]">
            <h2 className="mb-4 text-[14px] font-bold tracking-[0.025em] text-ink">
                SHOP BY CATEGORY
            </h2>
            <nav aria-label="Shop by category" className="grid">
                {categories.map((category) => (
                    <button
                        key={category}
                        type="button"
                        aria-pressed={selectedCategory === category}
                        onClick={() =>
                            setCategory(
                                selectedCategory === category ? '' : category,
                            )
                        }
                        className={`flex min-h-[46px] items-center justify-between text-left text-[14px] text-body hover:text-ink ${selectedCategory === category ? 'font-semibold text-ink' : ''}`}
                    >
                        {category}
                        <ChevronRight className="size-4" strokeWidth={1.6} />
                    </button>
                ))}
            </nav>

            <div className="mt-4 border-t border-hairline pt-6">
                <h2 className="mb-4 text-[14px] font-bold tracking-[0.025em] text-ink">
                    FILTER BY
                </h2>
                {filterGroups.map((group) => {
                    const isOpen = openGroups.includes(group.label);

                    return (
                        <section
                            key={group.label}
                            className="border-b border-hairline"
                        >
                            <button
                                type="button"
                                aria-expanded={isOpen}
                                onClick={() =>
                                    setOpenGroups((current) =>
                                        isOpen
                                            ? current.filter(
                                                  (name) =>
                                                      name !== group.label,
                                              )
                                            : [...current, group.label],
                                    )
                                }
                                className="flex min-h-[56px] w-full items-center justify-between text-left text-[14px] text-body hover:text-ink"
                            >
                                {group.label}
                                <ChevronDown
                                    className={`size-4 text-ink transition-transform ${isOpen ? 'rotate-180' : ''}`}
                                />
                            </button>
                            {isOpen && (
                                <div className="grid gap-2.5 pb-4">
                                    {group.options.map((option) => (
                                        <label
                                            key={option}
                                            className="flex cursor-pointer items-center gap-2.5 text-[13px] text-body"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={
                                                    filters[group.label] ===
                                                    option
                                                }
                                                onChange={() =>
                                                    setFilter(
                                                        group.label,
                                                        filters[group.label] ===
                                                            option
                                                            ? ''
                                                            : option,
                                                    )
                                                }
                                                className="size-4 accent-[#101B38]"
                                            />
                                            {option}
                                        </label>
                                    ))}
                                </div>
                            )}
                        </section>
                    );
                })}
            </div>
        </div>
    );
}

export default function ListProduct() {
    const [filters, setFilters] = useState<Filters>(emptyFilters);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState(sortOptions[0]);
    const [view, setView] = useState<'grid' | 'list'>('grid');
    const [filterOpen, setFilterOpen] = useState(false);
    const [wishlisted, setWishlisted] = useState<string[]>([]);
    const [selectedColors, setSelectedColors] = useState<
        Record<string, string>
    >({});

    const setFilter = (filter: FilterName, value: string) => {
        setFilters((current) => ({
            ...current,
            [filter]: current[filter] === value ? '' : value,
        }));
    };
    const visibleProducts = useMemo(() => {
        const query = search.trim().toLowerCase();
        const result = products.filter(
            (product) =>
                product.title.toLowerCase().includes(query) &&
                (!selectedCategory || selectedCategory === 'Indoor Lighting') &&
                filterGroups.every((group) =>
                    matchesFilter(product, group.label, filters[group.label]),
                ),
        );

        if (sort === 'Price: Low to High') {
            result.sort((a, b) => a.price - b.price);
        }

        if (sort === 'Price: High to Low') {
            result.sort((a, b) => b.price - a.price);
        }

        if (sort === 'Name') {
            result.sort((a, b) => a.title.localeCompare(b.title));
        }

        return result;
    }, [filters, search, selectedCategory, sort]);
    const isDefaultView =
        !search &&
        !selectedCategory &&
        Object.values(filters).every((value) => value === '');

    const discoverSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        document
            .getElementById('featured-lighting')
            ?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <ShopLayout>
            <Head title="Featured Lighting - HORI LIGHTING" />
            <div className="shop-catalog">
                <aside
                    className="shop-sidebar hidden border-r border-hairline lg:block"
                    aria-label="Product categories and filters"
                >
                    <FilterSidebar
                        selectedCategory={selectedCategory}
                        filters={filters}
                        setCategory={setSelectedCategory}
                        setFilter={setFilter}
                    />
                </aside>

                <main className="shop-products min-w-0 px-4 pt-5 pb-8 sm:px-7 lg:px-8 lg:pt-[27px] lg:pb-5">
                    <section
                        className="shop-hero relative flex items-center overflow-hidden rounded-md bg-[#eae7e2]"
                        aria-label="Illuminate your space"
                    >
                        <img
                            src="/img/hori/hero.jpg"
                            alt="Warm contemporary living room with thoughtful lighting"
                            className="absolute inset-0 size-full object-cover object-center"
                        />
                        <div className="absolute inset-y-0 left-0 w-full bg-white/50 sm:w-[62%] sm:bg-white/60 lg:w-[57%] lg:bg-white/55" />
                        <div className="relative z-10 max-w-[510px] translate-y-[18px] px-7 py-8 sm:ml-[7%] sm:px-0 lg:ml-[11.5%]">
                            <h1 className="max-w-[400px] text-[42px] leading-[1.04] font-bold tracking-[-0.035em] text-ink sm:text-[52px] lg:text-[54px]">
                                Illuminate
                                <br />
                                Your Space
                            </h1>
                            <p className="mt-3 text-[17px] leading-7 text-body sm:text-[20px]">
                                Thoughtful lighting for every moment.
                            </p>
                            <a
                                href="#featured-lighting"
                                className="mt-5 inline-flex h-[46px] items-center gap-3 rounded-md bg-[#151c28] px-6 text-[14px] font-medium text-white hover:bg-[#0d1320]"
                            >
                                Shop Collection
                                <ArrowRight className="size-5" />
                            </a>
                        </div>
                    </section>

                    <section id="featured-lighting" className="scroll-mt-5">
                        <div className="mt-6 mb-4 flex flex-wrap items-center justify-between gap-3">
                            <div className="flex items-baseline gap-4">
                                <h2 className="text-[22px] leading-tight font-bold tracking-[-0.02em] text-ink">
                                    Featured Lighting
                                </h2>
                                <span className="text-[13px] text-body">
                                    {isDefaultView
                                        ? 32
                                        : visibleProducts.length}{' '}
                                    products
                                </span>
                            </div>
                            <div className="flex items-center gap-3 sm:gap-4">
                                <button
                                    type="button"
                                    onClick={() => setFilterOpen(true)}
                                    className="inline-flex h-10 items-center gap-2 border border-hairline px-3 text-sm text-body lg:hidden"
                                >
                                    <SlidersHorizontal className="size-4" />
                                    Filter
                                </button>
                                <label className="flex h-10 items-center gap-1.5 rounded-md border border-hairline px-3 text-[13px] text-body sm:px-4">
                                    <span className="hidden sm:inline">
                                        Sort by:
                                    </span>
                                    <select
                                        aria-label="Sort products"
                                        value={sort}
                                        onChange={(event) =>
                                            setSort(event.target.value)
                                        }
                                        className="max-w-[120px] border-0 bg-transparent p-0 pr-5 text-[13px] text-ink focus:ring-0"
                                    >
                                        {sortOptions.map((option) => (
                                            <option key={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </label>
                                <div
                                    className="hidden h-10 overflow-hidden rounded-md border border-hairline sm:flex"
                                    aria-label="Product view"
                                >
                                    <button
                                        type="button"
                                        aria-label="Grid view"
                                        aria-pressed={view === 'grid'}
                                        onClick={() => setView('grid')}
                                        className={`flex w-11 items-center justify-center ${view === 'grid' ? 'bg-[#f1f2f4] text-ink' : 'text-body hover:bg-surface-soft'}`}
                                    >
                                        <Grid2X2 className="size-5" />
                                    </button>
                                    <button
                                        type="button"
                                        aria-label="List view"
                                        aria-pressed={view === 'list'}
                                        onClick={() => setView('list')}
                                        className={`flex w-11 items-center justify-center border-l border-hairline ${view === 'list' ? 'bg-[#f1f2f4] text-ink' : 'text-body hover:bg-surface-soft'}`}
                                    >
                                        <List className="size-5" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {visibleProducts.length > 0 ? (
                            <div
                                className={
                                    view === 'grid'
                                        ? 'grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5'
                                        : 'grid grid-cols-1 gap-3'
                                }
                            >
                                {visibleProducts.map((product) => (
                                    <article
                                        key={product.id}
                                        className={`group relative min-w-0 overflow-hidden rounded-md border border-hairline bg-white ${view === 'list' ? 'flex gap-4' : ''}`}
                                    >
                                        <div
                                            className={`relative overflow-hidden bg-[#f1efed] ${view === 'list' ? 'aspect-square w-36 shrink-0 sm:w-48' : 'aspect-[1.17/1] w-full'}`}
                                        >
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.025]"
                                            />
                                            {product.badge && (
                                                <span className="absolute top-3 left-3 rounded-md bg-[#eee4d6] px-2.5 py-1 text-[11px] font-medium text-ink">
                                                    {product.badge}
                                                </span>
                                            )}
                                            <button
                                                type="button"
                                                aria-label={
                                                    wishlisted.includes(
                                                        product.id,
                                                    )
                                                        ? `Remove ${product.title} from wishlist`
                                                        : `Add ${product.title} to wishlist`
                                                }
                                                aria-pressed={wishlisted.includes(
                                                    product.id,
                                                )}
                                                onClick={() =>
                                                    setWishlisted((current) =>
                                                        current.includes(
                                                            product.id,
                                                        )
                                                            ? current.filter(
                                                                  (id) =>
                                                                      id !==
                                                                      product.id,
                                                              )
                                                            : [
                                                                  ...current,
                                                                  product.id,
                                                              ],
                                                    )
                                                }
                                                className="absolute top-3 right-3 flex size-9 items-center justify-center rounded-full bg-white/95 text-ink hover:bg-white"
                                            >
                                                <Heart
                                                    className={`size-[18px] ${wishlisted.includes(product.id) ? 'fill-ink' : ''}`}
                                                    strokeWidth={1.8}
                                                />
                                            </button>
                                        </div>
                                        <div className="min-w-0 px-3 pt-2 pb-3 sm:px-3.5">
                                            <p className="truncate text-[12px] text-[#737d8e]">
                                                {product.category}
                                            </p>
                                            <h3 className="mt-0.5 truncate text-[14px] leading-5 font-medium text-ink">
                                                {product.title}
                                            </h3>
                                            <div className="mt-2 flex flex-wrap items-center gap-2 text-[15px] leading-none font-bold text-[#111]">
                                                <span>
                                                    ${product.price.toFixed(2)}
                                                </span>
                                                {product.oldPrice && (
                                                    <span className="text-[13px] font-normal text-[#7a8190] line-through">
                                                        $
                                                        {product.oldPrice.toFixed(
                                                            2,
                                                        )}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="mt-2.5 flex min-h-4 items-center gap-1.5">
                                                {product.colors.map((color) => (
                                                    <button
                                                        key={color.name}
                                                        type="button"
                                                        aria-label={`${color.name} color`}
                                                        aria-pressed={
                                                            (selectedColors[
                                                                product.id
                                                            ] ??
                                                                product
                                                                    .colors[0]
                                                                    .name) ===
                                                            color.name
                                                        }
                                                        onClick={() =>
                                                            setSelectedColors(
                                                                (current) => ({
                                                                    ...current,
                                                                    [product.id]:
                                                                        color.name,
                                                                }),
                                                            )
                                                        }
                                                        className={`size-4 rounded-full border ${color.name === 'White' ? 'border-[#c5c5c5]' : 'border-black/5'} ${selectedColors[product.id] === color.name ? 'ring-1 ring-ink ring-offset-1' : ''}`}
                                                        style={{
                                                            backgroundColor:
                                                                color.value,
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        ) : (
                            <div className="flex min-h-64 flex-col items-center justify-center border border-hairline px-5 text-center">
                                <p className="font-semibold text-ink">
                                    No lighting found
                                </p>
                                <p className="mt-1 text-sm text-body">
                                    Try another search or clear your filters.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setFilters(emptyFilters);
                                        setSelectedCategory('');
                                        setSearch('');
                                    }}
                                    className="mt-4 text-sm font-medium text-ink underline underline-offset-4"
                                >
                                    Clear filters
                                </button>
                            </div>
                        )}
                    </section>
                </main>
            </div>

            <section
                className="shop-discover border-t border-hairline bg-canvas"
                aria-label="Discover more"
            >
                <div className="mx-auto flex max-w-[1584px] flex-col gap-3 px-5 py-4 sm:px-8 lg:h-[118px] lg:flex-row lg:items-center lg:gap-5 lg:px-[43px] lg:py-0">
                    <h2 className="shrink-0 text-[14px] font-bold tracking-[0.015em] text-ink">
                        DISCOVER MORE
                    </h2>
                    <form
                        onSubmit={discoverSearch}
                        className="relative min-w-0 flex-1 lg:ml-9"
                    >
                        <Search className="absolute top-1/2 left-4 size-5 -translate-y-1/2 text-body" />
                        <input
                            type="search"
                            aria-label="Search products, collections, or inspiration"
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                            placeholder="Search products, collections, or inspiration"
                            className="h-[50px] w-full rounded-[13px] border border-hairline bg-white pr-4 pl-14 text-[13px] text-ink placeholder:text-[#798396] focus:border-body focus:ring-0"
                        />
                    </form>
                    <div className="flex gap-2.5 overflow-x-auto pb-1 lg:gap-4 lg:pb-0">
                        {[
                            'New Arrivals',
                            'Best Sellers',
                            'Collections',
                            'Pendant Lights',
                            'Smart Lighting',
                        ].map((chip) => (
                            <button
                                key={chip}
                                type="button"
                                onClick={() => {
                                    setSearch(
                                        chip === 'Pendant Lights' ? chip : '',
                                    );
                                    setSelectedCategory(
                                        chip === 'Smart Lighting' ? chip : '',
                                    );

                                    if (chip === 'New Arrivals') {
                                        setFilters({
                                            ...emptyFilters,
                                            'Product Type': 'Table Lamps',
                                        });
                                    } else if (chip === 'Best Sellers') {
                                        setFilters({
                                            ...emptyFilters,
                                            'Product Type': 'Pendant Lights',
                                        });
                                    } else if (chip === 'Collections') {
                                        setFilters(emptyFilters);
                                        setSelectedCategory('');
                                    } else if (chip === 'Pendant Lights') {
                                        setFilters({
                                            ...emptyFilters,
                                            'Product Type': 'Pendant Lights',
                                        });
                                    } else {
                                        setFilters(emptyFilters);
                                    }
                                }}
                                className="h-[50px] shrink-0 rounded-full border border-hairline bg-white px-5 text-[13px] text-ink hover:bg-surface-soft lg:px-6"
                            >
                                {chip}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {filterOpen && (
                <div className="fixed inset-0 z-[80] lg:hidden">
                    <button
                        type="button"
                        aria-label="Close filters"
                        onClick={() => setFilterOpen(false)}
                        className="absolute inset-0 bg-black/40"
                    />
                    <aside
                        className="absolute inset-y-0 left-0 flex w-[min(88vw,360px)] flex-col overflow-y-auto bg-canvas shadow-xl"
                        aria-label="Product filters"
                    >
                        <div className="flex items-center justify-between border-b border-hairline px-6 py-4">
                            <h2 className="font-semibold text-ink">Filters</h2>
                            <button
                                type="button"
                                aria-label="Close filters"
                                onClick={() => setFilterOpen(false)}
                                className="flex size-9 items-center justify-center"
                            >
                                <X className="size-5" />
                            </button>
                        </div>
                        <FilterSidebar
                            selectedCategory={selectedCategory}
                            filters={filters}
                            setCategory={setSelectedCategory}
                            setFilter={setFilter}
                        />
                        <div className="mt-auto flex gap-3 border-t border-hairline p-5">
                            <button
                                type="button"
                                onClick={() => {
                                    setFilters(emptyFilters);
                                    setSelectedCategory('');
                                }}
                                className="h-12 flex-1 border border-hairline text-sm"
                            >
                                Clear
                            </button>
                            <button
                                type="button"
                                onClick={() => setFilterOpen(false)}
                                className="h-12 flex-1 bg-[#151c28] text-sm text-white"
                            >
                                Apply filters
                            </button>
                        </div>
                    </aside>
                </div>
            )}
        </ShopLayout>
    );
}
