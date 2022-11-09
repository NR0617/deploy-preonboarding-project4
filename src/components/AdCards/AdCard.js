import { useSelector } from 'react-redux';
import AdCardItem from './AdCardItem';
import * as Styled from './style';

const AdCard = () => {
  const testList = useSelector(({ testData }) => testData.testList);
  //console.log(testList);
  return (
    <Styled.CardsContainer>
      {testList ? testList.map((el, idx) => <AdCardItem key={idx} data={el} />) : null}
    </Styled.CardsContainer>
  );
};
export default AdCard;
