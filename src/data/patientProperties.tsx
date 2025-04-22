import React from "react"; 
import { PatientProperty } from "@/types";
import {IconVaccineBottle,IconBrandPeanut,IconMan,IconSmoking,IconGlassFullFilled} from "@tabler/icons-react";

export const patientProperties: PatientProperty[] = [
  { name: "Sulfa Drug Allergy", icon: <IconVaccineBottle size={16} />, category: "info" },
  { name: "Statin Muscle Pain", icon: <IconMan size={16} />, category: "info" },
  { name: "Peanut Allergy", icon: <IconBrandPeanut size={16} />, category: "warning" },
  { name: "Penicillin Allergy", icon: <IconVaccineBottle size={16} />, category: "warning" },
  { name: "Smoker", icon: <IconSmoking size={16} />, category: "danger" },
  { name: "Alcohol Use", icon: <IconGlassFullFilled size={16} />, category: "danger" },
];

  