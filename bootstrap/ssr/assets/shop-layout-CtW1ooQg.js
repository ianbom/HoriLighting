import { n as queryParams } from "./wayfinder-Bgbpuenu.js";
import { c as home, f as myProfile, i as contact, l as list, n as cart, p as newProduct, s as gallery, t as about, u as login } from "./routes-BoRQDUO3.js";
import { t as Toaster } from "./sonner-D1SF8OoB.js";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { CircleUserRound, Facebook, Instagram, Linkedin, Menu, Music2, Search, ShoppingBag, X, Youtube } from "lucide-react";
//#region resources/js/routes/policy/index.ts
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/privacy-policy'
*/
var privacy = (options) => ({
	url: privacy.url(options),
	method: "get"
});
privacy.definition = {
	methods: ["get", "head"],
	url: "/privacy-policy"
};
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/privacy-policy'
*/
privacy.url = (options) => {
	return privacy.definition.url + queryParams(options);
};
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/privacy-policy'
*/
privacy.get = (options) => ({
	url: privacy.url(options),
	method: "get"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/privacy-policy'
*/
privacy.head = (options) => ({
	url: privacy.url(options),
	method: "head"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/privacy-policy'
*/
var privacyForm = (options) => ({
	action: privacy.url(options),
	method: "get"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/privacy-policy'
*/
privacyForm.get = (options) => ({
	action: privacy.url(options),
	method: "get"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/privacy-policy'
*/
privacyForm.head = (options) => ({
	action: privacy.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
privacy.form = privacyForm;
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/no-return-policy'
*/
var noReturn = (options) => ({
	url: noReturn.url(options),
	method: "get"
});
noReturn.definition = {
	methods: ["get", "head"],
	url: "/no-return-policy"
};
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/no-return-policy'
*/
noReturn.url = (options) => {
	return noReturn.definition.url + queryParams(options);
};
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/no-return-policy'
*/
noReturn.get = (options) => ({
	url: noReturn.url(options),
	method: "get"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/no-return-policy'
*/
noReturn.head = (options) => ({
	url: noReturn.url(options),
	method: "head"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/no-return-policy'
*/
var noReturnForm = (options) => ({
	action: noReturn.url(options),
	method: "get"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/no-return-policy'
*/
noReturnForm.get = (options) => ({
	action: noReturn.url(options),
	method: "get"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/no-return-policy'
*/
noReturnForm.head = (options) => ({
	action: noReturn.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
noReturn.form = noReturnForm;
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/shipping-policy'
*/
var shipping = (options) => ({
	url: shipping.url(options),
	method: "get"
});
shipping.definition = {
	methods: ["get", "head"],
	url: "/shipping-policy"
};
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/shipping-policy'
*/
shipping.url = (options) => {
	return shipping.definition.url + queryParams(options);
};
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/shipping-policy'
*/
shipping.get = (options) => ({
	url: shipping.url(options),
	method: "get"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/shipping-policy'
*/
shipping.head = (options) => ({
	url: shipping.url(options),
	method: "head"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/shipping-policy'
*/
var shippingForm = (options) => ({
	action: shipping.url(options),
	method: "get"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/shipping-policy'
*/
shippingForm.get = (options) => ({
	action: shipping.url(options),
	method: "get"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/shipping-policy'
*/
shippingForm.head = (options) => ({
	action: shipping.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
shipping.form = shippingForm;
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/terms-conditions'
*/
var terms = (options) => ({
	url: terms.url(options),
	method: "get"
});
terms.definition = {
	methods: ["get", "head"],
	url: "/terms-conditions"
};
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/terms-conditions'
*/
terms.url = (options) => {
	return terms.definition.url + queryParams(options);
};
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/terms-conditions'
*/
terms.get = (options) => ({
	url: terms.url(options),
	method: "get"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/terms-conditions'
*/
terms.head = (options) => ({
	url: terms.url(options),
	method: "head"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/terms-conditions'
*/
var termsForm = (options) => ({
	action: terms.url(options),
	method: "get"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/terms-conditions'
*/
termsForm.get = (options) => ({
	action: terms.url(options),
	method: "get"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/terms-conditions'
*/
termsForm.head = (options) => ({
	action: terms.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
terms.form = termsForm;
Object.assign(privacy, privacy), Object.assign(noReturn, noReturn), Object.assign(shipping, shipping), Object.assign(terms, terms);
//#endregion
//#region resources/js/components/Footer.tsx
function Footer({ homepage = false }) {
	if (homepage) return /* @__PURE__ */ jsx(HomepageFooter, {});
	return /* @__PURE__ */ jsxs("footer", {
		id: "contact",
		className: "border-t border-hairline bg-canvas text-ink",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex max-w-[1584px] flex-col gap-8 px-6 py-12 sm:px-11 lg:flex-row lg:items-start lg:justify-between lg:py-14",
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Link, {
				href: home.url(),
				className: "text-xl font-bold tracking-[0.015em]",
				children: "HORI LIGHTING"
			}), /* @__PURE__ */ jsx("p", {
				className: "mt-3 max-w-xs text-sm leading-6 text-body",
				children: "Thoughtful lighting for every moment."
			})] }), /* @__PURE__ */ jsxs("nav", {
				"aria-label": "Footer navigation",
				className: "flex flex-wrap gap-x-8 gap-y-3 text-sm text-body",
				children: [
					/* @__PURE__ */ jsx(Link, {
						href: list.url(),
						className: "hover:text-ink",
						children: "Lighting"
					}),
					/* @__PURE__ */ jsx(Link, {
						href: list.url(),
						className: "hover:text-ink",
						children: "Collections"
					}),
					/* @__PURE__ */ jsx(Link, {
						href: gallery.url(),
						className: "hover:text-ink",
						children: "Inspiration"
					}),
					/* @__PURE__ */ jsx(Link, {
						href: about.url(),
						className: "hover:text-ink",
						children: "About"
					}),
					/* @__PURE__ */ jsx(Link, {
						href: contact.url(),
						className: "hover:text-ink",
						children: "Contact"
					})
				]
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "border-t border-hairline px-6 py-5 text-xs text-body sm:px-11",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" HORI LIGHTING. All rights reserved."
			]
		})]
	});
}
function HomepageFooter() {
	const [newsletterMessage, setNewsletterMessage] = useState("");
	return /* @__PURE__ */ jsxs("footer", {
		className: "border-t border-[#e8ebef] bg-white text-[#101b38]",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid w-[91%] max-w-[1440px] gap-7 py-7 min-[900px]:grid-cols-[1.2fr_repeat(4,0.75fr)_1.55fr] min-[900px]:gap-5 lg:gap-8",
			children: [
				/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx(Link, {
						href: home.url(),
						className: "text-sm font-bold tracking-[0.01em]",
						children: "HORI LIGHTING"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-2 max-w-[170px] text-[11px] leading-[1.45] text-[#71809a]",
						children: "Thoughtful lighting for every moment. Modern design, lasting quality, a brighter home."
					}),
					/* @__PURE__ */ jsx("div", {
						"aria-label": "Social media",
						className: "mt-4 flex items-center gap-3 text-[#101b38]",
						children: [
							Instagram,
							Facebook,
							Youtube,
							Linkedin,
							Music2
						].map((Icon, index) => /* @__PURE__ */ jsx("span", {
							"aria-hidden": "true",
							children: /* @__PURE__ */ jsx(Icon, {
								size: 15,
								strokeWidth: 1.8
							})
						}, index))
					})
				] }),
				/* @__PURE__ */ jsx(FooterColumn, {
					title: "Shop",
					links: [
						["All Lighting", list.url()],
						["Indoor Lighting", list.url()],
						["Outdoor Lighting", list.url()],
						["Decorative Lighting", list.url()],
						["Smart Lighting", list.url()],
						["Accessories", list.url()]
					]
				}),
				/* @__PURE__ */ jsx(FooterColumn, {
					title: "Collections",
					links: [
						["New Arrivals", newProduct.url()],
						["Best Sellers", list.url()],
						["Pendant Lights", list.url()],
						["Wall Lights", list.url()],
						["Ceiling Lights", list.url()],
						["Table Lamps", list.url()]
					]
				}),
				/* @__PURE__ */ jsx(FooterColumn, {
					title: "Support",
					links: [
						["Help Center", contact.url()],
						["Shipping & Delivery", shipping.url()],
						["Returns & Exchanges", contact.url()],
						["Product Care", contact.url()],
						["Size Guide", contact.url()],
						["Contact Us", contact.url()]
					]
				}),
				/* @__PURE__ */ jsx(FooterColumn, {
					title: "About",
					links: [
						["Our Story", about.url()],
						["Sustainability", about.url()],
						["Design Philosophy", about.url()],
						["Trade Program", contact.url()],
						["Careers", contact.url()],
						["Press", about.url()]
					]
				}),
				/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("h2", {
						className: "text-[11px] font-semibold text-[#101b38]",
						children: "Join Our Newsletter"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-2 text-[11px] leading-[1.45] text-[#71809a]",
						children: "Be the first to know about new arrivals, exclusive offers, and lighting inspiration."
					}),
					/* @__PURE__ */ jsxs("form", {
						className: "mt-3 flex gap-2",
						onSubmit: (event) => {
							event.preventDefault();
							setNewsletterMessage("Preview only — no email was sent.");
						},
						children: [
							/* @__PURE__ */ jsx("label", {
								className: "sr-only",
								htmlFor: "homepage-newsletter-email",
								children: "Email address"
							}),
							/* @__PURE__ */ jsx("input", {
								id: "homepage-newsletter-email",
								type: "email",
								required: true,
								placeholder: "Enter your email",
								className: "h-9 min-w-0 flex-1 rounded-md border border-[#e1e5eb] px-3 text-[11px] text-[#101b38] outline-none placeholder:text-[#9aa4b5] focus:border-[#17213a] focus-visible:ring-2 focus-visible:ring-[#17213a]/20"
							}),
							/* @__PURE__ */ jsx("button", {
								type: "submit",
								className: "h-9 rounded-md bg-[#151c28] px-3 text-[11px] font-semibold text-white hover:bg-[#0d1320] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17213a]",
								children: "Subscribe"
							})
						]
					}),
					/* @__PURE__ */ jsx("p", {
						"aria-live": "polite",
						className: "mt-2 min-h-4 text-[10px] text-[#71809a]",
						children: newsletterMessage
					})
				] })
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-[#edf0f3]",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto flex w-[91%] max-w-[1440px] flex-col gap-2 py-3 text-[10px] text-[#8a95a8] sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ jsxs("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" HORI LIGHTING. All rights reserved."
				] }), /* @__PURE__ */ jsxs("nav", {
					"aria-label": "Legal",
					className: "flex gap-5",
					children: [
						/* @__PURE__ */ jsx(Link, {
							href: privacy.url(),
							className: "hover:text-[#101b38]",
							children: "Privacy Policy"
						}),
						/* @__PURE__ */ jsx(Link, {
							href: terms.url(),
							className: "hover:text-[#101b38]",
							children: "Terms of Service"
						}),
						/* @__PURE__ */ jsx("span", { children: "Cookie Settings" })
					]
				})]
			})
		})]
	});
}
function FooterColumn({ title, links }) {
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
		className: "mb-2 text-[11px] font-semibold text-[#101b38]",
		children: title
	}), links.map(([label, href]) => /* @__PURE__ */ jsx(Link, {
		href,
		className: "block text-[11px] leading-[1.55] text-[#6f7d96] hover:text-[#101b38]",
		children: label
	}, label))] });
}
//#endregion
//#region resources/js/components/Navbar.tsx
function Navbar({ cartCount = 0, collections = [], currentUrl = "/", isAuthenticated = false, homepage = false }) {
	const [menuOpen, setMenuOpen] = useState(false);
	const navigation = [
		{
			label: "Home",
			href: home.url()
		},
		{
			label: "Lighting",
			href: list.url()
		},
		{
			label: "Collections",
			href: list.url()
		},
		{
			label: "Inspiration",
			href: gallery.url()
		},
		{
			label: "About",
			href: about.url()
		}
	];
	const accountHref = isAuthenticated ? myProfile.url() : login.url();
	const pathname = currentUrl.split("?")[0];
	return /* @__PURE__ */ jsxs("header", {
		className: "relative z-50 border-b border-hairline bg-canvas",
		children: [/* @__PURE__ */ jsxs("div", {
			className: `flex items-center justify-between ${homepage ? "h-[54px] px-[5vw]" : "h-[72px] px-5 sm:px-8 lg:px-11"}`,
			children: [
				/* @__PURE__ */ jsx(Link, {
					href: home.url(),
					"aria-label": "HORI LIGHTING home",
					className: `shrink-0 font-bold tracking-[0.015em] text-ink ${homepage ? "text-[20px] sm:text-[23px]" : "text-[23px] sm:text-[29px]"}`,
					children: "HORI LIGHTING"
				}),
				/* @__PURE__ */ jsx("nav", {
					"aria-label": "Main navigation",
					className: `absolute left-1/2 hidden -translate-x-1/2 items-center text-ink ${homepage ? "gap-5 text-xs min-[900px]:flex lg:gap-9" : "gap-10 text-[14px] lg:flex"}`,
					children: navigation.map((item) => /* @__PURE__ */ jsx(Link, {
						href: item.href,
						"aria-current": pathname === item.href && item.label !== "Collections" ? "page" : void 0,
						className: `relative whitespace-nowrap hover:text-body ${pathname === item.href && item.label !== "Collections" ? `font-semibold ${homepage ? "after:absolute after:right-0 after:bottom-[-8px] after:left-0 after:h-px after:bg-ink" : ""}` : ""}`,
						children: item.label
					}, item.label))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-4 text-ink sm:gap-6 lg:gap-7",
					children: [
						/* @__PURE__ */ jsx(Link, {
							href: list.url(),
							"aria-label": "Search products",
							className: `flex items-center justify-center hover:text-body ${homepage ? "size-8" : "size-9"}`,
							children: /* @__PURE__ */ jsx(Search, {
								className: "size-6",
								strokeWidth: 1.8
							})
						}),
						/* @__PURE__ */ jsx(Link, {
							href: accountHref,
							"aria-label": isAuthenticated ? "Account" : "Log in",
							className: `size-9 items-center justify-center hover:text-body ${homepage ? "flex" : "hidden sm:flex"}`,
							children: /* @__PURE__ */ jsx(CircleUserRound, {
								className: "size-6",
								strokeWidth: 1.7
							})
						}),
						/* @__PURE__ */ jsxs(Link, {
							href: cart.url(),
							"aria-label": `Shopping bag, ${cartCount} items`,
							className: `relative flex items-center justify-center hover:text-body ${homepage ? "size-8" : "size-9"}`,
							children: [/* @__PURE__ */ jsx(ShoppingBag, {
								className: "size-6",
								strokeWidth: 1.8
							}), /* @__PURE__ */ jsx("span", {
								className: "absolute top-1 -right-1 flex size-[18px] items-center justify-center rounded-full bg-ink text-[10px] font-semibold text-white",
								children: cartCount > 99 ? "99+" : cartCount
							})]
						}),
						/* @__PURE__ */ jsx("button", {
							type: "button",
							"aria-label": menuOpen ? "Close menu" : "Open menu",
							"aria-expanded": menuOpen,
							onClick: () => setMenuOpen(!menuOpen),
							className: `flex size-9 items-center justify-center ${homepage ? "min-[900px]:hidden" : "lg:hidden"}`,
							children: menuOpen ? /* @__PURE__ */ jsx(X, { className: "size-6" }) : /* @__PURE__ */ jsx(Menu, { className: "size-6" })
						})
					]
				})
			]
		}), menuOpen && /* @__PURE__ */ jsxs("nav", {
			"aria-label": "Mobile navigation",
			className: `absolute top-full right-0 left-0 border-b border-hairline bg-canvas px-5 py-3 shadow-sm ${homepage ? "min-[900px]:hidden" : "lg:hidden"}`,
			children: [
				navigation.map((item) => /* @__PURE__ */ jsx(Link, {
					href: item.href,
					onClick: () => setMenuOpen(false),
					className: "block border-b border-hairline py-3 text-sm last:border-0",
					children: item.label
				}, item.label)),
				collections.length > 0 && /* @__PURE__ */ jsx("div", {
					className: "border-t border-hairline pt-2",
					children: collections.map((collection) => /* @__PURE__ */ jsx(Link, {
						href: list.url({ query: { collection: collection.slug } }),
						onClick: () => setMenuOpen(false),
						className: "block py-2 pl-4 text-sm text-body",
						children: collection.name
					}, collection.id))
				}),
				/* @__PURE__ */ jsx(Link, {
					href: accountHref,
					onClick: () => setMenuOpen(false),
					className: "block py-3 text-sm sm:hidden",
					children: isAuthenticated ? "Account" : "Log in"
				})
			]
		})]
	});
}
//#endregion
//#region resources/js/layouts/shop-layout.tsx
function ShopLayout({ children, variant = "default" }) {
	const { url, props } = usePage();
	return /* @__PURE__ */ jsxs("div", {
		className: "shop-shell flex min-h-screen flex-col overflow-x-hidden bg-canvas font-sans text-ink selection:bg-ink selection:text-white",
		children: [
			/* @__PURE__ */ jsx(Navbar, {
				cartCount: props.shop?.cart_count ?? 0,
				collections: props.shop?.featured_collections ?? [],
				currentUrl: url,
				isAuthenticated: Boolean(props.auth.user),
				homepage: variant === "home"
			}),
			/* @__PURE__ */ jsx("main", {
				className: "w-full flex-grow bg-canvas",
				children
			}),
			/* @__PURE__ */ jsx(Toaster, {}),
			/* @__PURE__ */ jsx(Footer, { homepage: variant === "home" })
		]
	});
}
//#endregion
export { ShopLayout as t };

//# sourceMappingURL=shop-layout-CtW1ooQg.js.map