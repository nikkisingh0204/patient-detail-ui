import { useState } from "react";
import { IconExclamationCircle, IconX } from "@tabler/icons-react";

export default function AllergyAlert() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex items-center whitespace-nowrap bg-[#E5484D] text-white text-[12px] px-3 py-1.5 rounded-md space-x-2 cursor-pointer">
        <IconExclamationCircle size={18} />
        <span>Allergy Alert</span>
      </div>

      {isOpen && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 flex flex-col items-center z-10">
          <div
            className="bg-white text-black text-xs px-4 py-4 border border-borderGray rounded-md shadow-md w-82"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <div className="flex justify-between items-start">
              <h2 className="text-red-600 font-semibold text-md">
                Allergy Alert
              </h2>
              <button className="cursor-pointer" onClick={() => setIsOpen(false)}>
                <IconX size={13} />
              </button>
            </div>
            <p className="text-xs text-textSecondary mt-2">
              The patient is allergic to Penicillin-based medications, including
              Amoxicillin. Prescribing this medication may cause a severe
              allergic reaction.
            </p>
            <div className="mt-4 flex justify-end gap-2">
              <button className="px-3 py-2 rounded-lg border border-[#CDCED6] text-[#1C2024] hover:bg-gray-100 cursor-pointer">
                Override Warning
              </button>
              <button className="px-3 py-2 rounded-lg bg-[#3E63DD] text-white hover:bg-blue-700 cursor-pointer">
                View Alternatives
              </button>
            </div>
          </div>
          <div className="w-2 h-2 bg-white rotate-45 -mt-1"></div>
        </div>
      )}
    </div>
  );
}
