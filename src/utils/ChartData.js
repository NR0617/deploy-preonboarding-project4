import { trendData } from '../constants/JsonFileList';
import { getData } from '../api/fetchData';

export const ChartData = async () => {
  const result = await getData(trendData);
  return result.report.daily;
};
