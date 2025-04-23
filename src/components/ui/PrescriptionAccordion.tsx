import { useEffect, useState } from "react";
import { IconArrowUpRight } from "@tabler/icons-react";
import { prescriptionData } from "@/data/prescriptionData";
import PrescriptionAddTable from "./PrescriptionAddTable";
import { PrescriptionRowType } from "@/types";
import { useSavedChanges } from "@/context/SavedChangesContext";
import AllergyAlert from "./AllergyAlert";

interface Props {
  prescribedMedicine: PrescriptionRowType[];
}

export default function PrescriptionAccordion({ prescribedMedicine }: Props) {
  const { triggerSavedChanges } = useSavedChanges();
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
    triggerSavedChanges();
  };

  useEffect(() => {
    if (prescribedMedicine.length > 0) {
      prescribedMedicine.forEach((prescription) => {
        addRow({ name: prescription.name });
      });
      triggerSavedChanges();
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
            <th className="p-2 border  border-borderGray border-t-0 w-[11.33%]">
              Frequency
            </th>
            <th className="p-2 border border-borderGray  border-t-0 w-[11.33%]">
              Dose
            </th>
            <th className="p-2 border border-borderGray  border-t-0 w-[11.33%]">
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
              } font-normal cursor-pointer`}
            >
              <td className="py-2 px-4 border border-l-0 border-borderGray">
                <div className="flex items-center justify-between space-x-3 w-full ">
                  <div className="flex items-center space-x-3 w-full">
                    <label className="cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 accent-[#aebff9]"
                      />
                    </label>
                    <div>
                      <div className="text-sm text-[#1C2024]">{row.name}</div>
                      <div className="text-[10px] text-gray-500">
                        {row.dosageForm}
                      </div>
                    </div>
                  </div>

                  <span className="text-black text-xs cursor-pointer ml-auto">
                    {row.name === "Amoxicillin" ? (
                      <AllergyAlert />
                    ) : (
                      <IconArrowUpRight size={16} />
                    )}
                  </span>
                </div>
              </td>
              <td className="py-2 px-3 border border-borderGray">
                <span className="bg-[#F9F9FB] border border-[#B9BBC6] py-1 px-1 rounded-md text-xs">
                  {row.frequency}
                </span>
              </td>
              <td className="h-[48px] py-2 px-3 border border-borderGray">
                {row.dosage}
              </td>
              <td className="py-2 px-3 border border-borderGray">
                {row.duration}
              </td>
              <td className="py-2 px-3 border border-r-0 border-borderGray cursor-pointer">
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
