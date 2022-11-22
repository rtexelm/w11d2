import dayImage from "./images/greenhouse-day.jpg";
import nightImage from "./images/greenhouse-night.jpg";
import "./Greenhouse.css";
import { useTheme } from "../../context/ThemeContext.js";

import LightSwitch from "./LightSwitch";
import ClimateStats from "./ClimateStats";

function Greenhouse() {
  const { themeName, setThemeName } = useTheme();

  let themeImage = themeName === "day" ? dayImage : nightImage;

  return (
    <section>
      <img className="greenhouse-img" src={themeImage} alt="greenhouse" />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
