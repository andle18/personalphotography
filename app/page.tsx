import CloudImage from "./components/CloudImage";
import Link from "next/link";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div className="bg-black text-white">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CloudImage
            id="v1773438087/DSC05950_epamv8.jpg"
            alt="Andres Gomes"
            fill
            w={1200}
            className="object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black" />
        </div>

        <div className="mx-auto max-w-6xl px-6 pt-28 pb-16 sm:pt-36">
          <div className="max-w-2xl">
            <p className="text-sm tracking-widest text-white/70">
              PHOTOGRAPHY PORTFOLIO
            </p>

            <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight sm:text-7xl">
              Andres Gomes.
            </h1>

            <p className="mt-6 text-pretty text-lg leading-8 text-white/75">
              I’m a photographer focused on storytelling through light and
              composition. Inspired by travel, the streets, and everyday
              details. This space brings together a selection of my work and the
              places I’ve explored.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/work"
                className="rounded-md bg-white/10 px-4 py-2.5 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur hover:bg-white/15"
              >
                My Work
              </Link>

              <Link
                href="/contact"
                className="text-sm font-semibold text-white/80 hover:text-white"
              >
                Contact →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6 pb-24">
        <AboutBlock />
      </main>

      <Footer />
    </div>
  );
}

function AboutBlock() {
  return (
    <div className="pt-16 sm:pt-24">
      <div className="bg-gray-900 pb-20 sm:pb-24 xl:pb-0 dark:bg-gray-800/50 dark:outline dark:outline-white/5 rounded-3xl">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row-reverse xl:items-stretch">
          <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
            <div className="relative aspect-[4/3] sm:aspect-[16/9] xl:aspect-auto h-full after:absolute after:inset-0 after:rounded-2xl after:ring-1 after:ring-white/15 md:-mx-8 xl:mx-0">
              <CloudImage
                id="v1773436066/my_wyk6es.jpg"
                alt="Andres Gomes"
                fill
                w={1200}
                className="absolute inset-0 size-full rounded-2xl bg-gray-800 object-cover [object-position:30%_55%] shadow-2xl"
              />
            </div>
          </div>

          <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
            <figure className="relative isolate pt-6 sm:pt-12">
              <blockquote className="text-xl/8 font-semibold text-white sm:text-2xl/9">
                <div className="space-y-6">
                  <p>
                    My name is Andrés Gomes. I am a Venezuelan photographer
                    living in London, with Portuguese roots. My work is inspired
                    by travel, cities, and the beauty of real moments that occur
                    naturally in everyday life.
                  </p>

                  <p>
                    I began photographing at a young age, initially as a hobby,
                    but quickly developed a passion for capturing experiences
                    through my lens. Photography became a way for me to see the
                    world, to train my eye, learning to perceive details,
                    emotions, and scenes that many people often overlook.
                  </p>
                  <p>
                    My camera has taken me to different parts of the world, from
                    the beautiful landscapes of Venezuela and various Latin
                    American countries to New York City, continuing my journey
                    through the magical and historic streets of Europe.
                  </p>
                  <p>
                    For me, photography is exploration, it is love, it is life.
                    Every street, every trip, every encounter, and every detail
                    offers a new story waiting to be captured.
                  </p>
                </div>
              </blockquote>
              <figcaption className="mt-8 text-base">
                <div className="font-semibold text-white">Andres Gomes</div>
                <div className="mt-1 text-gray-400">Photographer</div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
