import {
  ChevronUp,
  ChevronDown,
  Undo2Icon,
  MoreHorizontal,
} from "lucide-react";
import { IconCaretDownFilled } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useSavedChanges } from "@/context/SavedChangesContext";

const IconButton = ({
  icon,
  onClick,
  variant = "default",
}: {
  icon: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "primary";
}) => {
  const baseStyle =
    "cursor-pointer flex items-center gap-1 text-sm px-3 py-2 rounded-md border transition";
  const styles = {
    default: `${baseStyle} text-black hover:bg-gray-200 border-borderGray`,
    primary: `${baseStyle} text-white bg-[#3E63DD] border-0 hover:bg-[#3557c7]`,
  };
  return (
    <button onClick={onClick} className={styles[variant]}>
      {icon}
    </button>
  );
};

export default function PageHeaderAction() {
  const router = useRouter();
  const { showSaved } = useSavedChanges();

  return (
    <div className="flex items-center justify-between mb-6 h-16 p-6 bg-[#FCFCFD] border-b border-borderGray w-full">
      {/* Left side */}
      <div className="flex items-center gap-3">
        <IconButton
          onClick={() => router.back()}
          icon={
            <>
              <Undo2Icon className="w-4 h-4" />
              <span>Back</span>
            </>
          }
        />
        <div className="h-9 w-[1px] bg-gray-200" />
        <IconButton icon={<ChevronUp className="w-4 h-5" />} />
        <IconButton icon={<ChevronDown className="w-4 h-5" />} />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        {showSaved && (
          <span className="text-textSecondary text-sm animate-fadeIn">
            Changes saved.
          </span>
        )}
        <IconButton
          variant="primary"
          icon={
            <>
              <span className="font-medium">Actions</span>
              <IconCaretDownFilled className="w-4 h-5" />
            </>
          }
        />
        <div className="h-9 w-[1px] bg-gray-200" />
        <IconButton icon={<MoreHorizontal className="w-4 h-5" />} />
      </div>
    </div>
  );
}
