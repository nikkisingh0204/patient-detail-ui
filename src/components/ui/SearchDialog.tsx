import React, { useEffect, useState } from "react";
import { IconSearch, IconX, IconVaccineBottle } from "@tabler/icons-react";
interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToPrescription: (item: string) => void;
}

const SearchDialog: React.FC<SearchDialogProps> = ({
  isOpen,
  onClose,
  onAddToPrescription,
}) => {
  const [query, setQuery] = useState("Amoxicillin");
  const [debouncedQuery, setDebouncedQuery] = useState("Amoxicillin");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(handler); 
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-start bg-gray-900/50">
      <div className="bg-white rounded-lg  w-full max-w-4xl shadow-lg ml-8">
        <div className="flex items-center gap-1 border-b border-borderGray p-4 text-[#1C2024]">
          <IconSearch />
          <input
            type="text"
            placeholder="Type medicine name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-2 rounded-md focus:outline-none cursor-text"
            autoFocus
          />
          <button
            onClick={onClose}
            className="text-textSecondary text-sm cursor-pointer"
          >
            <IconX />
          </button>
        </div>
        {debouncedQuery && (
        <div className="w-full">
          <h6 className="text-textSecondary text-xs px-4 py-4">
            Suggested Actions
          </h6>
          <button
            onClick={() => {
              onAddToPrescription(debouncedQuery);
            }}
            className="relative flex items-center gap-2 w-full h-8 bg-[#F7F9FF] mb-3 px-6 py-1 text-[#3A5BC7] cursor-pointer"
          >
            <IconVaccineBottle />
            <span>Add {debouncedQuery} to Prescription</span>
            <h6 className="absolute text-xs text-textSecondary right-0 top-1/2 transform -translate-y-1/2 mr-4">
              Prescription
            </h6>
          </button>
        </div>
        )}
      </div>
    </div>
  );
};

export default SearchDialog;
