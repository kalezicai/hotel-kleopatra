/* ============================================================
   Hotel Kleopatra (Ulcinj, Montenegro) — Site content
   ============================================================ */

const img = (name: string) => `/images/${name}`;
const roomImg = (type: string, name: string) => `/images/rooms/${encodeURIComponent(type)}/${name}`;

export type Room = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  capacity: string;
  size: string;
  priceFrom: number;
  seaView: boolean;
  balcony: boolean;
  features: string[];
};

export const rooms: Room[] = [
  {
    id: "double-sea",
    name: "Comfort Double Room",
    tagline: "Sea view for two",
    description: "A bright, air-conditioned room with a king bed, private balcony and sweeping Adriatic views. Satellite TV, fridge and en-suite shower complete your stay.",
    image: roomImg("Comfort Double Room with Sea View", "img_376879452.webp"),
    capacity: "2 Guests · 1 King Bed",
    size: "15 m²",
    priceFrom: 75,
    seaView: true,
    balcony: true,
    features: ["Sea View", "Private Balcony", "Air Conditioning", "Free WiFi", "Satellite TV", "Fridge", "En-suite Shower"],
  },
  {
    id: "triple-sea",
    name: "Comfort Triple Room",
    tagline: "Space to share",
    description: "Generously proportioned with a king bed and a single bed, this room offers a balcony overlooking the sea — perfect for small families or friends.",
    image: roomImg("Comfort Three-Bedroom Apartment with Balcony and Sea View", "img_377820591.webp"),
    capacity: "3 Guests · 1 King + 1 Twin",
    size: "19 m²",
    priceFrom: 95,
    seaView: true,
    balcony: true,
    features: ["Sea View", "Private Balcony", "Air Conditioning", "Free WiFi", "Satellite TV", "Fridge", "En-suite Shower"],
  },
  {
    id: "two-bedroom",
    name: "Two-Bedroom Apartment",
    tagline: "Home above the sea",
    description: "A self-contained apartment with two separate bedrooms, a kitchenette and a balcony. Ideal for families or couples wanting extra space and privacy.",
    image: roomImg("Comfort Two-Bedroom Apartment with Balcony", "img_376412118.webp"),
    capacity: "4 Guests · 2 Bedrooms",
    size: "25 m²",
    priceFrom: 120,
    seaView: true,
    balcony: true,
    features: ["Sea View", "Private Balcony", "Kitchenette", "Air Conditioning", "Free WiFi", "Living Area", "Satellite TV", "Fridge"],
  },
  {
    id: "three-bedroom",
    name: "Three-Bedroom Apartment",
    tagline: "The whole family together",
    description: "Our largest accommodation offering 65 m² of living space across three bedrooms, full kitchen and a large balcony with panoramic sea views.",
    image: roomImg("Comfort Three-Bedroom Apartment with Balcony and Sea View", "img_377820555.webp"),
    capacity: "6 Guests · 3 Bedrooms",
    size: "65 m²",
    priceFrom: 180,
    seaView: true,
    balcony: true,
    features: ["Panoramic Sea View", "Large Balcony", "Full Kitchen", "Air Conditioning", "Free WiFi", "Living Room", "Satellite TV", "Fridge"],
  },
];

export type AllRoomType = {
  id: string;
  name: string;
  category: string;
  images: string[];
  seaView: boolean;
  balcony: boolean;
  capacity: string;
  reviewCount: number;
};

const roomFolder = (folder: string) => {
  const base = `/images/rooms/${encodeURIComponent(folder)}/`;
  return base;
};

