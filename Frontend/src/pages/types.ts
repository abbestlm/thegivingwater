import { types } from "pg-promise/typescript/pg-subset";

// src/types.d.ts or src/pages/types.ts (create this file if it doesn't exist)
export interface Partner {
  id: number;
  name: string;
  description: string;
  logo_url: string;
}

export interface Sponsor {
  id: number;
  name: string;
  description: string;
  logo_url: string;
}
export default types;
