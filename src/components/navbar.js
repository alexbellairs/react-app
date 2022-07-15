import { Navigate } from "react-router-dom";

const Navbar = ({ user, setter }) => {
  return (
    <div>
      {!user && <Navigate to="/" />}
      <button>
        <a href="/home">Home</a>
      </button>
      <button>
        <a href="/feed">Feed</a>
      </button>
      <button>
        <a href="/profile">Profile</a>
      </button>
      {/* <button
        onClick={() => {
          setter();
          localStorage.removeItem("myToken");
        }}
      >
        Log Out
      </button> */}
    </div>
  );
};

export default Navbar;
