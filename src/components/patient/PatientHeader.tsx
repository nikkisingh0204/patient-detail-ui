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
            <h1 className="text-[#107D98] font-semibold text-lg bg-[#F2FAFB] py-0.5 px-1 rounded-md">
              CS
            </h1>
            <div className="flex flex-col gap-1">
              <h1 className="text-black font-semibold text-base">
                Chinmay Sule
              </h1>
              <h5 className="text-textSecondary text-xs">100087-000015-2</h5>
            </div>
          </div>
          {/* Right */}
          <div className="flex items-center px-4 gap-6 text-[#1C2024] basis-[33.33%]">
            <div className="flex items-center gap-1 border-x border-borderGray px-4 h-full w-1/2">
              <IconPhone size={15} />
              <span className="text-sm">+91-9096396014</span>
            </div>
            <div className="flex gap-4">
              <span className="text-sm flex items-center gap-1">
                <IconMars size={15} /> Male
              </span>
              <span className="text-sm flex items-center gap-1">
                <IconCake size={15} /> 38Y
              </span>
            </div>
          </div>
        </div>
         {/* Bottom Section: Properties */}
        <div className="flex flex-row flex-wrap gap-2 px-3 py-1">
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
