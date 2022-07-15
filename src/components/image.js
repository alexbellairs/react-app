const Image = ({ author, url }) => {
  return (
    <div>
      <h2>{author}</h2>
      <img
        className="img"
        src={url}
        alt={`random grab from author ${author}`}
      />
    </div>
  );
};

export default Image;
