import styled from 'styled-components';
export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const CardItem = styled.div`
  width: 300px;
  height: 420px;
  margin: 10px;
  background-color: white;
  border: 1px solid grey;
  border-radius: 10px;
  padding: 20px;
`;

export const CardItemTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
  color: #3a474e;
  margin: 20px 20px;
`;

export const AdDetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 7px;
  border-bottom: 1px solid lightgrey;
  margin-bottom: 5px;
`;
