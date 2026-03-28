export default function CaseCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        absolute bottom-0 right-0 w-full
        box-border overflow-hidden
        flex flex-col justify-between
        select-none cursor-pointer
        before:content-[''] before:absolute before:top-0 before:left-0 before:right-0
        before:z-5 before:border-t-4 before:border-white
      "
    >
      {children}
    </div>
  );
}
