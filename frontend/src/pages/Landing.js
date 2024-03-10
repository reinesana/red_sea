import Earth from "../components/Earth";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="landing">
      <p>welcome to Red Sea</p>
      <h3>A safe passage in the endless war</h3>
      <Earth />
      <Link to="/map">
        <button className="landing-btn">Start</button>
      </Link>
    </div>
  );
}
export default Landing;
