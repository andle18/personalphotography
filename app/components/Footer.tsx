import Link from "next/link";
import CloudImage from "./CloudImage";

function IconGitHub(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M12 .5C5.73.5.75 5.78.75 12.3c0 5.22 3.44 9.64 8.2 11.2.6.12.82-.27.82-.6 0-.3-.01-1.08-.02-2.12-3.34.75-4.04-1.67-4.04-1.67-.55-1.43-1.34-1.81-1.34-1.81-1.09-.77.08-.76.08-.76 1.2.09 1.84 1.27 1.84 1.27 1.07 1.9 2.8 1.35 3.49 1.03.11-.8.42-1.35.76-1.66-2.67-.31-5.47-1.38-5.47-6.15 0-1.36.46-2.47 1.23-3.34-.12-.31-.53-1.56.12-3.25 0 0 1-.33 3.3 1.27.96-.27 1.99-.4 3.01-.41 1.02.01 2.05.14 3.01.41 2.3-1.6 3.3-1.27 3.3-1.27.65 1.69.24 2.94.12 3.25.77.87 1.23 1.98 1.23 3.34 0 4.78-2.8 5.83-5.48 6.14.43.39.81 1.15.81 2.32 0 1.68-.02 3.04-.02 3.46 0 .33.22.72.83.6 4.76-1.56 8.2-5.98 8.2-11.2C23.25 5.78 18.27.5 12 .5z" />
    </svg>
  );
}

function IconLinkedIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M4.98 3.5C3.88 3.5 3 4.4 3 5.5S3.88 7.5 4.98 7.5c1.08 0 1.97-.9 1.97-2s-.89-2-1.97-2zM3.5 21h2.95V8.98H3.5V21zM9 8.98V21h2.95v-6.6c0-3.53 4.6-3.82 4.6 0V21H19.5v-7.64c0-5.96-6.38-5.74-7.55-2.81V8.98H9z" />
    </svg>
  );
}

function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 4a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.2-.9a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z" />
    </svg>
  );
}

function IconTikTok(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M16.5 3c.4 2.6 2.2 4.6 4.5 5v3.2c-1.7.1-3.3-.4-4.6-1.3V17a6 6 0 1 1-6-6c.3 0 .7 0 1 .1v3.4a2.8 2.8 0 1 0 2 2.7V3h3.1z" />
    </svg>
  );
}

export default function Footer() {
  const footerBg = "v1773436084/_DSC5614_n2cafh.jpg";

  return (
    <footer className="relative z-0  overflow-hidden border-t border-white/10">
      <div className="pointer-events-none absolute inset-0">
        <CloudImage
          id={footerBg}
          alt=""
          fill
          className="object-cover object-[center_25%] opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-8 text-white">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-lg font-semibold">Andres Gomes</div>
            <div className="mt-1 text-sm text-white/70">
              © {new Date().getFullYear()} · Photographer
            </div>
          </div>

          <div className="flex items-center gap-5">
            <Link
              href="https://github.com/andle18"
              target="_blank"
              rel="noreferrer"
              className="text-white/80 hover:text-white"
            >
              <span className="sr-only">GitHub</span>
              <IconGitHub className="h-6 w-6" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/andres-gomes-7426723a9/"
              target="_blank"
              rel="noreferrer"
              className="text-white/80 hover:text-white"
            >
              <span className="sr-only">LinkedIn</span>
              <IconLinkedIn className="h-6 w-6" />
            </Link>

            <Link
              href="https://www.instagram.com/gomesvisuals/"
              target="_blank"
              rel="noreferrer"
              className="text-white/80 hover:text-white"
            >
              <span className="sr-only">Instagram</span>
              <IconInstagram className="h-6 w-6" />
            </Link>

            <Link
              href="https://www.tiktok.com/@andresgomes398"
              target="_blank"
              rel="noreferrer"
              className="text-white/80 hover:text-white"
            >
              <span className="sr-only">TikTok</span>
              <IconTikTok className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
