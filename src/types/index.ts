import {  ReactElement } from "react";

export type PropertyCategory = "info" | "warning" | "danger";

export type PatientProperty = {
    name: string;
    icon:  ReactElement;
    category: PropertyCategory;
};

export type PrescriptionRowType = {
    id?: number;
    name: string;
    dosage?: string;
    dosageForm: string;
    duration?: string;
    description?: string;
    frequency?: string;
}