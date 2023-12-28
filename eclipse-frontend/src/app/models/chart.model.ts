import { ChartTimeSerieModel } from './chart-time-serie.model';

export class ChartModel {
    public title: string;
    public labels: string[];
    public series: ChartTimeSerieModel[];

  constructor(title: string, labels: string[], series: ChartTimeSerieModel[]) {
    this.title = title;
    this.labels = labels;
    this.series = series;
  }
}