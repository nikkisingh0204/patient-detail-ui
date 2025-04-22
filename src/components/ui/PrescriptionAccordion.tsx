import { useEffect, useState } from "react";
import { IconArrowUpRight, IconExclamationCircle, IconX } from "@tabler/icons-react";
import { prescriptionData } from "@/data/prescriptionData";
import PrescriptionAddTable from "./PrescriptionAddTable";
import { PrescriptionRowType } from "@/types";

interface Props {
  prescribedMedicine: PrescriptionRowType[];
}

export default function PrescriptionAccordion({ prescribedMedicine }: Props) {
  const defaultValues = {
    dosageForm: "Intravenous",
    dosage: "1-1 tab/day",
    duration: "5 days",
    description: "Confirmed post HbA1c test, further monitoring required",
    frequency: "OD",
  };
  const [rows, setRows] = useState<PrescriptionRowType[]>(prescriptionData);
  const addRow = (newRowData: Pick<PrescriptionRowType, "name">) => {
    setRows([
      ...rows,
      { id: rows.length + 1, ...defaultValues, ...newRowData },
    ]);
  };

  useEffect(() => {
    if (prescribedMedicine.length > 0) {
      prescribedMedicine.forEach((prescription) => {
        addRow({ name: prescription.name }); // Add each prescription to the table
      });
    }
  }, [prescribedMedicine]);

  return (
    <>
      <table className="w-full table-fixed border-collapse">
        <thead className="">
          <tr className="bg-white text-left text-xs text-textSecondary">
            <th className="p-2 border border-borderGray border-t-0 border-l-0 w-[30%]">
              Medication Name
            </th>
            <th className="p-2 border  border-borderGray border-t-0 w-[13.33%]">
              Frequency
            </th>
            <th className="p-2 border border-borderGray  border-t-0 w-[13.33%]">
              Dose
            </th>
            <th className="p-2 border border-borderGray  border-t-0 w-[13.33%]">
              Duration
            </th>
            <th className="p-2 border border-borderGray  border-t-0 border-r-0 w-[30%]">
              Remarks
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.id}
              className={`text-sm text-[#1C2024] ${
                row.name === "Amoxicillin"
                  ? "hover:bg-[#FFF7F7]"
                  : "hover:bg-[#F7F9FF]"
              } font-normal`}
            >
              <td className="py-2 px-4 border border-l-0 border-borderGray">
                <label className="flex items-center justify-between space-x-3 w-full">
                  <div className="flex items-center space-x-3 w-full">
                    <input type="checkbox" className="w-4 h-4 text-[#B9BBC6]" />
                    <div>
                      <div className="text-sm text-[#1C2024]">{row.name}</div>
                      <div className="text-[10px] text-gray-500">
                        {row.dosageForm}
                      </div>
                    </div>
                  </div>
                  <span className="text-black text-xs cursor-pointer ml-auto">
                    {row.name === "Amoxicillin" ? (
                      <div className="relative group">
                        <div className="flex items-center whitespace-nowrap bg-[#E5484D] text-white text-[12px] px-5 py-2 rounded-md space-x-2">
                          <IconExclamationCircle size={18} />{" "}
                          <span>Allergy Alert</span>
                        </div>
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex flex-col items-center z-10">
                          <div className="bg-white text-black text-xs px-4 py-3 border border-borderGray  rounded-md shadow-md w-82">
                            <div className="flex justify-between items-start">
                                <h2 className="text-red-600 font-semibold text-md">
                                  Allergy Alert
                                </h2>
                                <IconX size={13} />
                              </div>
                              <p className="text-xs text-textSecondary mt-2">
                                The patient is allergic to Penicillin-based
                                medications, including Amoxicillin. Prescribing
                                this medication may cause a severe allergic
                                reaction.
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
                      </div>
                    ) : (
                      <IconArrowUpRight size={16} />
                    )}
                  </span>
                </label>
              </td>
              <td className="p-2 border border-borderGray">
                <span className="bg-[#F9F9FB] border border-[#B9BBC6] py-1 px-1 rounded-md text-xs">
                  {row.frequency}
                </span>
              </td>
              <td className="p-2 border border-borderGray">{row.dosage}</td>
              <td className="p-2 border border-borderGray">{row.duration}</td>
              <td className="p-2 border border-r-0 border-borderGray cursor-pointer">
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <PrescriptionAddTable addRow={addRow} />
    </>
  );
}