export const allRoomTypes: AllRoomType[] = [
  { id: "comfort-double-sea", name: "Comfort Double Room with Sea View", category: "Double", images: ["img_18910489.webp", "img_376639001.webp", "img_376639109.webp", "img_376639112.webp", "img_376879432.webp", "img_376879452.webp", "img_377943982.webp", "img_377945406.webp", "img_723326524.webp"].map(f => roomFolder("Comfort Double Room with Sea View") + f), seaView: true, balcony: true, capacity: "2 Adults", reviewCount: 9 },
  { id: "comfort-triple-sea", name: "Comfort Triple Room with Sea View", category: "Triple", images: ["img_376411936.webp", "img_376416058.webp", "img_376901425.webp", "img_377040629.webp"].map(f => roomFolder("Comfort Triple Room with Sea View") + f), seaView: true, balcony: true, capacity: "3 Adults", reviewCount: 4 },
  { id: "comfort-quad-sea", name: "Comfort Quadruple Room with Sea View", category: "Quadruple", images: ["img_376412024.webp", "img_376412063.webp", "img_376412080.webp"].map(f => roomFolder("Comfort Quadruple Room with Sea View") + f), seaView: true, balcony: false, capacity: "4 Adults", reviewCount: 3 },
  { id: "comfort-two-bed-balcony", name: "Comfort Two-Bedroom Apartment with Balcony", category: "Apartment", images: ["img_376412118.webp", "img_376415226.webp", "img_376415249.webp", "img_376415538.webp", "img_376415657.webp"].map(f => roomFolder("Comfort Two-Bedroom Apartment with Balcony") + f), seaView: false, balcony: true, capacity: "4 Adults", reviewCount: 5 },
  { id: "standard-double-sea-pool", name: "Standard Double Room with Balcony, Sea and Pool View", category: "Double", images: ["img_376540815.webp", "img_377939814.webp", "img_377939836.webp", "img_379919136.webp", "img_723326535.webp"].map(f => roomFolder("Standard Double Room with Balcony, Sea and Pool View") + f), seaView: true, balcony: true, capacity: "2 Adults", reviewCount: 5 },
  { id: "comfort-three-bed-balcony", name: "Comfort Three-Bedroom Apartment with Balcony and Sea View", category: "Apartment", images: ["img_377820555.webp", "img_377820591.webp", "img_377820599.webp", "img_377820706.webp", "img_377820724.webp", "img_377820743.webp"].map(f => roomFolder("Comfort Three-Bedroom Apartment with Balcony and Sea View") + f), seaView: true, balcony: true, capacity: "6 Adults", reviewCount: 6 },
  { id: "standard-triple-sea-pool", name: "Standard Triple Room with Balcony, Sea and Pool View", category: "Triple", images: ["img_377937225.webp", "img_377937252.webp"].map(f => roomFolder("Standard Triple Room with Balcony, Sea and Pool View") + f), seaView: true, balcony: true, capacity: "3 Adults", reviewCount: 2 },
  { id: "luxury-apartment", name: "Luxury Apartment", category: "Apartment", images: ["img_106913881.webp", "img_482621576.webp", "img_482621577.webp", "img_482621578.webp", "img_482621579.webp", "img_482621602.webp", "img_482621606.webp", "img_482621608.webp", "img_482621615.webp", "img_482621618.webp"].map(f => roomFolder("Luxury Apartment") + f), seaView: false, balcony: true, capacity: "4 Adults", reviewCount: 10 },
  { id: "comfort-double-pool", name: "Comfort Double Room with Balcony and Pool View", category: "Double", images: ["img_376416698.webp", "img_376416778.webp", "img_376418251.webp"].map(f => roomFolder("Comfort Double Room with Balcony and Pool View") + f), seaView: false, balcony: true, capacity: "2 Adults", reviewCount: 3 },
  { id: "standard-double-balcony", name: "Standard Double Room with Balcony", category: "Double", images: ["img_376540649.webp", "img_376540800.webp"].map(f => roomFolder("Standard Double Room with Balcony") + f), seaView: false, balcony: true, capacity: "2 Adults", reviewCount: 2 },
  { id: "comfort-two-bed", name: "Comfort Two-Bedroom Apartment", category: "Apartment", images: ["img_376555033.webp"].map(f => roomFolder("Comfort Two-Bedroom Apartment") + f), seaView: false, balcony: false, capacity: "4 Adults", reviewCount: 1 },
  { id: "standard-two-bed", name: "Standard Two-Bedroom Apartment", category: "Apartment", images: ["img_376560702.webp", "img_376560709.webp", "img_376560724.webp", "img_376560743.webp"].map(f => roomFolder("Standard Two-Bedroom Apartment") + f), seaView: false, balcony: false, capacity: "4 Adults", reviewCount: 4 },
  { id: "standard-apartment", name: "Standard Apartment", category: "Apartment", images: ["img_376672869.webp", "img_376672931.webp", "img_376672932.webp", "img_376672940.webp", "img_376672972.webp", "img_376673715.webp"].map(f => roomFolder("Standard Apartment") + f), seaView: false, balcony: false, capacity: "4 Adults", reviewCount: 6 },
  { id: "double-room", name: "Double Room", category: "Double", images: ["img_482622348.webp", "img_482634937.webp"].map(f => roomFolder("Double Room") + f), seaView: false, balcony: false, capacity: "2 Adults", reviewCount: 2 },
  { id: "deluxe-double", name: "Deluxe Double Room", category: "Double", images: ["img_373551988.webp", "img_373552144.webp", "img_373552245.webp", "img_374141639.webp"].map(f => roomFolder("Deluxe Double Room") + f), seaView: false, balcony: false, capacity: "2 Adults", reviewCount: 4 },
  { id: "deluxe-quad", name: "Deluxe Quadruple Room", category: "Quadruple", images: ["img_373552982.webp", "img_376646911.webp", "img_376646912.webp", "img_376813278.webp", "img_376814670.webp"].map(f => roomFolder("Deluxe Quadruple Room") + f), seaView: false, balcony: false, capacity: "4 Adults", reviewCount: 5 },
  { id: "deluxe-apartment", name: "Deluxe Apartment", category: "Apartment", images: ["img_308437279.webp", "img_376810701.webp", "img_376811377.webp", "img_376811848.webp", "img_376812449.webp", "img_376812452.webp", "img_376812453.webp", "img_376812454.webp"].map(f => roomFolder("Deluxe Apartment") + f), seaView: false, balcony: false, capacity: "4 Adults", reviewCount: 8 },
  { id: "standard-apartment-pool", name: "Standard Apartment with Pool View", category: "Apartment", images: ["img_376898535.webp", "img_376898684.webp", "img_376898742.webp", "img_376898811.webp", "img_376898833.webp"].map(f => roomFolder("Standard Apartment with Pool View") + f), seaView: false, balcony: false, capacity: "4 Adults", reviewCount: 5 },
  { id: "superior-queen-two-beds", name: "Superior Queen Room with Two Queen Beds", category: "Queen", images: ["img_379916548.webp", "img_379916610.webp", "img_379916668.webp", "img_379916688.webp", "img_379916689.webp", "img_379918767.webp", "img_586187572.webp", "img_586187613.webp", "img_586187629.webp", "img_586187686.webp", "img_723326532.webp"].map(f => roomFolder("Superior Queen Room with Two Queen Beds") + f), seaView: false, balcony: false, capacity: "4 Adults", reviewCount: 11 },
  { id: "superior-twin", name: "Superior Twin Room", category: "Twin", images: ["img_379918018.webp", "img_379918148.webp", "img_379918461.webp", "img_379918469.webp", "img_586187944.webp", "img_586187964.webp"].map(f => roomFolder("Superior Twin Room") + f), seaView: false, balcony: false, capacity: "2 Adults", reviewCount: 6 },
  { id: "superior-quad", name: "Superior Quadruple Room", category: "Quadruple", images: ["img_379918674.webp", "img_379918675.webp", "img_379918683.webp", "img_586188616.webp", "img_586189009.webp", "img_586189016.webp"].map(f => roomFolder("Superior Quadruple Room") + f), seaView: false, balcony: false, capacity: "4 Adults", reviewCount: 6 },
  { id: "superior-queen", name: "Superior Queen Room", category: "Queen", images: ["img_379918741.webp", "img_379918744.webp", "img_379918750.webp", "img_379918770.webp", "img_586189139.webp", "img_586189142.webp", "img_586189147.webp", "img_586189167.webp"].map(f => roomFolder("Superior Queen Room") + f), seaView: false, balcony: false, capacity: "2 Adults", reviewCount: 8 },
  { id: "superior-double", name: "Superior Double Room", category: "Double", images: ["img_379918740.webp", "img_379918751.webp"].map(f => roomFolder("Superior Double Room") + f), seaView: false, balcony: false, capacity: "2 Adults", reviewCount: 2 },
];

