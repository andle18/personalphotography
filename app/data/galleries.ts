export type GalleryImage = {
  src: string; // usa ID público de Cloudinary o link completo de Cloudinary
  alt?: string;
  caption?: string; // leyenda: "Tower Bridge · London"
};

export type Gallery = {
  slug: string; // "london"
  title: string; // "London"
  images: GalleryImage[];
  objectPosition?: string;
};

export const GALLERIES: Gallery[] = [
  {
    slug: "london",
    title: "London",
    images: [
      { src: "v1774013030/london1_mbvtkc.jpg", caption: "London · Street" },
      { src: "v1774013027/london2_ppetwg.jpg", caption: "London · Skyline" },
      {
        src: "v1774013029/london3_gczfuv.jpg",
        caption: "London · Architecture",
      },
      {
        src: "v1773436074/_DSC5663-Enhanced-NR_ri6v9n.jpg",
        caption: "London · Night",
      },
      {
        src: "v1773436072/IMG_4385_jztcpz.jpg",
        caption: "London · Reflections",
      },
      {
        src: "v1773436078/_DSC5688-Enhanced-NR_jtsa3j.jpg",
        caption: "London · Canary Wharf",
      },
      {
        src: "v1773438048/DSC07518_r2b3pu.jpg",
        caption: "London · Big Ben",
      },
      { src: "v1773438050/DSC05533_upslhu.jpg", caption: "London · River" },

      { src: "v1773436077/BORROSAS_xepfto.jpg", caption: "London · Blossom" },
      {
        src: "v1773438087/IMG_3739_e44uwa.jpg",
        caption: "London · Riverside",
      },
    ],
  },
  {
    slug: "spain",
    title: "Spain",
    images: [
      {
        src: "v1773436069/DSC08009_cvo4vn.jpg",
        caption: "Madrid · Golden Coast",
      },
      { src: "v1774013037/madrid0_zuqhcq.jpg", caption: "Madrid · Quiet Game" },
      {
        src: "v1774013024/madrid9_lbqluj.jpg",
        caption: "Madrid · City Horizon",
      },
      {
        src: "v1774013033/madrid_qr5923.jpg",
        caption: "Madrid · Quiet Moments",
      },
      {
        src: "v1773436070/DSC08295-Enhanced-NR_bigvco.jpg",
        caption: "Madrid · Mountain Glow",
      },
      { src: "v1773436065/DSC02533_zhoal7.jpg", caption: "Madrid · Night Sky" },
      {
        src: "v1773438048/_DSC0816i_47_vinl6n.jpg",
        caption: "Madrid · Wind & Flight ",
      },
    ],
  },
  {
    slug: "italy",
    title: "Italy",
    images: [
      { src: "v1774013031/monza5_jczule.jpg", caption: "Lake Como · Motion" },
      {
        src: "v1774013029/monza7_unxat6.jpg",
        caption: "Lake Como · Hidden Villa",
      },
      {
        src: "v1774013032/monza9_xoxqnh.jpg",
        caption: "Milan · Golden Passage",
      },
      {
        src: "v1774013027/monza3_hvtbcg.jpg",
        caption: "Lake Como · Framed View",
      },
      {
        src: "v1774013024/monza13_papmru.jpg",
        caption: "Verona · Timeless Stone",
      },
    ],
  },
  {
    slug: "monza",
    title: "Monza",
    images: [
      { src: "v1774013037/monza20_gtibey.jpg", caption: "Monza · Action" },
      { src: "v1774013031/monza4_kmt2cb.jpg", caption: "Monza · Adrenaline" },
      { src: "v1774013029/monza6_fqx90z.jpg", caption: "Monza · Intensity" },
      { src: "v1773436074/monza20_amiyz4.jpg", caption: "Monza · Precision" },
      {
        src: "v1774721571/_DSC9868-Mejorado-NR-Recuperadoui_copia_btbzsh.jpg",
        caption: "Monza · Speed",
      },
      {
        src: "v1774721742/_DSC9160-Enhanced-NR-2_np9vgh.jpg",
        caption: "Monza · Speed",
      },
    ],
  },

  {
    slug: "gold-sun",
    title: "Gold Sun",
    images: [
      {
        src: "v1773438042/_DSC0923_hucdd8.jpg",
        caption: "Madrid · Evening Glow",
      },

      {
        src: "v1773438041/IMG_0029_mzmzda.jpg",
        caption: "London · Shared Light",
      },

      {
        src: "v1773438045/DSC00167_kbccql.jpg",
        caption: "London · Soft Horizon",
      },

      {
        src: "v1773438045/DSC04618_zva3pw.jpg",
        caption: "Madeira · Burning Horizon",
      },

      {
        src: "v1773438047/DSC04662_hqnh0r.jpg",
        caption: "Madeira · Fading Light",
      },

      {
        src: "v1774013023/sun6_rz8jux.jpg",
        caption: "Alicante · Pastel Sky",
      },

      {
        src: "v1774013033/sun8_enwtka.jpg",
        caption: "Alicante · Endless Sky",
      },
    ],
  },
  {
    slug: "wildlife",
    title: "Wildlife",
    images: [
      {
        src: "v1773436084/_DSC7185-Enhanced-SR_adbpft.jpg",
        caption: "Wildlife · Still Water",
      },
      {
        src: "v1773436072/_DSC6976_hd5dfb.jpg",
        caption: "Wildlife · Quiet Gaze",
      },
      {
        src: "v1773436075/_DSC6916-2_x3mm6i.jpg",
        caption: "Wildlife · Blooming Wild",
      },
      {
        src: "v1774719452/_DSC6233-Enhanced-SR_dhr7qz.jpg",
        caption: "Wildlife · Watchful Moment",
      },
      {
        src: "v1774721132/_DSC0303-2_hcrqo3.jpg",
        caption: "Wildlife · Curious Gaze",
      },
      {
        src: "v1774721134/_DSC1054_x1bonu.jpg",
        caption: "Wildlife · Upright",
      },
      {
        src: "v1774721133/_DSC1132_szwmbe.jpg",
        caption: "Wildlife · City Nature",
      },
      {
        src: "v1774721133/DSC06198_olrtop.jpg",
        caption: "Wildlife · Paired Instinct",
      },
    ],
  },
];
