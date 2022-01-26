import { useState } from "react";
import "./AdDesigner.css";

export function AdDesigner() {
  //array w/2 arguments, var and a method
  //state rerenders the page, without it the functions would return the values but browser wouldnt be updated
  const [flavor, setFlavor] = useState("Chocolate");
  const [colorTheme, setColorTheme] = useState(false);
  const [fontSize, setFontSize] = useState(12);

  function toggleTheme(selection: boolean) {
    setColorTheme(selection);
  }

  function updateFontSize(change: number) {
    setFontSize(change);
  }

  function updateFlavor(flavor: string) {
    setFlavor(flavor);
  }

  const styles = {
    fontSize: fontSize,
  };

  return (
    <div className="parent-cont">
      <h2>Ad Designer</h2>
      <div className={colorTheme ? "light" : "dark"}>
        <p>Vote for</p>
        <p style={styles}>{flavor}</p>
      </div>
      <div className="color-theme-cont">
        <p>Color Theme</p>
        <button onClick={() => toggleTheme(true)} type="button">
          Light
        </button>
        <button onClick={() => toggleTheme(false)} type="button">
          Dark
        </button>
        <p>What to Support</p>
        <button onClick={() => updateFlavor("chocolate")}>Chocolate</button>
        <button onClick={() => updateFlavor("vanilla")}>Vanilla</button>
        <button onClick={() => updateFlavor("strawberry")}>Strawberry</button>

        <p>font size</p>
        <button onClick={() => updateFontSize(fontSize + 1)}>Up</button>
        {fontSize}
        <button onClick={() => updateFontSize(fontSize - 1)}>Down</button>
      </div>
    </div>
  );
}