export const roomCategories = ["Double", "Triple", "Quadruple", "Apartment", "Queen", "Twin"];

export type GalleryImage = {
  src: string;
  alt: string;
  category: string;
  span?: boolean;
};

export const gallery: GalleryImage[] = [
  { src: img("h_kleopatra_1690136113_3153412732346071395_3594665146.webp"), alt: "Sunlit room with sea view at Hotel Kleopatra", category: "Rooms", span: true },
  { src: img("h_kleopatra_1720179402_3405434106496183801_3594665146.webp"), alt: "Comfortable hotel room with balcony", category: "Rooms" },
  { src: img("h_kleopatra_1688387618_3138745297865615286_3594665146.webp"), alt: "Outdoor pool and sun loungers", category: "Pool" },
  { src: img("h_kleopatra_1688587883_3140425240852529702_3594665146.webp"), alt: "Hotel exterior with Mediterranean facade", category: "Exterior" },
  { src: img("h_kleopatra_1720179402_3405434106756331954_3594665146.webp"), alt: "Sunset over the Adriatic from the terrace", category: "Sea View", span: true },
  { src: img("h_kleopatra_1720179402_3405434106496243584_3594665146.webp"), alt: "Bright and airy double room interior", category: "Rooms" },
  { src: img("h_kleopatra_1690136113_3153412732354361225_3594665146.webp"), alt: "Swimming pool surrounded by greenery", category: "Pool" },
  { src: img("h_kleopatra_1690483365_3156325697890199049_3594665146.webp"), alt: "Dining area at the hotel restaurant", category: "Dining" },
  { src: img("h_kleopatra_1720179402_3405434106504774338_3594665146.webp"), alt: "Evening poolside with warm lighting", category: "Pool", span: true },
  { src: img("h_kleopatra_1684500077_3106134240080670829_3594665146.webp"), alt: "Traditional Montenegrin meal presentation", category: "Dining" },
  { src: img("h_kleopatra_1690136113_3153412732354499757_3594665146.webp"), alt: "Cozy terrace seating area", category: "Terraces" },
  { src: img("h_kleopatra_1720179402_3405434106655607439_3594665146.webp"), alt: "Hotel Kleopatra exterior with pool view", category: "Exterior" },
];

