import { useState } from "react";

function LightSwitch() {
    const [lightSwitch, setLightSwitch] = useState(false);

    function handleSwitchOn(e) {
        e.preventDefault();
        setLightSwitch(true);
    }
    function handleSwitchOff(e) {
        e.preventDefault();
        setLightSwitch(false);
    }
    return (
        <div>
            <p>{lightSwitch ? "The lightswitch is ON" : "The lightswitch is OFF"}</p>
            <button onClick={handleSwitchOn} disabled={lightSwitch}>Turn on light switch</button>
            <button onClick={handleSwitchOff} disabled={!lightSwitch}>Turn off light switch</button>
        </div>
    );
}
export default LightSwitch;