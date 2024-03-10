import Earth from "../components/Earth";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <h1>Welcome to the Landing Page</h1>
      <Earth />
      <Link to="/map">
        <button>Start</button>
      </Link>
    </div>
  );
}
export default Landing;
