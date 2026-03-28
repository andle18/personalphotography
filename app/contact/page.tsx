import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import CloudImage from "../components/CloudImage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Andres Gomes for collaborations, commissions, and photography inquiries.",
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
            <p className="text-sm tracking-widest text-white/90">CONTACT</p>
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
                Home →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur">
          <form action="#" method="POST" className="p-6 sm:p-10">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold text-white"
                >
                  First Name
                </label>
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="mt-2.5 block w-full rounded-md bg-white/10 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/20 placeholder:text-white/50 focus:outline-2 focus:-outline-offset-2 focus:outline-white/50"
                />
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold text-white"
                >
                  Last Name
                </label>
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="mt-2.5 block w-full rounded-md bg-white/10 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/20 placeholder:text-white/50 focus:outline-2 focus:-outline-offset-2 focus:outline-white/50"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-white"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="mt-2.5 block w-full rounded-md bg-white/10 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/20 placeholder:text-white/50 focus:outline-2 focus:-outline-offset-2 focus:outline-white/50"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="mt-2.5 block w-full rounded-md bg-white/10 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/20 placeholder:text-white/50 focus:outline-2 focus:-outline-offset-2 focus:outline-white/50"
                  placeholder="Tell me about your idea..."
                  defaultValue={""}
                />
              </div>
            </div>

            <div className="mt-10 flex justify-end border-t border-white/10 pt-8">
              <button
                type="submit"
                className="rounded-md bg-white/10 px-4 py-2.5 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur hover:bg-white/15"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
