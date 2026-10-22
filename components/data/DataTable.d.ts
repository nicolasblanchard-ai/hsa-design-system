import * as React from "react";

/** Borderless-inside table: uppercase header band, hairline row rules, no zebra. */
export interface DataTableProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Header labels; the first column is the wide label column. */
  columns: React.ReactNode[];
  /** Row cells in column order. */
  rows: React.ReactNode[][];
}

export declare function DataTable(props: DataTableProps): JSX.Element;
