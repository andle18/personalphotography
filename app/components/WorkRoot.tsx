export default function WorkRoot({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{
        // Preserve themed scrollbar colors for work views.
        ["--scrollbar-track-color" as never]: "#2B292C",
        ["--scrollbar-thumb-color" as never]: "#fff",
      }}
    >
      {children}
    </div>
  );
}
