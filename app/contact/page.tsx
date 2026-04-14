import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import CloudImage from "../components/CloudImage";
import ContactForm from "./ContactForm";
import { socialPreviewImage } from "../data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Andres Gomes for collaborations, commissions, and photography inquiries.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Andres Gomes",
    description:
      "Get in touch with Andres Gomes for collaborations, commissions, and photography inquiries.",
    url: "/contact",
    type: "website",
    images: [
      {
        url: socialPreviewImage,
        width: 1200,
        height: 630,
        alt: "Preview of Andres Gomes contact page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Andres Gomes",
    description:
      "Get in touch with Andres Gomes for collaborations, commissions, and photography inquiries.",
    images: [socialPreviewImage],
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CloudImage
            id="v1773436074/monza20_amiyz4.jpg"
            alt=""
            fill
            priority
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black" />
        </div>

        <div className="mx-auto max-w-6xl px-6 pt-28 pb-16 sm:pt-36">
          <div className="max-w-2xl">
            <Link href="/" className="text-sm text-white/70 hover:text-white ">
              CONTACTO
            </Link>

            <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight sm:text-7xl">
              Let&apos;s Talk.
            </h1>
            <p className="mt-6 text-pretty text-lg leading-8 text-white/75">
              If you have a collaboration, session, or project in mind, feel
              free to reach out. I will get back to you as soon as possible.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/work"
                className="rounded-md bg-white/10 px-4 py-2.5 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur hover:bg-white/15"
              >
                View Work
              </Link>
              <Link
                href="/"
                className="text-sm font-semibold text-white/80 hover:text-white"
              >
                ← Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur">
          <ContactForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}
