import { useState, useEffect } from "react";
import { fetchPhotos } from "../utils";
import Image from "../components/image";

const Feed = ({ user }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos(setPhotos);
  }, []);

  return (
    <div>
      <h1>{user}</h1>
      {photos.map((item, i) => {
        return <Image key={i} author={item.author} url={item.download_url} />;
      })}
    </div>
  );
};

export default Feed;
