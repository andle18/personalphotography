import Image, { type ImageProps } from "next/image";

type CloudImageProps = Omit<ImageProps, "src" | "alt"> & {
  id: string;
  alt: string;
  w?: number;
  h?: number;
  fit?: "cover" | "contain";
  q?: "auto" | number;
};

export default function CloudImage({
  id,
  alt,
  w = 1200,
  h,
  fit = "cover",
  q = "auto",
  ...props
}: CloudImageProps) {
  const hasExplicitSize =
    props.fill ||
    (typeof props.width === "number" && props.width > 0) ||
    (typeof props.height === "number" && props.height > 0);

  const fallbackWidth = Math.max(1, Math.round(w));
  const fallbackHeight = Math.max(1, Math.round(h ?? w));

  const renderImage = (src: string, unoptimized?: boolean) => {
    if (hasExplicitSize) {
      return <Image {...props} src={src} alt={alt} unoptimized={unoptimized} />;
    }

    return (
      <Image
        {...props}
        src={src}
        alt={alt}
        width={fallbackWidth}
        height={fallbackHeight}
        unoptimized={unoptimized}
      />
    );
  };

  const isCloudinaryVersionedId = /^\/v\d+\//.test(id);
  const isLocalAsset = id.startsWith("/") && !isCloudinaryVersionedId;
  const isAbsoluteUrl = /^https?:\/\//i.test(id);

  if (isLocalAsset || isAbsoluteUrl) {
    return renderImage(id);
  }

  const cloud = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  if (!cloud) {
    throw new Error("Missing NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME in .env.local");
  }

  const format = "f_auto";
  const quality = q === "auto" ? "q_auto" : `q_${q}`;
  const crop = fit === "contain" ? "c_fit" : "c_fill";
  const width = `w_${Math.round(w)}`;
  const height = h ? `,h_${Math.round(h)}` : "";

  const transforms = `${format},${quality},${crop},${width}${height}`;
  const normalizedId = id.replace(/^\/+/, "");
  const src = `https://res.cloudinary.com/${cloud}/image/upload/${transforms}/${normalizedId}`;

  // Cloudinary already handles image optimization.
  return renderImage(src, true);
}
