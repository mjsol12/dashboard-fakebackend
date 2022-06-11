export interface table {
  type: string;
  width: string| number;
  rowspan?: number;
  name: string;
  title: string;
  value?: number | string | boolean;
}
