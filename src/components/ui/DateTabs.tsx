import { IconCalendarWeek } from "@tabler/icons-react";
import { useState } from "react";

export default function DateTabs() {
  const dates = [
    "11th Jan, 2025",
    "3rd Jan, 2025",
    "28th Dec, 2024",
    "1st Oct, 2024",
  ];

  const [selectedDate, setSelectedDate] = useState(dates[0]);

  return (
    <div className="flex items-center justify-between mx-6 px-2">
      <div className="flex items-center justify-center space-x-4">
        {dates.map((date) => (
          <button
            key={date}
            onClick={() => setSelectedDate(date)}
            className={`flex items-center justify-center px-3 py-2 text-sm font-medium rounded-t-md transition duration-200 border border-borderGray border-b-0 rounded-br-0 rounded-bl-0
              ${
                selectedDate === date
                  ? "bg-[#F4FAFF] text-[#3A5BC7] gap-1"
                  : "text-[#1C2024] gap-1"
              }`}
          >
            <span
              className={`w-3 h-3  rounded-full flex items-center justify-center mr-1 ${
                selectedDate === date ? "bg-[#3A5bc7]" : null
              }`}
            >
              {selectedDate === date && (
                <span className="w-1 h-1 bg-white rounded-full "></span>
              )}
            </span>
            <span>{date}</span>
          </button>
        ))}
      </div>
      <IconCalendarWeek size={18} className="text-black" />
    </div>
  );
}
