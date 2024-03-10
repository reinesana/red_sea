import Earth from "../components/Earth";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="landing">
      <Earth />
      <div className="welcome">
        <p>welcome to Red Sea</p>
        <h3>A safe passage in the endless war</h3>
      </div>
      <input
        type="text"
        placeholder="Enter your location"
        className="landing-input"
      />
      <Link to="/map">
        <button className="landing-btn">Start</button>
      </Link>
    </div>
  );
}
export default Landing;
