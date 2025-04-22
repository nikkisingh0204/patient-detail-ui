import { useState } from "react";
import {
  IconChevronUp,
  IconChevronDown,
  IconSearch,
  IconPencilMinus,
  IconTrash,
} from "@tabler/icons-react";
import { accordionData } from "@/data/accordionData";
import PrescriptionAccordion from "./PrescriptionAccordion";
import { PrescriptionRowType } from "@/types";

type AccordionItemProps = {
  title: string;
  content: string;
  isActive: boolean;
  onClick: () => void;
  activeSection: string;
  prescribedMedicine: PrescriptionRowType[];
};

const AccordionItem = ({
  title,
  content,
  isActive,
  onClick,
  activeSection,
  prescribedMedicine,
}: AccordionItemProps) => {
  return (
    <div className="px-4 py-2">
      <div
        onClick={onClick}
        className={`h-full cursor-pointer border border-borderGray ${isActive ? 'rounded-t-md rounded-bl-none rounded-br-none' : 'border-borderGray'} rounded-md flex justify-between items-center bg-white`}
      >
        <div className="p-2 border-x border-l-0">
          <span className="text-textSecondary">
            {isActive ? <IconChevronUp /> : <IconChevronDown />}
          </span>
        </div>
        <div className="px-4 py-2 h-full flex-1 flex items-center justify-between bg-[#F9F9FB] overflow-hidden">
          <span className="text-[#1C2024] text-sm font-semibold">{title}</span>

          {isActive ? (
            <span className="flex items-center gap-2 text-textSecondary font-light">
              <IconSearch size={17} />
              <IconPencilMinus size={17} />
              <IconTrash size={17} />
            </span>
          ) : (
            <span className="text-textSecondary text-sm">{content}</span>
          )}
        </div>
      </div>
      {isActive && (
        <div className={`flex flex-col border border-borderGray ${isActive ? ' rounded-b-md rounded-tr-none rounded-tl-none' : 'rounded-md'} justify-center items-center border-t-0`}>
          {activeSection === "Prescriptions" ? (
            <>
              <PrescriptionAccordion prescribedMedicine={prescribedMedicine} />
            </>
          ) : (
            <div className="text-center text-gray-500 mt-4 mb-4">
              No data to show.
            </div>
          )}
        </div>
      )}
    </div>
  );
};
interface AccordionContainerProps {
  prescribedMedicine: PrescriptionRowType[];
}
const AccordionContainer: React.FC<AccordionContainerProps> = ({ prescribedMedicine }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState("");

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
    setActiveSection(accordionData[index].title);
  };

  return (
    <div className="w-[96%] h-96 bg-white border border-borderGray overflow-hidden relative mx-6 rounded-md">
      <div className="overflow-y-auto h-full scroll-smooth py-2 no-scrollbar custom-scroll">
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isActive={index === activeIndex}
            onClick={() => toggleAccordion(index)}
            activeSection={activeSection}
            prescribedMedicine={prescribedMedicine}
          />
        ))}
      </div>
      <div className="h-10 bg-white" />
    </div>
  );
}

export default AccordionContainer;
