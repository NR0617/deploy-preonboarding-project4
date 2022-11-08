import * as Styled from './style';
import { useState, useEffect } from 'react';
import { adCardBtn } from '../../constants/adCardBtn';
import AdDetaildata from './AdDetaildata';
const AdCardItem = ({ data }) => {
  // eslint-disable-next-line
  const num = data.startDate.slice(0, 10).replace(/\-/g, '');
  const [buttons, setbutton] = useState();

  useEffect(() => {
    const buttonArr = Object.keys(adCardBtn);
    setbutton(buttonArr);
  }, [adCardBtn]);

  return (
    <Styled.CardItem>
      <Styled.CardItemTitle>{num + '123030'}</Styled.CardItemTitle>
      {!!buttons &&
        buttons.map((el, idx) => (
          <AdDetaildata
            key={idx}
            data={data}
            name={adCardBtn[el].name}
            value={adCardBtn[el].value}
          />
        ))}
      <button>수정하기</button>
    </Styled.CardItem>
  );
};
export default AdCardItem;
