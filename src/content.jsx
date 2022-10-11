const Content = (items) => {
  const { photographer, src } = items;
  return (
    <div>
      <div className="img-div">
        <img src={src.large} alt="img" />
      </div>
      <div className="cont-div">
        <p>{photographer}</p>
      </div>
    </div>
  );
};

export default Content;
