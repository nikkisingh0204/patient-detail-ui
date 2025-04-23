"use client";
import { useState } from "react";
import PatientHeader from "@/components/patient/PatientHeader";
import PageHeaderAction from "../components/layout/PageHeaderAction";
import SearchBar from "@/components/ui/SearchBar";
import AccordionContainer from "@/components/ui/AccordionContainer";
import { PrescriptionRowType } from "@/types";
import { SavedChangesProvider } from "@/context/SavedChangesContext";
import DateTabs from "@/components/ui/DateTabs";

export default function Home() {
  const [prescribedMedicine, setprescribedMedicine] = useState<
    PrescriptionRowType[]
  >([]);
  const handleAddToPrescription = (medicine: string) => {
    const defaultValues = {
      dosage: "1-1 tab/day",
      dosageForm: "Intravenous",
      duration: "5 days",
      description: "Confirmed post HbA1c test, further monitoring required",
      frequency: "OD",
    };
    setprescribedMedicine((prev) => [
      ...prev,
      { id: prev.length + 1, name: medicine, ...defaultValues },
    ]);
  };
  return (
    <div className="w-full min-h-screen bg-[#F7F9FF]">
      <main className="w-full mx-auto bg-[#F7F9FF] min-h-screen">
        <SavedChangesProvider>
          <PageHeaderAction />
          <PatientHeader />
          <SearchBar onAddToPrescription={handleAddToPrescription} />
          <DateTabs />
          <AccordionContainer prescribedMedicine={prescribedMedicine} />
        </SavedChangesProvider>
      </main>
    </div>
  );
}
