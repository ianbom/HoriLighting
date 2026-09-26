import { t as ShopLayout } from "./shop-layout-CtW1ooQg.js";
import { Head } from "@inertiajs/react";
import { useMemo, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, ChevronDown, ChevronRight, Grid2X2, Heart, List, Search, SlidersHorizontal, X } from "lucide-react";
//#region resources/js/pages/customer/products/list-product.tsx
var products = [
	{
		id: "astra",
		title: "Astra Pendant Light",
		category: "Pendant Lights",
		type: "Pendant Lights",
		room: "Dining Room",
		style: "Modern",
		material: "Metal",
		price: 249,
		oldPrice: null,
		badge: "Best Seller",
		image: "/img/hori/pendant.jpg",
		colors: [
			{
				name: "Black",
				value: "#242424"
			},
			{
				name: "White",
				value: "#dedbd5"
			},
			{
				name: "Brass",
				value: "#c2af93"
			}
		]
	},
	{
		id: "niko",
		title: "Niko Wall Sconce",
		category: "Wall Lighting",
		type: "Wall Lighting",
		room: "Hallway",
		style: "Minimalist",
		material: "Aluminum",
		price: 129,
		oldPrice: null,
		badge: "New",
		image: "/img/hori/sconce.jpg",
		colors: [
			{
				name: "Black",
				value: "#242424"
			},
			{
				name: "White",
				value: "#dedbd5"
			},
			{
				name: "Sand",
				value: "#dfd0b9"
			}
		]
	},
	{
		id: "luma",
		title: "Luma Recessed Light",
		category: "Ceiling Lights",
		type: "Ceiling Lights",
		room: "Living Room",
		style: "Contemporary",
		material: "Aluminum",
		price: 89,
		oldPrice: null,
		badge: null,
		image: "/img/hori/ceiling.jpg",
		colors: [
			{
				name: "White",
				value: "#ffffff"
			},
			{
				name: "Silver",
				value: "#c9c9c9"
			},
			{
				name: "Black",
				value: "#242424"
			}
		]
	},
	{
		id: "rhea",
		title: "Rhea Table Lamp",
		category: "Table Lamps",
		type: "Table Lamps",
		room: "Bedroom",
		style: "Organic",
		material: "Ceramic",
		price: 199,
		oldPrice: 249,
		badge: "New",
		image: "/img/hori/table.jpg",
		colors: [
			{
				name: "Black",
				value: "#242424"
			},
			{
				name: "Sand",
				value: "#dfd0b9"
			},
			{
				name: "Ivory",
				value: "#e8e2d8"
			}
		]
	}
];
var categories = [
	"Indoor Lighting",
	"Outdoor Lighting",
	"Decorative Lighting",
	"Smart Lighting",
	"Accessories"
];
var filterGroups = [
	{
		label: "Product Type",
		options: [
			"Pendant Lights",
			"Wall Lighting",
			"Ceiling Lights",
			"Table Lamps"
		]
	},
	{
		label: "Room",
		options: [
			"Dining Room",
			"Hallway",
			"Living Room",
			"Bedroom"
		]
	},
	{
		label: "Style",
		options: [
			"Modern",
			"Minimalist",
			"Contemporary",
			"Organic"
		]
	},
	{
		label: "Material",
		options: [
			"Metal",
			"Aluminum",
			"Ceramic"
		]
	},
	{
		label: "Color",
		options: [
			"Black",
			"White",
			"Brass",
			"Sand",
			"Silver",
			"Ivory"
		]
	},
	{
		label: "Price",
		options: [
			"Under $100",
			"$100–$200",
			"$200 and up"
		]
	}
];
var emptyFilters = {
	"Product Type": "",
	Room: "",
	Style: "",
	Material: "",
	Color: "",
	Price: ""
};
var sortOptions = [
	"Featured",
	"Price: Low to High",
	"Price: High to Low",
	"Name"
];
function matchesFilter(product, filter, value) {
	if (!value) return true;
	if (filter === "Product Type") return product.type === value;
	if (filter === "Room") return product.room === value;
	if (filter === "Style") return product.style === value;
	if (filter === "Material") return product.material === value;
	if (filter === "Color") return product.colors.some((color) => color.name === value);
	if (value === "Under $100") return product.price < 100;
	if (value === "$100–$200") return product.price >= 100 && product.price <= 200;
	return product.price > 200;
}
function FilterSidebar({ selectedCategory, filters, setCategory, setFilter }) {
	const [openGroups, setOpenGroups] = useState([]);
	return /* @__PURE__ */ jsxs("div", {
		className: "h-full px-6 pt-8 pb-7 xl:px-[43px]",
		children: [
			/* @__PURE__ */ jsx("h2", {
				className: "mb-4 text-[14px] font-bold tracking-[0.025em] text-ink",
				children: "SHOP BY CATEGORY"
			}),
			/* @__PURE__ */ jsx("nav", {
				"aria-label": "Shop by category",
				className: "grid",
				children: categories.map((category) => /* @__PURE__ */ jsxs("button", {
					type: "button",
					"aria-pressed": selectedCategory === category,
					onClick: () => setCategory(selectedCategory === category ? "" : category),
					className: `flex min-h-[46px] items-center justify-between text-left text-[14px] text-body hover:text-ink ${selectedCategory === category ? "font-semibold text-ink" : ""}`,
					children: [category, /* @__PURE__ */ jsx(ChevronRight, {
						className: "size-4",
						strokeWidth: 1.6
					})]
				}, category))
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-4 border-t border-hairline pt-6",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "mb-4 text-[14px] font-bold tracking-[0.025em] text-ink",
					children: "FILTER BY"
				}), filterGroups.map((group) => {
					const isOpen = openGroups.includes(group.label);
					return /* @__PURE__ */ jsxs("section", {
						className: "border-b border-hairline",
						children: [/* @__PURE__ */ jsxs("button", {
							type: "button",
							"aria-expanded": isOpen,
							onClick: () => setOpenGroups((current) => isOpen ? current.filter((name) => name !== group.label) : [...current, group.label]),
							className: "flex min-h-[56px] w-full items-center justify-between text-left text-[14px] text-body hover:text-ink",
							children: [group.label, /* @__PURE__ */ jsx(ChevronDown, { className: `size-4 text-ink transition-transform ${isOpen ? "rotate-180" : ""}` })]
						}), isOpen && /* @__PURE__ */ jsx("div", {
							className: "grid gap-2.5 pb-4",
							children: group.options.map((option) => /* @__PURE__ */ jsxs("label", {
								className: "flex cursor-pointer items-center gap-2.5 text-[13px] text-body",
								children: [/* @__PURE__ */ jsx("input", {
									type: "checkbox",
									checked: filters[group.label] === option,
									onChange: () => setFilter(group.label, filters[group.label] === option ? "" : option),
									className: "size-4 accent-[#101B38]"
								}), option]
							}, option))
						})]
					}, group.label);
				})]
			})
		]
	});
}
function ListProduct() {
	const [filters, setFilters] = useState(emptyFilters);
	const [selectedCategory, setSelectedCategory] = useState("");
	const [search, setSearch] = useState("");
	const [sort, setSort] = useState(sortOptions[0]);
	const [view, setView] = useState("grid");
	const [filterOpen, setFilterOpen] = useState(false);
	const [wishlisted, setWishlisted] = useState([]);
	const [selectedColors, setSelectedColors] = useState({});
	const setFilter = (filter, value) => {
		setFilters((current) => ({
			...current,
			[filter]: current[filter] === value ? "" : value
		}));
	};
	const visibleProducts = useMemo(() => {
		const query = search.trim().toLowerCase();
		const result = products.filter((product) => product.title.toLowerCase().includes(query) && (!selectedCategory || selectedCategory === "Indoor Lighting") && filterGroups.every((group) => matchesFilter(product, group.label, filters[group.label])));
		if (sort === "Price: Low to High") result.sort((a, b) => a.price - b.price);
		if (sort === "Price: High to Low") result.sort((a, b) => b.price - a.price);
		if (sort === "Name") result.sort((a, b) => a.title.localeCompare(b.title));
		return result;
	}, [
		filters,
		search,
		selectedCategory,
		sort
	]);
	const isDefaultView = !search && !selectedCategory && Object.values(filters).every((value) => value === "");
	const discoverSearch = (event) => {
		event.preventDefault();
		document.getElementById("featured-lighting")?.scrollIntoView({ behavior: "smooth" });
	};
	return /* @__PURE__ */ jsxs(ShopLayout, { children: [
		/* @__PURE__ */ jsx(Head, { title: "Featured Lighting - HORI LIGHTING" }),
		/* @__PURE__ */ jsxs("div", {
			className: "shop-catalog",
			children: [/* @__PURE__ */ jsx("aside", {
				className: "shop-sidebar hidden border-r border-hairline lg:block",
				"aria-label": "Product categories and filters",
				children: /* @__PURE__ */ jsx(FilterSidebar, {
					selectedCategory,
					filters,
					setCategory: setSelectedCategory,
					setFilter
				})
			}), /* @__PURE__ */ jsxs("main", {
				className: "shop-products min-w-0 px-4 pt-5 pb-8 sm:px-7 lg:px-8 lg:pt-[27px] lg:pb-5",
				children: [/* @__PURE__ */ jsxs("section", {
					className: "shop-hero relative flex items-center overflow-hidden rounded-md bg-[#eae7e2]",
					"aria-label": "Illuminate your space",
					children: [
						/* @__PURE__ */ jsx("img", {
							src: "/img/hori/hero.jpg",
							alt: "Warm contemporary living room with thoughtful lighting",
							className: "absolute inset-0 size-full object-cover object-center"
						}),
						/* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 w-full bg-white/50 sm:w-[62%] sm:bg-white/60 lg:w-[57%] lg:bg-white/55" }),
						/* @__PURE__ */ jsxs("div", {
							className: "relative z-10 max-w-[510px] translate-y-[18px] px-7 py-8 sm:ml-[7%] sm:px-0 lg:ml-[11.5%]",
							children: [
								/* @__PURE__ */ jsxs("h1", {
									className: "max-w-[400px] text-[42px] leading-[1.04] font-bold tracking-[-0.035em] text-ink sm:text-[52px] lg:text-[54px]",
									children: [
										"Illuminate",
										/* @__PURE__ */ jsx("br", {}),
										"Your Space"
									]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-3 text-[17px] leading-7 text-body sm:text-[20px]",
									children: "Thoughtful lighting for every moment."
								}),
								/* @__PURE__ */ jsxs("a", {
									href: "#featured-lighting",
									className: "mt-5 inline-flex h-[46px] items-center gap-3 rounded-md bg-[#151c28] px-6 text-[14px] font-medium text-white hover:bg-[#0d1320]",
									children: ["Shop Collection", /* @__PURE__ */ jsx(ArrowRight, { className: "size-5" })]
								})
							]
						})
					]
				}), /* @__PURE__ */ jsxs("section", {
					id: "featured-lighting",
					className: "scroll-mt-5",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "mt-6 mb-4 flex flex-wrap items-center justify-between gap-3",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-baseline gap-4",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-[22px] leading-tight font-bold tracking-[-0.02em] text-ink",
								children: "Featured Lighting"
							}), /* @__PURE__ */ jsxs("span", {
								className: "text-[13px] text-body",
								children: [
									isDefaultView ? 32 : visibleProducts.length,
									" ",
									"products"
								]
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3 sm:gap-4",
							children: [
								/* @__PURE__ */ jsxs("button", {
									type: "button",
									onClick: () => setFilterOpen(true),
									className: "inline-flex h-10 items-center gap-2 border border-hairline px-3 text-sm text-body lg:hidden",
									children: [/* @__PURE__ */ jsx(SlidersHorizontal, { className: "size-4" }), "Filter"]
								}),
								/* @__PURE__ */ jsxs("label", {
									className: "flex h-10 items-center gap-1.5 rounded-md border border-hairline px-3 text-[13px] text-body sm:px-4",
									children: [/* @__PURE__ */ jsx("span", {
										className: "hidden sm:inline",
										children: "Sort by:"
									}), /* @__PURE__ */ jsx("select", {
										"aria-label": "Sort products",
										value: sort,
										onChange: (event) => setSort(event.target.value),
										className: "max-w-[120px] border-0 bg-transparent p-0 pr-5 text-[13px] text-ink focus:ring-0",
										children: sortOptions.map((option) => /* @__PURE__ */ jsx("option", { children: option }, option))
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "hidden h-10 overflow-hidden rounded-md border border-hairline sm:flex",
									"aria-label": "Product view",
									children: [/* @__PURE__ */ jsx("button", {
										type: "button",
										"aria-label": "Grid view",
										"aria-pressed": view === "grid",
										onClick: () => setView("grid"),
										className: `flex w-11 items-center justify-center ${view === "grid" ? "bg-[#f1f2f4] text-ink" : "text-body hover:bg-surface-soft"}`,
										children: /* @__PURE__ */ jsx(Grid2X2, { className: "size-5" })
									}), /* @__PURE__ */ jsx("button", {
										type: "button",
										"aria-label": "List view",
										"aria-pressed": view === "list",
										onClick: () => setView("list"),
										className: `flex w-11 items-center justify-center border-l border-hairline ${view === "list" ? "bg-[#f1f2f4] text-ink" : "text-body hover:bg-surface-soft"}`,
										children: /* @__PURE__ */ jsx(List, { className: "size-5" })
									})]
								})
							]
						})]
					}), visibleProducts.length > 0 ? /* @__PURE__ */ jsx("div", {
						className: view === "grid" ? "grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5" : "grid grid-cols-1 gap-3",
						children: visibleProducts.map((product) => /* @__PURE__ */ jsxs("article", {
							className: `group relative min-w-0 overflow-hidden rounded-md border border-hairline bg-white ${view === "list" ? "flex gap-4" : ""}`,
							children: [/* @__PURE__ */ jsxs("div", {
								className: `relative overflow-hidden bg-[#f1efed] ${view === "list" ? "aspect-square w-36 shrink-0 sm:w-48" : "aspect-[1.17/1] w-full"}`,
								children: [
									/* @__PURE__ */ jsx("img", {
										src: product.image,
										alt: product.title,
										className: "size-full object-cover transition-transform duration-300 group-hover:scale-[1.025]"
									}),
									product.badge && /* @__PURE__ */ jsx("span", {
										className: "absolute top-3 left-3 rounded-md bg-[#eee4d6] px-2.5 py-1 text-[11px] font-medium text-ink",
										children: product.badge
									}),
									/* @__PURE__ */ jsx("button", {
										type: "button",
										"aria-label": wishlisted.includes(product.id) ? `Remove ${product.title} from wishlist` : `Add ${product.title} to wishlist`,
										"aria-pressed": wishlisted.includes(product.id),
										onClick: () => setWishlisted((current) => current.includes(product.id) ? current.filter((id) => id !== product.id) : [...current, product.id]),
										className: "absolute top-3 right-3 flex size-9 items-center justify-center rounded-full bg-white/95 text-ink hover:bg-white",
										children: /* @__PURE__ */ jsx(Heart, {
											className: `size-[18px] ${wishlisted.includes(product.id) ? "fill-ink" : ""}`,
											strokeWidth: 1.8
										})
									})
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: "min-w-0 px-3 pt-2 pb-3 sm:px-3.5",
								children: [
									/* @__PURE__ */ jsx("p", {
										className: "truncate text-[12px] text-[#737d8e]",
										children: product.category
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "mt-0.5 truncate text-[14px] leading-5 font-medium text-ink",
										children: product.title
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "mt-2 flex flex-wrap items-center gap-2 text-[15px] leading-none font-bold text-[#111]",
										children: [/* @__PURE__ */ jsxs("span", { children: ["$", product.price.toFixed(2)] }), product.oldPrice && /* @__PURE__ */ jsxs("span", {
											className: "text-[13px] font-normal text-[#7a8190] line-through",
											children: ["$", product.oldPrice.toFixed(2)]
										})]
									}),
									/* @__PURE__ */ jsx("div", {
										className: "mt-2.5 flex min-h-4 items-center gap-1.5",
										children: product.colors.map((color) => /* @__PURE__ */ jsx("button", {
											type: "button",
											"aria-label": `${color.name} color`,
											"aria-pressed": (selectedColors[product.id] ?? product.colors[0].name) === color.name,
											onClick: () => setSelectedColors((current) => ({
												...current,
												[product.id]: color.name
											})),
											className: `size-4 rounded-full border ${color.name === "White" ? "border-[#c5c5c5]" : "border-black/5"} ${selectedColors[product.id] === color.name ? "ring-1 ring-ink ring-offset-1" : ""}`,
											style: { backgroundColor: color.value }
										}, color.name))
									})
								]
							})]
						}, product.id))
					}) : /* @__PURE__ */ jsxs("div", {
						className: "flex min-h-64 flex-col items-center justify-center border border-hairline px-5 text-center",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "font-semibold text-ink",
								children: "No lighting found"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-1 text-sm text-body",
								children: "Try another search or clear your filters."
							}),
							/* @__PURE__ */ jsx("button", {
								type: "button",
								onClick: () => {
									setFilters(emptyFilters);
									setSelectedCategory("");
									setSearch("");
								},
								className: "mt-4 text-sm font-medium text-ink underline underline-offset-4",
								children: "Clear filters"
							})
						]
					})]
				})]
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "shop-discover border-t border-hairline bg-canvas",
			"aria-label": "Discover more",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto flex max-w-[1584px] flex-col gap-3 px-5 py-4 sm:px-8 lg:h-[118px] lg:flex-row lg:items-center lg:gap-5 lg:px-[43px] lg:py-0",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "shrink-0 text-[14px] font-bold tracking-[0.015em] text-ink",
						children: "DISCOVER MORE"
					}),
					/* @__PURE__ */ jsxs("form", {
						onSubmit: discoverSearch,
						className: "relative min-w-0 flex-1 lg:ml-9",
						children: [/* @__PURE__ */ jsx(Search, { className: "absolute top-1/2 left-4 size-5 -translate-y-1/2 text-body" }), /* @__PURE__ */ jsx("input", {
							type: "search",
							"aria-label": "Search products, collections, or inspiration",
							value: search,
							onChange: (event) => setSearch(event.target.value),
							placeholder: "Search products, collections, or inspiration",
							className: "h-[50px] w-full rounded-[13px] border border-hairline bg-white pr-4 pl-14 text-[13px] text-ink placeholder:text-[#798396] focus:border-body focus:ring-0"
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "flex gap-2.5 overflow-x-auto pb-1 lg:gap-4 lg:pb-0",
						children: [
							"New Arrivals",
							"Best Sellers",
							"Collections",
							"Pendant Lights",
							"Smart Lighting"
						].map((chip) => /* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: () => {
								setSearch(chip === "Pendant Lights" ? chip : "");
								setSelectedCategory(chip === "Smart Lighting" ? chip : "");
								if (chip === "New Arrivals") setFilters({
									...emptyFilters,
									"Product Type": "Table Lamps"
								});
								else if (chip === "Best Sellers") setFilters({
									...emptyFilters,
									"Product Type": "Pendant Lights"
								});
								else if (chip === "Collections") {
									setFilters(emptyFilters);
									setSelectedCategory("");
								} else if (chip === "Pendant Lights") setFilters({
									...emptyFilters,
									"Product Type": "Pendant Lights"
								});
								else setFilters(emptyFilters);
							},
							className: "h-[50px] shrink-0 rounded-full border border-hairline bg-white px-5 text-[13px] text-ink hover:bg-surface-soft lg:px-6",
							children: chip
						}, chip))
					})
				]
			})
		}),
		filterOpen && /* @__PURE__ */ jsxs("div", {
			className: "fixed inset-0 z-[80] lg:hidden",
			children: [/* @__PURE__ */ jsx("button", {
				type: "button",
				"aria-label": "Close filters",
				onClick: () => setFilterOpen(false),
				className: "absolute inset-0 bg-black/40"
			}), /* @__PURE__ */ jsxs("aside", {
				className: "absolute inset-y-0 left-0 flex w-[min(88vw,360px)] flex-col overflow-y-auto bg-canvas shadow-xl",
				"aria-label": "Product filters",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between border-b border-hairline px-6 py-4",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "font-semibold text-ink",
							children: "Filters"
						}), /* @__PURE__ */ jsx("button", {
							type: "button",
							"aria-label": "Close filters",
							onClick: () => setFilterOpen(false),
							className: "flex size-9 items-center justify-center",
							children: /* @__PURE__ */ jsx(X, { className: "size-5" })
						})]
					}),
					/* @__PURE__ */ jsx(FilterSidebar, {
						selectedCategory,
						filters,
						setCategory: setSelectedCategory,
						setFilter
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-auto flex gap-3 border-t border-hairline p-5",
						children: [/* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: () => {
								setFilters(emptyFilters);
								setSelectedCategory("");
							},
							className: "h-12 flex-1 border border-hairline text-sm",
							children: "Clear"
						}), /* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: () => setFilterOpen(false),
							className: "h-12 flex-1 bg-[#151c28] text-sm text-white",
							children: "Apply filters"
						})]
					})
				]
			})]
		})
	] });
}
//#endregion
export { ListProduct as default };

//# sourceMappingURL=list-product-BSAKqS2S.js.map