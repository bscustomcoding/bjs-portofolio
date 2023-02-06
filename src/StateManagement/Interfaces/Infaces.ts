export interface TimeSheetInterface {
    id?: number | null;
    firstName: string;
    lastName: string;
    hours: number;
    min: number;
    workAddress?: {
      postNr: number;
      streetName: string;
      streetNr: number;
    },
    description?: string;
}

export type ChildrenProps = { children: React.ReactNode; }