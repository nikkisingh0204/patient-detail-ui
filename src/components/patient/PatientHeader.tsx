"use client";
import { IconPhone, IconMars, IconCake } from "@tabler/icons-react";
import PropertyCard from "./PatientPropertyCard";
import { patientProperties } from "@/data/patientProperties";

export default function PatientHeader() {
  return (
    <div className="w-full">
      <main className="w-max-full h-[128px] mx-6 bg-[#FFFFFF] border border-borderGray rounded-md flex flex-col">
        <div className="flex w-full h-3/4 border-b border-borderGray">
          {/* Left */}
          <div className="flex-1 px-4 flex items-center gap-4">
            <h1 className="flex items-center justify-center text-[#107D98] font-semibold text-lg bg-[#F2FAFB]  h-[48px] w-[48px] rounded-md">
              CS
            </h1>
            <div className="flex flex-col gap-1">
              <h1 className="text-black font-semibold text-xl">Chinmay Sule</h1>
              <h5 className="text-textSecondary text-xs">100087-000015-2</h5>
            </div>
          </div>
          {/* Right */}
          <div className="flex items-center px-4 gap-6 text-[#1C2024] basis-[33.33%]">
            <div className="flex items-center gap-1 border-x border-borderGray px-4 h-full w-1/2">
              <IconPhone size={16} />
              <span className="text-mono">+91-9096396014</span>
            </div>
            <div className="flex gap-6">
              <span className="text-mono flex items-center gap-1">
                <IconMars size={16} /> Male
              </span>
              <span className="text-mono flex items-center gap-1">
                <IconCake size={16} /> 38Y
              </span>
            </div>
          </div>
        </div>
        {/* Bottom Section: Properties */}
        <div className="flex flex-row flex-wrap gap-2 px-3 py-2">
          {patientProperties.map((prop, index) => (
            <PropertyCard
              key={index}
              name={prop.name}
              category={prop.category}
              icon={prop.icon}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
