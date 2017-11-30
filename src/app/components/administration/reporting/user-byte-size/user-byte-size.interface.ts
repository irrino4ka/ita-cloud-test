
export interface BarChartDataData {
  data: number[];
  label: string;
}

export interface BarChartOptions {
  scaleShowVerticalLines: boolean;
  responsive: true;
  scales: any;
}

export interface SortData {
  byte: number;
  resource: string;
  user: string;
}
