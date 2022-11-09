import * as Styled from './style';
const AdDetaildata = ({ data, name, value }) => {
  return (
    <>
      <Styled.AdDetailItem style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p>{name}</p>
        <p>{data[value] ? data[value] : data.report[value]}</p>
      </Styled.AdDetailItem>
    </>
  );
};
export default AdDetaildata;
