const ProImage = ({ author, url }) => {
  return (
    <div>
      <div className="items-main">
        <img src={url} alt={`random grab from author ${author}`} />
      </div>
    </div>
  );
};

export default ProImage;
