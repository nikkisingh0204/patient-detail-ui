import { colorMap } from "@/utils/propertyColorMap";
import type { PatientProperty } from "@/types";

type Props = PatientProperty;

export default function PropertyCard({ name, category,icon }: Props) {
  const { text, bg } = colorMap[category];

  return (
    <div
      className="inline-flex items-center w-fit rounded-3xl border-0 px-3 py-2"
      style={{ backgroundColor: bg, color: text }}
    >
      <div className="flex items-center gap-2 text-[14px] font-medium">{icon}{name}</div>
    </div>
  );
}

  