import * as Styled from './style';
//import { useState, useEffect } from 'react';
//import { adCardBtn } from '../../constants/adCardBtn';
// import AdDetaildata from './AdDetaildata';
const AdCardItem = ({ data }) => {
  console.log(data);
  // eslint-disable-next-line
  const num = data.startDate.slice(0, 10).replace(/\-/g, '');
  // const [buttons, setbutton] = useState();

  // useEffect(() => {
  //   const buttonArr = Object.keys(adCardBtn);
  //   setbutton(buttonArr);
  // }, [adCardBtn]);

  return (
    <Styled.CardItem>
      <Styled.CardItemTitle>{'웹광고_' + num + '123030'}</Styled.CardItemTitle>
      <Styled.AdDetailItem>
        <p>상태</p>
        <p>{data.status}</p>
      </Styled.AdDetailItem>
      <Styled.AdDetailItem>
        <p>광고 생성일</p>
        <p>{data.startDate.slice(0, 10)}</p>
      </Styled.AdDetailItem>
      <Styled.AdDetailItem>
        <p>일 희망 예산</p>
        <p>{data.budget / 10000 + '만원'}</p>
      </Styled.AdDetailItem>
      <Styled.AdDetailItem>
        <p>광고수익률</p>
        <p>{data.report.roas + '%'}</p>
      </Styled.AdDetailItem>
      <Styled.AdDetailItem>
        <p>매출</p>
        <p>
          {Math.round(data.report.convValue / 10000)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원'}
        </p>
      </Styled.AdDetailItem>
      <Styled.AdDetailItem>
        <p>광고비용</p>
        <p>
          {Math.round(data.report.cost / 10000)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원'}
        </p>
      </Styled.AdDetailItem>
      {/* {!!buttons &&
        buttons.map((el, idx) => (
          <AdDetaildata
            key={idx}
            data={data}
            name={adCardBtn[el].name}
            value={adCardBtn[el].value}
          />
        ))} */}
      {/* <button>수정하기</button> */}
    </Styled.CardItem>
  );
};
export default AdCardItem;
