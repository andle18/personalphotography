import { WORK } from "../data/work";
import WorkCard from "./WorkCard";

export default function WorkSlider() {
  return (
    <div
      className="
        flex gap-6 overflow-x-auto pb-6
        snap-x snap-mandatory
        [-ms-overflow-style:none] [scrollbar-width:none]
      "
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>

      {WORK.map((item, index) => (
        <div key={item.slug} className="snap-start">
          <WorkCard item={item} index={index} />
        </div>
      ))}
    </div>
  );
}
