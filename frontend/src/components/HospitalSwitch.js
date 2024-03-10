import { useState } from "react";
import Switch from "react-switch";

const HospitalSwitch = () => {
    const [checked, setChecked] = useState(false);
    const handleChange = nextChecked => {
      setChecked(nextChecked);
    };
  
    return (
      <div className="example">
        <label>
          <Switch
            onChange={handleChange}
            checked={checked}
            className="react-switch"
          />
        </label>
      </div>
    );
  };

  export default HospitalSwitch;