export type Attraction = {
  name: string;
  type: string;
  distance: string;
  minutes: string;
  description: string;
};

export const attractions: Attraction[] = [
  { name: "Ulcinj Old Town", type: "Historic Landmark", distance: "1.1 km", minutes: "14 min walk", description: "A centuries-old fortress town crowning the coast, with stone lanes, cafés and unforgettable views." },
  { name: "Mala Plaza Beach", type: "City Beach", distance: "0.8 km", minutes: "10 min walk", description: "The beloved main beach of Ulcinj — golden sand and the warm, shallow Adriatic at your doorstep." },
  { name: "Long Beach (Velika Plaža)", type: "13 km Beach", distance: "6 km", minutes: "10 min drive", description: "One of the longest sandy beaches in Europe, a wild expanse of dunes and endless horizon." },
  { name: "Ada Bojana Island", type: "River Island", distance: "11 km", minutes: "18 min drive", description: "A triangular river island formed by the Bojana River delta, famous for wooden restaurants and nudist beaches." },
  { name: "Ulcinj Marina & Seafront", type: "Dining Quarter", distance: "0.6 km", minutes: "8 min walk", description: "Seafood grills, rooftop cocktails and live music unfold along the lively seafront each evening." },
  { name: "Liberty Monument", type: "Monument", distance: "0.5 km", minutes: "7 min walk", description: "Iconic monument overlooking the sea, dedicated to Ulcinj's independence — a landmark visible from the hotel." },
];

