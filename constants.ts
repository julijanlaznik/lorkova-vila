
import { Room, Package, GalleryItem, ContactInfo, NewsItem } from './types';

export const CONTACT_INFO: ContactInfo = {
  address: "Čeladná 123, 739 12 Čeladná",
  phone: "+420 558 123 456",
  email: "recepce@lorkovavila.cz",
  mapsLink: "https://goo.gl/maps/placeholder",
  coords: { lat: 49.531, lng: 18.335 }
};

export const NEWS: NewsItem[] = [
  {
    id: "svatomartinske-hody",
    date: "11. 11. 2024",
    title: "Svatomartinské Hody",
    tag: "Gastronomie",
    excerpt: "Přijďte ochutnat tradiční husu s variací knedlíků a mladá vína z našeho sklepa. Rezervace stolu nutná.",
    content: `Listopad v Beskydech patří tradicím a dobrému jídlu. I letos pro vás náš šéfkuchař Martin Kovář připravil speciální Svatomartinské menu, které ctí staročeské recepty, ale přidává jim moderní šmrnc.

Hlavní hvězdou bude samozřejmě pomalu pečená husa z místního chovu, podávaná s červeným zelím na víně a variací domácích knedlíků – od karlovarského po bramborový drbák.
    
Jako předkrm podáváme husí paštiku s mandlemi a brusinkami, doprovázenou čerstvě upečeným chlebem z naší pece. Sladkou tečkou budou tradiční svatomartinské rohlíčky plněné ořechy a mákem.

K jídlu jsme pro vás vybrali ta nejlepší mladá vína ročníku 2024 od našich spřátelených vinařů z Moravy.

Těšíme se na vaši návštěvu. Vzhledem k velkému zájmu doporučujeme včasnou telefonickou rezervaci stolu.`,
    image: "/images/news-st-martin.webp"
  },
  {
    id: "silvestr-2024",
    date: "Prosinec 2024",
    title: "Silvestr v Beskydech",
    tag: "Event",
    excerpt: "Přivítejte nový rok v tichu hor. Připravujeme 5-chodovou galavečeři, živou hudbu a půlnoční wellness.",
    content: `Zakončete rok stylově, daleko od městského ruchu a petard, v objetí zasněžených Beskyd. Lorkova vila pro vás připravila exkluzivní silvestrovský večer, který bude oslavou klidu, elegance a gastronomie.

Večer zahájíme slavnostním welcome drinkem v lobby u krbu. Následovat bude 5-chodová degustační večeře párovaná s víny, kterou pro vás připravil náš kulinářský tým. Těšit se můžete na zvěřinové speciality, čerstvé ryby a dezerty inspirované zimní krajinou.

O hudební doprovod se postará jazzové trio, které navodí příjemnou atmosféru až do půlnoci. Pro ty, kteří chtějí rok zakončit relaxací, bude naše wellness zóna otevřena až do 01:00 hodin – přivítejte rok 2025 ve vířivce pod hvězdami.

Počet míst je limitován, aby byla zachována komorní a privátní atmosféra večera.`,
    image: "/images/news-silvestr.webp"
  },
  {
    id: "thajske-masaze",
    date: "Novinka",
    title: "Thajské masáže",
    tag: "Wellness",
    excerpt: "Náš tým posílila certifikovaná terapeutka z Thajska. Vyzkoušejte pravou sílu orientální relaxace.",
    content: `S radostí oznamujeme rozšíření naší wellness nabídky. Do týmu Lorkovy vily se přidala zkušená terapeutka Nuy, která pochází přímo z Thajska a má více než 15 let praxe v tradičních masážních technikách.

Nyní si u nás můžete dopřát:
- Tradiční thajskou masáž (Nuad Boran) – kombinace akupresury a protahování, která uvolňuje energetické dráhy v těle.
- Olejovou thajskou masáž – jemnější varianta zaměřená na hloubkovou relaxaci a uvolnění svalového napětí.
- Masáž bylinnými měšci – nahřáté balíčky bylinek, které prohřívají svaly a krásně voní.

Procedury probíhají v nově upravené masážní místnosti s atmosférou orientu. Rezervujte si svůj termín na recepci wellness.`,
    image: "/images/news-massage.webp"
  }
];

