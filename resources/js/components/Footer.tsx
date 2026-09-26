import { Link } from '@inertiajs/react';
import { Facebook, Instagram, Linkedin, Music2, Youtube } from 'lucide-react';
import { useState } from 'react';

import { about, contact, gallery, home, list, newProduct } from '@/routes';
import { privacy, shipping, terms } from '@/routes/policy';

export default function Footer({ homepage = false }: { homepage?: boolean }) {
    if (homepage) {
        return <HomepageFooter />;
    }

    return (
        <footer
            id="contact"
            className="border-t border-hairline bg-canvas text-ink"
        >
            <div className="mx-auto flex max-w-[1584px] flex-col gap-8 px-6 py-12 sm:px-11 lg:flex-row lg:items-start lg:justify-between lg:py-14">
                <div>
                    <Link
                        href={home.url()}
                        className="text-xl font-bold tracking-[0.015em]"
                    >
                        HORI LIGHTING
                    </Link>
                    <p className="mt-3 max-w-xs text-sm leading-6 text-body">
                        Thoughtful lighting for every moment.
                    </p>
                </div>
                <nav
                    aria-label="Footer navigation"
                    className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-body"
                >
                    <Link href={list.url()} className="hover:text-ink">
                        Lighting
                    </Link>
                    <Link href={list.url()} className="hover:text-ink">
                        Collections
                    </Link>
                    <Link href={gallery.url()} className="hover:text-ink">
                        Inspiration
                    </Link>
                    <Link href={about.url()} className="hover:text-ink">
                        About
                    </Link>
                    <Link href={contact.url()} className="hover:text-ink">
                        Contact
                    </Link>
                </nav>
            </div>
            <div className="border-t border-hairline px-6 py-5 text-xs text-body sm:px-11">
                © {new Date().getFullYear()} HORI LIGHTING. All rights reserved.
            </div>
        </footer>
    );
}

function HomepageFooter() {
    const [newsletterMessage, setNewsletterMessage] = useState('');

    return (
        <footer className="border-t border-[#e8ebef] bg-white text-[#101b38]">
            <div className="mx-auto grid w-[91%] max-w-[1440px] gap-7 py-7 min-[900px]:grid-cols-[1.2fr_repeat(4,0.75fr)_1.55fr] min-[900px]:gap-5 lg:gap-8">
                <div>
                    <Link
                        href={home.url()}
                        className="text-sm font-bold tracking-[0.01em]"
                    >
                        HORI LIGHTING
                    </Link>
                    <p className="mt-2 max-w-[170px] text-[11px] leading-[1.45] text-[#71809a]">
                        Thoughtful lighting for every moment. Modern design,
                        lasting quality, a brighter home.
                    </p>
                    <div
                        aria-label="Social media"
                        className="mt-4 flex items-center gap-3 text-[#101b38]"
                    >
                        {[Instagram, Facebook, Youtube, Linkedin, Music2].map(
                            (Icon, index) => (
                                <span key={index} aria-hidden="true">
                                    <Icon size={15} strokeWidth={1.8} />
                                </span>
                            ),
                        )}
                    </div>
                </div>

                <FooterColumn
                    title="Shop"
                    links={[
                        ['All Lighting', list.url()],
                        ['Indoor Lighting', list.url()],
                        ['Outdoor Lighting', list.url()],
                        ['Decorative Lighting', list.url()],
                        ['Smart Lighting', list.url()],
                        ['Accessories', list.url()],
                    ]}
                />
                <FooterColumn
                    title="Collections"
                    links={[
                        ['New Arrivals', newProduct.url()],
                        ['Best Sellers', list.url()],
                        ['Pendant Lights', list.url()],
                        ['Wall Lights', list.url()],
                        ['Ceiling Lights', list.url()],
                        ['Table Lamps', list.url()],
                    ]}
                />
                <FooterColumn
                    title="Support"
                    links={[
                        ['Help Center', contact.url()],
                        ['Shipping & Delivery', shipping.url()],
                        ['Returns & Exchanges', contact.url()],
                        ['Product Care', contact.url()],
                        ['Size Guide', contact.url()],
                        ['Contact Us', contact.url()],
                    ]}
                />
                <FooterColumn
                    title="About"
                    links={[
                        ['Our Story', about.url()],
                        ['Sustainability', about.url()],
                        ['Design Philosophy', about.url()],
                        ['Trade Program', contact.url()],
                        ['Careers', contact.url()],
                        ['Press', about.url()],
                    ]}
                />

                <div>
                    <h2 className="text-[11px] font-semibold text-[#101b38]">
                        Join Our Newsletter
                    </h2>
                    <p className="mt-2 text-[11px] leading-[1.45] text-[#71809a]">
                        Be the first to know about new arrivals, exclusive
                        offers, and lighting inspiration.
                    </p>
                    <form
                        className="mt-3 flex gap-2"
                        onSubmit={(event) => {
                            event.preventDefault();
                            setNewsletterMessage(
                                'Preview only — no email was sent.',
                            );
                        }}
                    >
                        <label
                            className="sr-only"
                            htmlFor="homepage-newsletter-email"
                        >
                            Email address
                        </label>
                        <input
                            id="homepage-newsletter-email"
                            type="email"
                            required
                            placeholder="Enter your email"
                            className="h-9 min-w-0 flex-1 rounded-md border border-[#e1e5eb] px-3 text-[11px] text-[#101b38] outline-none placeholder:text-[#9aa4b5] focus:border-[#17213a] focus-visible:ring-2 focus-visible:ring-[#17213a]/20"
                        />
                        <button
                            type="submit"
                            className="h-9 rounded-md bg-[#151c28] px-3 text-[11px] font-semibold text-white hover:bg-[#0d1320] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17213a]"
                        >
                            Subscribe
                        </button>
                    </form>
                    <p
                        aria-live="polite"
                        className="mt-2 min-h-4 text-[10px] text-[#71809a]"
                    >
                        {newsletterMessage}
                    </p>
                </div>
            </div>

            <div className="border-t border-[#edf0f3]">
                <div className="mx-auto flex w-[91%] max-w-[1440px] flex-col gap-2 py-3 text-[10px] text-[#8a95a8] sm:flex-row sm:items-center sm:justify-between">
                    <span>
                        © {new Date().getFullYear()} HORI LIGHTING. All rights
                        reserved.
                    </span>
                    <nav aria-label="Legal" className="flex gap-5">
                        <Link
                            href={privacy.url()}
                            className="hover:text-[#101b38]"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href={terms.url()}
                            className="hover:text-[#101b38]"
                        >
                            Terms of Service
                        </Link>
                        <span>Cookie Settings</span>
                    </nav>
                </div>
            </div>
        </footer>
    );
}

function FooterColumn({
    title,
    links,
}: {
    title: string;
    links: Array<[string, string]>;
}) {
    return (
        <div>
            <h2 className="mb-2 text-[11px] font-semibold text-[#101b38]">
                {title}
            </h2>
            {links.map(([label, href]) => (
                <Link
                    key={label}
                    href={href}
                    className="block text-[11px] leading-[1.55] text-[#6f7d96] hover:text-[#101b38]"
                >
                    {label}
                </Link>
            ))}
        </div>
    );
}
