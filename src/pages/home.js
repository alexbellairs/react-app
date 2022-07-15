import Navbar from "../components/navbar";
import blimpImg from "../images/pink-airship.png";

const Home = ({ user, setter }) => {
  return (
    <div>
      <Navbar user={user} setter={setter} />
      <h1>Home Page</h1>
      <h2>Welcome {user}</h2>
      <img className="blimp" src={blimpImg} />
    </div>
  );
};

export default Home;
