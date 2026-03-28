import WorkBackgroundSlider from "../components/WorkBackgroundSlider";

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <WorkBackgroundSlider />
      {children}
    </>
  );
}
