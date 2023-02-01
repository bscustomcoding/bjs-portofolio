import { PaletteMode } from "@mui/material";

export {};
declare module '@mui/material/styles' {
  interface Theme {
    mode: PaletteMode;
    customHeader: {
      primary: string;
    };
    customDelete: string;
  }

  export interface ThemeOptions {
    mode?: PaletteMode | undefined;
    customHeader?: {
      primary?: string;
    };
    customDelete?: string;
  }
}