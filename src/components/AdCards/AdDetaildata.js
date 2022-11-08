const AdDetaildata = ({ data, name, value }) => {
  console.log(data[value], typeof data[value]);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p>{name}</p>
        <p>{data[value] ? data[value] : data.report[value]}</p>
      </div>
    </>
  );
};
export default AdDetaildata;
