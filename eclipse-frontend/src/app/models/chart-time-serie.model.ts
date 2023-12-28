export class ChartTimeSerieModel {
    public x: string[];
    public y: number[];
    public color: string;
    public legend: string;

  constructor(x: string[], y: number[], color: string, legend: string) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.legend = legend;
  }
}