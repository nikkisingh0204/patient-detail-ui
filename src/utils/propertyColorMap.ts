import type { PropertyCategory } from "@/types";

export const colorMap: Record<PropertyCategory, { text: string; bg: string }> = {
  info: {
    text: "#3A5BC7",
    bg: "#F7F9FF",
  },
  warning: {
    text: "#CC4E00",
    bg: "#FFF7ED",
  },
  danger: {
    text: "#CE2C31",
    bg: "#FFF7F7",
  },
};
