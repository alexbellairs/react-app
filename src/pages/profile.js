import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import ProImage from "../components/proImage";
import { updateFetch, deleteFetch } from "../utils";
import { fetchPhotos2 } from "../utils";

const Profile = ({ user, setter }) => {
  const [photos, setPhotos] = useState([]);
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    fetchPhotos2(setPhotos);
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    const updateObj = { username, email, password };
    for (const key in updateObj) {
      if (!updateObj[key]) {
        delete updateObj[key];
      }
    }
    await updateFetch({ username: user }, updateObj, setter);
  };

  return (
    <div>
      <Navbar user={user} setter={setter} />
      <h1>{user}Profile</h1>
      <div className="main">
        {photos.map((item, i) => {
          return <ProImage key={i} url={item.download_url} />;
        })}
      </div>
      <form onSubmit={submitHandler}>
        <h2>Update Profile</h2>
        <input
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button type="submit">Update</button>
      </form>
      <button onClick={() => deleteFetch(setter)}>Delete Account</button>
    </div>
  );
};

export default Profile;