export type Review = {
  name: string;
  country: string;
  initials: string;
  rating: number;
  title: string;
  body: string;
};

export const reviews: Review[] = [
  { name: "Sophia Laurent", country: "Paris, France", initials: "SL", rating: 5, title: "Felt like a hidden gem", body: "We woke to the sea every morning and ended each evening on the terrace. The family who runs Kleopatra made us feel like old friends — this is what true hospitality feels like." },
  { name: "Markus & Lena Weber", country: "Munich, Germany", initials: "MW", rating: 5, title: "The best decision of our trip", body: "Spotless rooms, an immaculate pool and breakfast that we still talk about. We booked direct and were upgraded to an apartment with the most beautiful view in Ulcinj." },
  { name: "Amara Okafor", country: "London, United Kingdom", initials: "AO", rating: 5, title: "Peaceful and effortlessly elegant", body: "After a week of crowded resorts elsewhere, Kleopatra was a revelation. Calm, refined and genuinely personal. The staff planned our entire Old Town evening — flawless." },
  { name: "The Rossi Family", country: "Milan, Italy", initials: "TR", rating: 5, title: "Our children didn't want to leave", body: "Family-friendly without sacrificing comfort. The pool, the space, the warmth — our kids called it the best holiday ever. We will return every summer." },
  { name: "Erik Sundqvist", country: "Stockholm, Sweden", initials: "ES", rating: 5, title: "Five stars, deservedly", body: "Every detail considered, every person kind. The sea view at golden hour from our balcony is seared into my memory. Direct booking was seamless and the rate beat every platform." },
  { name: "Priya Nair", country: "Dubai, UAE", initials: "PN", rating: 5, title: "A serene Adriatic sanctuary", body: "Comfortable rooms, soft light and the most restful sleep I have had in years. Hotel Kleopatra is proof that a family-run hotel surpasses any chain. Simply wonderful." },
];

export const stats = [
  { label: "Average Guest Rating", value: 8.5, suffix: "★", decimals: 1 },
  { label: "Happy Guests Welcomed", value: 12500, suffix: "+", decimals: 0 },
  { label: "Years of Hospitality", value: 26, suffix: "", decimals: 0 },
  { label: "Review Score", value: 9.6, suffix: "/10", decimals: 1 },
];

export const amenities = [
  { name: "Outdoor Pool", icon: "Waves" },
  { name: "Restaurant", icon: "UtensilsCrossed" },
  { name: "Breakfast Buffet", icon: "Croissant" },
  { name: "Sea View", icon: "Sailboat" },
  { name: "Private Balcony", icon: "DoorOpen" },
  { name: "Airport Shuttle", icon: "Plane" },
  { name: "Free Parking", icon: "SquareParking" },
  { name: "Free WiFi", icon: "Wifi" },
  { name: "Room Service", icon: "ConciergeBell" },
  { name: "Family Friendly", icon: "Users" },
  { name: "Air Conditioning", icon: "Snowflake" },
  { name: "Laundry Service", icon: "Shirt" },
  { name: "Pool Bar", icon: "Wine" },
  { name: "Daily Housekeeping", icon: "Sparkles" },
  { name: "Tour Assistance", icon: "MapPinned" },
  { name: "Shared Terrace", icon: "Sun" },
];
