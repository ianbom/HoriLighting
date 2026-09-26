import { l as list, s as gallery } from "./routes-BoRQDUO3.js";
import { t as ShopLayout } from "./shop-layout-CtW1ooQg.js";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Gem, Heart, House, Leaf, Search, Truck } from "lucide-react";
//#region resources/js/pages/welcome.tsx
var categories = [
	{
		title: "Indoor Lighting",
		description: "Elevate your everyday spaces.",
		image: "/img/hori/pendant.jpg"
	},
	{
		title: "Outdoor Lighting",
		description: "Designed for lasting beauty.",
		image: "/img/hori/sconce.jpg"
	},
	{
		title: "Decorative Lighting",
		description: "Statement pieces for every room.",
		image: "/img/hori/table.jpg"
	},
	{
		title: "Smart Lighting",
		description: "Smarter homes, brighter living.",
		image: "/img/hori/ceiling.jpg"
	},
	{
		title: "Accessories",
		description: "Complete your lighting setup.",
		image: "/img/hori/hero.jpg"
	}
];
var astra = {
	title: "Astra Pendant Light",
	category: "Pendant Lights",
	price: 249,
	badge: "Best Seller",
	image: "/img/hori/pendant.jpg"
};
var niko = {
	title: "Niko Wall Sconce",
	category: "Wall Lighting",
	price: 129,
	badge: "New",
	image: "/img/hori/sconce.jpg"
};
var luma = {
	title: "Luma Recessed Light",
	category: "Ceiling Lights",
	price: 89,
	image: "/img/hori/ceiling.jpg"
};
var rhea = {
	title: "Rhea Table Lamp",
	category: "Table Lamps",
	price: 199,
	oldPrice: 249,
	badge: "New",
	image: "/img/hori/table.jpg"
};
var kuro = {
	title: "Kuro Pendant Light",
	category: "Pendant Lights",
	price: 229,
	image: "/img/hori/pendant.jpg"
};
var riva = {
	title: "Riva Pendant Light",
	category: "Pendant Lights",
	price: 259,
	badge: "New",
	image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&w=800&q=85"
};
var taro = {
	title: "Taro Ceiling Spotlight",
	category: "Ceiling Lights",
	price: 99,
	image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=85"
};
var mori = {
	title: "Mori Wall Light",
	category: "Wall Lighting",
	price: 149,
	image: "/img/hori/sconce.jpg"
};
var featuredProducts = [
	astra,
	niko,
	luma,
	rhea,
	kuro
];
var newArrivals = [
	riva,
	taro,
	mori
];
var bestSellers = [
	astra,
	riva,
	taro
];
var benefits = [
	{
		icon: Gem,
		title: "Premium Design",
		description: "Timeless, modern aesthetics for every home."
	},
	{
		icon: Leaf,
		title: "Quality Materials",
		description: "Built to last with carefully selected materials."
	},
	{
		icon: House,
		title: "Smart Functionality",
		description: "Thoughtful technology for modern living."
	},
	{
		icon: Truck,
		title: "Fast Delivery",
		description: "Reliable and trackable shipping to your door."
	}
];
var inspiration = [
	{
		title: "Living Room Lighting",
		description: "Create a warm and inviting atmosphere for everyday living.",
		image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85"
	},
	{
		title: "Dining Space Ambience",
		description: "Set the perfect mood for meaningful moments.",
		image: "/img/hori/hero.jpg"
	},
	{
		title: "Bedroom Light Layering",
		description: "A softer, more comfortable space with layered lighting.",
		image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1000&q=85"
	}
];
var price = (amount) => "$" + amount.toFixed(2);
function SectionHeading({ title, description, action = "View All", href = list.url() }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "mb-4 flex items-end justify-between gap-4",
		children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
			className: "text-[22px] leading-tight font-bold tracking-[-0.03em] text-[#101b38] sm:text-[26px]",
			children: title
		}), description && /* @__PURE__ */ jsx("p", {
			className: "mt-1 text-sm text-[#697894]",
			children: description
		})] }), /* @__PURE__ */ jsxs(Link, {
			href,
			className: "inline-flex shrink-0 items-center gap-2 pb-1 text-xs font-medium text-[#101b38] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101b38]",
			children: [
				action,
				" ",
				/* @__PURE__ */ jsx(ArrowRight, {
					size: 15,
					"aria-hidden": "true"
				})
			]
		})]
	});
}
function ProductCard({ product }) {
	const [wishlisted, setWishlisted] = useState(false);
	return /* @__PURE__ */ jsxs("article", {
		className: "min-w-0 overflow-hidden rounded-md border border-[#e8ebef] bg-white p-1.5",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative aspect-[1.32] overflow-hidden rounded bg-[#f2f0ec]",
			children: [
				/* @__PURE__ */ jsx("img", {
					src: product.image,
					alt: product.title,
					loading: "lazy",
					className: "h-full w-full object-cover"
				}),
				product.badge && /* @__PURE__ */ jsx("span", {
					className: "absolute top-2 left-2 rounded bg-[#ede2d1] px-2 py-1 text-[11px] font-medium text-[#25304a]",
					children: product.badge
				}),
				/* @__PURE__ */ jsx("button", {
					type: "button",
					"aria-label": `${wishlisted ? "Remove" : "Add"} ${product.title} ${wishlisted ? "from" : "to"} wishlist`,
					"aria-pressed": wishlisted,
					onClick: () => setWishlisted((current) => !current),
					className: "absolute top-2 right-2 grid size-9 place-items-center rounded-full bg-white text-[#101b38] hover:bg-[#f6f5f2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101b38]",
					children: /* @__PURE__ */ jsx(Heart, {
						size: 18,
						fill: wishlisted ? "currentColor" : "none",
						strokeWidth: 1.8
					})
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "px-1.5 pt-2 pb-1.5",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "text-[11px] text-[#71809a]",
					children: product.category
				}),
				/* @__PURE__ */ jsx("h3", {
					className: "mt-0.5 truncate text-sm font-medium text-[#101b38]",
					title: product.title,
					children: product.title
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "mt-0.5 text-sm font-bold text-[#101b38]",
					children: [price(product.price), product.oldPrice && /* @__PURE__ */ jsx("span", {
						className: "ml-2 text-xs font-normal text-[#9aa3b1] line-through",
						children: price(product.oldPrice)
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					"aria-label": "Available finishes: black, white, brass",
					className: "mt-2 flex gap-2",
					children: [
						/* @__PURE__ */ jsx("span", { className: "size-3.5 rounded-full bg-[#252322]" }),
						/* @__PURE__ */ jsx("span", { className: "size-3.5 rounded-full bg-[#dededb]" }),
						/* @__PURE__ */ jsx("span", { className: "size-3.5 rounded-full bg-[#dbc6a8]" })
					]
				})
			]
		})]
	});
}
function Welcome() {
	const [searchMessage, setSearchMessage] = useState("");
	return /* @__PURE__ */ jsxs(ShopLayout, {
		variant: "home",
		children: [
			/* @__PURE__ */ jsx(Head, { title: "HORI LIGHTING" }),
			/* @__PURE__ */ jsxs("section", {
				className: "grid min-h-[300px] border-b border-[#ebeef1] md:h-[275px] md:min-h-0 md:grid-cols-[35%_65%] lg:h-[420px]",
				children: [/* @__PURE__ */ jsx("div", {
					className: "flex items-center bg-white px-6 py-10 sm:px-10 md:px-6 md:py-0 lg:px-[min(5vw,74px)]",
					children: /* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("p", {
							className: "text-[10px] font-semibold tracking-[0.2em] text-[#536078] uppercase",
							children: "Modern lighting for a brighter home"
						}),
						/* @__PURE__ */ jsxs("h1", {
							className: "mt-3 max-w-[520px] text-[44px] leading-[0.97] font-bold tracking-[-0.055em] text-[#101b38] sm:text-[56px] md:mt-2 md:text-[40px] lg:text-[68px]",
							children: [
								"Illuminate",
								/* @__PURE__ */ jsx("br", {}),
								"Your Space"
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 text-base text-[#536078] md:mt-2 md:text-sm lg:text-lg",
							children: "Thoughtful lighting for every moment."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-5 flex flex-wrap gap-3 md:mt-3 lg:mt-5",
							children: [/* @__PURE__ */ jsxs(Link, {
								href: list.url(),
								className: "inline-flex min-h-11 items-center gap-3 rounded-md bg-[#151c28] px-5 text-sm font-medium text-white hover:bg-[#0d1320] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101b38]",
								children: [
									"Shop Collection",
									" ",
									/* @__PURE__ */ jsx(ArrowRight, {
										size: 17,
										"aria-hidden": "true"
									})
								]
							}), /* @__PURE__ */ jsxs(Link, {
								href: gallery.url(),
								className: "inline-flex min-h-11 items-center gap-2 rounded-md border border-[#dfe3e9] px-4 text-sm font-medium text-[#101b38] hover:bg-[#f7f7f5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101b38]",
								children: [
									"Explore Inspiration",
									" ",
									/* @__PURE__ */ jsx(ArrowRight, {
										size: 16,
										"aria-hidden": "true"
									})
								]
							})]
						})
					] })
				}), /* @__PURE__ */ jsx("img", {
					src: "/img/hori/hero.jpg",
					alt: "Warm modern living space with statement lighting",
					className: "h-[260px] w-full object-cover object-center md:h-full"
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mx-auto w-[91%] max-w-[1440px] space-y-10 py-9 lg:space-y-11 lg:py-11",
				children: [
					/* @__PURE__ */ jsxs("section", {
						"aria-labelledby": "home-categories",
						children: [/* @__PURE__ */ jsx("div", {
							id: "home-categories",
							children: /* @__PURE__ */ jsx(SectionHeading, {
								title: "Shop by Category",
								description: "Find the perfect lighting for your space.",
								action: "View All Categories"
							})
						}), /* @__PURE__ */ jsx("div", {
							className: "grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5",
							children: categories.map((category) => /* @__PURE__ */ jsxs(Link, {
								href: list.url(),
								className: "group min-w-0 overflow-hidden rounded-md border border-[#e7eaee] bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101b38]",
								children: [/* @__PURE__ */ jsx("div", {
									className: "aspect-[1.65] overflow-hidden bg-[#f4f1ec]",
									children: /* @__PURE__ */ jsx("img", {
										src: category.image,
										alt: "",
										loading: "lazy",
										className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
									})
								}), /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2 px-3 py-2.5 text-[#101b38]",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ jsx("h3", {
											className: "truncate text-[13px] font-semibold",
											children: category.title
										}), /* @__PURE__ */ jsx("p", {
											className: "mt-0.5 truncate text-[11px] text-[#71809a]",
											children: category.description
										})]
									}), /* @__PURE__ */ jsx(ArrowRight, {
										size: 16,
										className: "shrink-0",
										"aria-hidden": "true"
									})]
								})]
							}, category.title))
						})]
					}),
					/* @__PURE__ */ jsxs("section", {
						"aria-labelledby": "home-featured",
						children: [/* @__PURE__ */ jsx("div", {
							id: "home-featured",
							children: /* @__PURE__ */ jsx(SectionHeading, {
								title: "Featured Lighting",
								description: "Our most loved pieces, chosen for modern living.",
								action: "View All Products"
							})
						}), /* @__PURE__ */ jsx("div", {
							className: "grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5",
							children: featuredProducts.map((product) => /* @__PURE__ */ jsx(ProductCard, { product }, product.title))
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid gap-9 min-[900px]:grid-cols-2 min-[900px]:gap-6",
						children: [/* @__PURE__ */ jsxs("section", {
							"aria-labelledby": "home-new-arrivals",
							className: "min-w-0",
							children: [/* @__PURE__ */ jsx("div", {
								id: "home-new-arrivals",
								children: /* @__PURE__ */ jsx(SectionHeading, { title: "New Arrivals" })
							}), /* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-2 gap-3 sm:grid-cols-3",
								children: newArrivals.map((product) => /* @__PURE__ */ jsx(ProductCard, { product }, product.title))
							})]
						}), /* @__PURE__ */ jsxs("section", {
							"aria-labelledby": "home-best-sellers",
							className: "min-w-0 min-[900px]:border-l min-[900px]:border-[#edf0f3] min-[900px]:pl-6",
							children: [/* @__PURE__ */ jsx("div", {
								id: "home-best-sellers",
								children: /* @__PURE__ */ jsx(SectionHeading, { title: "Best Sellers" })
							}), /* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-2 gap-3 sm:grid-cols-3",
								children: bestSellers.map((product) => /* @__PURE__ */ jsx(ProductCard, { product }, product.title))
							})]
						})]
					}),
					/* @__PURE__ */ jsxs("section", {
						"aria-labelledby": "home-benefits",
						children: [
							/* @__PURE__ */ jsx("h2", {
								id: "home-benefits",
								className: "text-[22px] leading-tight font-bold tracking-[-0.03em] text-[#101b38] sm:text-[26px]",
								children: "Why Choose HORI LIGHTING"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-1 text-sm text-[#697894]",
								children: "More than lighting — a brighter way of living."
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-4 grid grid-cols-2 gap-3 min-[900px]:grid-cols-4",
								children: benefits.map(({ icon: Icon, title, description }) => /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-4 rounded-md border border-[#e7eaee] bg-white p-4",
									children: [/* @__PURE__ */ jsx(Icon, {
										"aria-hidden": "true",
										className: "size-9 shrink-0 text-[#101b38]",
										strokeWidth: 1.5
									}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
										className: "text-sm font-semibold text-[#101b38]",
										children: title
									}), /* @__PURE__ */ jsx("p", {
										className: "mt-1 text-xs leading-snug text-[#71809a]",
										children: description
									})] })]
								}, title))
							})
						]
					}),
					/* @__PURE__ */ jsxs("section", {
						"aria-labelledby": "home-inspiration",
						children: [/* @__PURE__ */ jsx("div", {
							id: "home-inspiration",
							children: /* @__PURE__ */ jsx(SectionHeading, {
								title: "Inspiration for a Brighter Home",
								description: "Design ideas, guides, and stories to help you create a more beautiful space.",
								action: "View All Inspiration",
								href: gallery.url()
							})
						}), /* @__PURE__ */ jsx("div", {
							className: "grid gap-3 md:grid-cols-3",
							children: inspiration.map((story) => /* @__PURE__ */ jsxs("article", {
								className: "overflow-hidden rounded-md border border-[#e7eaee] bg-white",
								children: [/* @__PURE__ */ jsx("img", {
									src: story.image,
									alt: story.title,
									loading: "lazy",
									className: "aspect-[2.8] w-full object-cover"
								}), /* @__PURE__ */ jsxs("div", {
									className: "px-4 py-3",
									children: [
										/* @__PURE__ */ jsx("h3", {
											className: "text-sm font-semibold text-[#101b38]",
											children: story.title
										}),
										/* @__PURE__ */ jsx("p", {
											className: "mt-1 max-w-[255px] text-xs leading-snug text-[#71809a]",
											children: story.description
										}),
										/* @__PURE__ */ jsxs(Link, {
											href: gallery.url(),
											className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-[#101b38] hover:underline",
											children: [
												"Read More",
												" ",
												/* @__PURE__ */ jsx(ArrowRight, {
													size: 13,
													"aria-hidden": "true"
												})
											]
										})
									]
								})]
							}, story.title))
						})]
					}),
					/* @__PURE__ */ jsxs("section", {
						"aria-label": "Discover More",
						className: "flex flex-col gap-3 border-t border-[#eef0f3] pt-4 min-[900px]:flex-row min-[900px]:items-center",
						children: [
							/* @__PURE__ */ jsx("h2", {
								className: "shrink-0 text-lg font-bold text-[#101b38]",
								children: "Discover More"
							}),
							/* @__PURE__ */ jsxs("form", {
								className: "relative min-w-0 flex-1",
								onSubmit: (event) => {
									event.preventDefault();
									setSearchMessage("Preview only — search is not connected to the catalog.");
								},
								children: [
									/* @__PURE__ */ jsx("label", {
										htmlFor: "home-discovery-search",
										className: "sr-only",
										children: "Search products, collections, or inspiration"
									}),
									/* @__PURE__ */ jsx(Search, {
										"aria-hidden": "true",
										size: 17,
										className: "absolute top-1/2 left-3 -translate-y-1/2 text-[#101b38]"
									}),
									/* @__PURE__ */ jsx("input", {
										id: "home-discovery-search",
										type: "search",
										required: true,
										placeholder: "Search products, collections, or inspiration",
										className: "h-10 w-full rounded-md border border-[#e3e7ec] bg-white pr-3 pl-10 text-xs text-[#101b38] outline-none placeholder:text-[#9aa4b5] focus:border-[#101b38]"
									}),
									searchMessage && /* @__PURE__ */ jsx("p", {
										role: "status",
										className: "mt-1 text-xs text-[#71809a]",
										children: searchMessage
									})
								]
							}),
							/* @__PURE__ */ jsx("nav", {
								"aria-label": "Discover categories",
								className: "flex gap-2 overflow-x-auto pb-1",
								children: [
									"New Arrivals",
									"Best Sellers",
									"Collections",
									"Pendant Lights",
									"Smart Lighting"
								].map((name) => /* @__PURE__ */ jsx(Link, {
									href: list.url(),
									className: "inline-flex h-10 shrink-0 items-center rounded-full border border-[#e3e7ec] px-4 text-[11px] font-medium text-[#536078] hover:border-[#101b38] hover:text-[#101b38] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101b38]",
									children: name
								}, name))
							})
						]
					})
				]
			})
		]
	});
}
Welcome.layout = (page) => page;
//#endregion
export { Welcome as default };

//# sourceMappingURL=welcome-Xla4qu5X.js.map