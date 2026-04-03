export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const cloudinaryCloudName =
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "dustgzbyd";

export const socialPreviewId =
  process.env.NEXT_PUBLIC_SOCIAL_PREVIEW_ID ||
  "v1773436068/DSC00297_ugmqfs.jpg";

export const socialPreviewImage = `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/f_auto,q_auto,c_fill,w_1200,h_630/${socialPreviewId.replace(/^\/+/, "")}`;

export const siteDescription =
  "Photography portfolio featuring travel, street, motorsport, and wildlife work by Andres Gomes.";
