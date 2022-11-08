import { adListData } from '../constants/JsonFileList';
import { getData } from '../api/fetchData';

export const AdListData = async () => {
  const result = await getData(adListData);
  return result;
};

export const SortAdList = (arr, condition) => {
  if (condition === 'active') {
    return arr.filter(el => el.status === 'active');
  } else if (condition === 'ended') {
    return arr.filter(el => el.status === 'ended');
  } else {
    return arr;
  }
};

export const ChangeDatatype = obj => {
  console.log(obj);
};
