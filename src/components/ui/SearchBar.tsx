import { useEffect, useState } from "react";
import { IconSearch } from "@tabler/icons-react";
import SearchDialog from "./SearchDialog";

const searchCategories = [
  "Search Medicines Eg. Antihypertensives",
  "Search Vitals Eg. Temperature",
  "Search Investigation Eg. ECG",
  "Search Diagnosis Eg. Hypertension",
];
interface SearchBarProps {
    onAddToPrescription: (med: string) => void;
  }

export default function SearchBar({ onAddToPrescription }: SearchBarProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % searchCategories.length);
    }, 2000);

    return () => clearInterval(timer); 
  }, []);

  const [prefix, italicPart] = searchCategories[index].split("Eg.");


  return (
    <div className="w-full">
      {/* Search bar that triggers dialog */}
      <div
        className="relative flex gap-3 border border-[#CDCED6] bg-white p-2 rounded-md w-full max-w-md cursor-pointer m-6 text-textSecondary"
        onClick={() => setIsDialogOpen(true)}
      >
        <IconSearch />
        <span className="font-light text-md transition-all duration-300">
          {prefix}
          <span className="italic">Eg.{italicPart}</span>
        </span>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-md text-textSecondary  px-1.5 py-0.5 rounded">
          <span className="font-mono">⌘</span>/
        </div>
      </div>

      {/* Dialog Component */}
      <SearchDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onAddToPrescription={(medicine) => {
            onAddToPrescription(medicine);
            setIsDialogOpen(false);
        }}
      />
    </div>
  );
}