export const ROOMS: Room[] = [
  {
    id: "r1",
    title: "Double Superior",
    slug: "double-superior",
    shortDesc: "Prostorný dvoulůžkový pokoj s výhledem na hory.",
    longDesc: "Náš Superior pokoj nabízí dokonalou kombinaci moderního designu a horského klidu. Užijte si ranní kávu na vlastním balkoně s výhledem na Lysou horu. Interiér je laděn do zemitých tónů s využitím masivního dubového dřeva, které dodává prostoru hřejivou atmosféru.",
    capacity: 2,
    area: 28,
    priceFrom: 2900,
    coverImage: "/images/room-superior-cover.webp",
    videoUrl: "https://videos.pexels.com/video-files/7578552/7578552-uhd_2560_1440_30fps.mp4",
    galleryImages: [
      "/images/room-superior-1.webp", 
      "/images/room-superior-2.webp",
      "/images/room-superior-3.webp"
    ],
    features: ["King size postel", "Balkón s výhledem", "Smart TV 55\"", "Minibar & Vinotéka", "Kávovar Nespresso", "Dešťová sprcha", "Prémiová kosmetika"],
    availabilityFlag: true
  },
  {
    id: "r2",
    title: "Apartmá Lorka",
    slug: "apartma-lorka",
    shortDesc: "Luxusní apartmá s oddělenou ložnicí a vanou.",
    longDesc: "Nejvyšší standard ubytování v Lorkově vile. Prostorné apartmá s obývacím pokojem, luxusní koupelnou a privátní terasou. Ideální pro ty, kteří hledají naprosté soukromí a nekompromisní komfort. Večery můžete trávit u biokrbu nebo ve volně stojící vaně.",
    capacity: 4,
    area: 45,
    priceFrom: 4500,
    coverImage: "/images/room-lorka-cover.webp",
    videoUrl: "https://videos.pexels.com/video-files/7034509/7034509-uhd_2560_1440_30fps.mp4",
    galleryImages: [
      "/images/room-lorka-1.webp", 
      "/images/room-lorka-2.webp",
      "/images/room-lorka-3.webp"
    ],
    features: ["2x Ložnice", "Terasa 15m²", "Solitérní vana", "Biokrb", "Welcome Champagne", "Prémiová kosmetika", "Soundsystem Bang & Olufsen"],
    availabilityFlag: true
  },
  {
    id: "r3",
    title: "Rodinný Suite",
    slug: "family-room",
    shortDesc: "Ideální zázemí pro rodiny s dětmi.",
    longDesc: "Dostatek prostoru pro celou rodinu bez kompromisů v designu. Pokoj je chytře rozdělen na zónu pro rodiče a zónu pro děti, aby si každý našel svůj kousek klidu. Součástí je i hrací koutek a speciální vybavení pro nejmenší.",
    capacity: 4,
    area: 35,
    priceFrom: 3600,
    coverImage: "/images/room-family-cover.webp",
    videoUrl: "https://videos.pexels.com/video-files/6585593/6585593-uhd_2560_1440_25fps.mp4",
    galleryImages: [
       "/images/room-family-1.webp",
       "/images/room-family-2.webp"
    ],
    features: ["Manželská postel", "Designová palanda", "Hrací koutek", "Velká koupelna", "Výhled do zahrady", "Dětské župany", "PlayStation na vyžádání"],
    availabilityFlag: true
  }
];

export const PACKAGES: Package[] = [
  {
    id: "p1",
    title: "Romantický Útěk",
    summary: "Víkend pro dva plný relaxace a skvělého jídla.",
    inclusions: ["Ubytování na 2 noci", "Polopenze (3-chodové večeře)", "Privátní wellness (60 min)", "Láhev prosecca na pokoji", "Růže na posteli"],
    price: 6900,
    duration: "3 dny / 2 noci",
    promoImage: "/images/package-romantic.webp",
    type: "romantic"
  },
  {
    id: "p2",
    title: "Beskydský Detox",
    summary: "Regenerace těla i mysli v srdci hor.",
    inclusions: ["Ubytování na 3 noci", "Snídaně formou bufetu", "Neomezený vstup do wellness", "Masáž lávovými kameny (60 min)", "Bylinné čaje"],
    price: 8500,
    duration: "4 dny / 3 noci",
    promoImage: "/images/package-wellness.webp",
    type: "wellness"
  },
  {
    id: "p3",
    title: "Rodinná Výprava",
    summary: "Zážitky pro malé i velké.",
    inclusions: ["Ubytování v Rodinném Suite", "Polopenze", "Vstup na dětské hřiště", "Piknikový koš na výlet", "Mapy okolí"],
    price: 9900,
    duration: "3 dny / 2 noci",
    promoImage: "/images/package-family.webp",
    type: "family"
  }
];

export const GALLERY: GalleryItem[] = [
  { id: "g1", src: "/images/gallery-1.webp", alt: "Exteriér", category: "exterior" },
  { id: "g2", src: "/images/gallery-2.webp", alt: "Pokoj", category: "interior" },
  { id: "g3", src: "/images/gallery-3.webp", alt: "Wellness", category: "wellness" },
  { id: "g4", src: "/images/gallery-4.webp", alt: "Jídlo", category: "gastronomy" },
  { id: "g5", src: "/images/gallery-5.webp", alt: "Detail", category: "interior" },
  { id: "g6", src: "/images/gallery-6.webp", alt: "Zima", category: "exterior" },
  { id: "g7", src: "/images/gallery-7.webp", alt: "Káva", category: "gastronomy" },
  { id: "g8", src: "/images/gallery-8.webp", alt: "Bazén", category: "wellness" },
  { id: "g9", src: "/images/gallery-9.webp", alt: "Lobby", category: "interior" },
  { id: "g10", src: "/images/gallery-10.webp", alt: "Hory", category: "exterior" },
];
