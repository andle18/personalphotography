export type WorkItem = {
  slug: string;
  title: string;
  country?: string;
  cover: string; // usa ID público de Cloudinary o link completo de Cloudinary
  year?: string;
  objectPosition?: string;
  fit?: "cover" | "contain"; // contain = se ve mas alejada (zoom out)
};

export const WORK_INTRO = {
  kicker: "SCROLL",
  title: "Visual Elegance",
  description:
    "This journey is meant to be explored slowly, allowing each image the space to breathe. Continue to the right to discover all the series.",
};

export const WORK: WorkItem[] = [
  {
    slug: "london",
    title: "London",
    country: "UK",
    cover: "v1774013027/london2_ppetwg.jpg",
    year: "2025",
  },
  {
    slug: "spain",
    title: "Spain",
    country: "Spain",
    cover: "v1774013024/madrid9_lbqluj.jpg",
    year: "2023",
  },
  {
    slug: "italy",
    title: "Italy",
    country: "Italy",
    cover: "v1774013026/monza0_qh8lg1.jpg",
    year: "2024",
    fit: "cover",
    objectPosition: "50% 35%",
  },
  {
    slug: "monza",
    title: "Monza",
    country: "Italy",
    cover: "v1773436074/monza20_amiyz4.jpg",
    year: "2024",
    objectPosition: "80% 80%",
  },
  {
    slug: "gold-sun",
    title: "Gold Sun",
    country: "Worldwide",
    cover: "v1773436070/DSC07466-Enhanced-NR-2_nk7iny.jpg",
    year: "2023",
  },
  {
    slug: "wildlife",
    title: "Wildlife",
    country: "Safari",
    cover: "v1774721132/_DSC0303-2_hcrqo3.jpg",
    year: "2020",
    objectPosition: "50% 60%",
  },
];
