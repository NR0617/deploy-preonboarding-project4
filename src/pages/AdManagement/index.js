import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTestList } from '../../reducer/Slice/AdSearchSlicer';
import { AdListData, SortAdList } from '../../utils/AdlistData';
import AdCard from '../../components/AdCards/AdCard';
import { AdmanagementPage, Select } from './style';

const Admanagement = () => {
  const dispatch = useDispatch();
  const [condition, setCondition] = useState('default');
  useEffect(() => {
    AdListData()
      .then(res => {
        return SortAdList(res.ads, condition);
      })
      .then(res => dispatch(setTestList(res)));
  }, [condition]);

  const getStatusValue = event => {
    setCondition(event.target.value);
  };

  return (
    <AdmanagementPage>
      <div>광고관리</div>
      <Select onChange={getStatusValue}>
        <option value="default">전체 광고</option>
        <option value="active">진행중</option>
        <option value="ended">종료</option>
      </Select>
      <AdCard />
    </AdmanagementPage>
  );
};
export default Admanagement;
