import { ChevronUp, ChevronDown, MoreVertical, Undo2Icon, MoreHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PageHeaderAction() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between mb-6 h-16 p-6 bg-[#FCFCFD] border-b-1 border-b-[#D9D9E0]">
    {/* Left: Actions */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => router.back()}
          className="cursor-pointer flex items-center gap-2 text-sm text-black hover:text-black border-1 px-3 py-2 rounded-md border-[#D9D9E0]"
        >
          <Undo2Icon className="w-4 h-4" />
          <span>Back</span>
        </button>
        <div className="h-9 w-[1px] bg-gray-200"></div>
        <button className="cursor-pointer p-2 hover:bg-gray-200 border-1 px-3 py-2 rounded-md border-[#D9D9E0]">
          <ChevronUp className="w-4 h-5 text-black font-bold" />
        </button>
        <button className="cursor-pointer p-2 hover:bg-gray-200 border-1 px-3 py-2 rounded-md border-[#D9D9E0]">
          <ChevronDown className="w-4 h-5 text-black font-bold" />
        </button>
      </div>
      {/* Right: Actions */}
      <div className="flex items-center gap-3">
        <h6 className="text-[#60646C] text-sm">Changes saved.</h6>
        <button
          onClick={() => router.back()}
          className="cursor-pointer flex items-center gap-1 text-sm text-white border-0 px-4 py-2 rounded-lg border-[#D9D9E0] bg-[#3E63DD]"
        >
          <span className="font-medium">Actions</span>
          <ChevronDown className="w-4 h-5 text-white font-bold" />
        </button>
        <div className="h-9 w-[1px] bg-gray-200"></div>
        <button className=" cursor-pointer p-2 hover:bg-gray-200 border-1 px-3 py-2 rounded-md border-[#D9D9E0]">
          <MoreHorizontal className="w-4 h-5 text-black font-extrabold" />
        </button>
      </div>
    </div>
  );
}
