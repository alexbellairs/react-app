import { Navigate, Link } from "react-router-dom";

const Navbar = ({ user, setter }) => {
  return (
    <div className="navbar">
      {!user && <Navigate to="/" />}
      <button>
        <Link to="/home">Home</Link>
      </button>
      <button>
        <Link to="/feed">Feed</Link>
      </button>
      <button>
        <Link to="/profile">Profile</Link>
      </button>
      <button
        onClick={() => {
          setter("");
          localStorage.removeItem("myToken");
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default Navbar;
