import { useState } from "react";

function Watanabe() {
  const [state, setState] = useState(false);
  const toggleState = () => {
    if (state) setState(false);
    else {
      setState(true);
    }
  };

  return (
    <div className="Watanabe">
      <img
        onClick={toggleState}
        src="./public/h2_image2.PNG"
        alt=""
        className={`${state ? "af_Watanabe" : ""}`}
      />
      <img
        onClick={toggleState}
        className={`${state ? "" : "af_Watanabe"}`}
        src="./public/bfaf3.png"
        alt=""
      />
    </div>
  );
}

export default Watanabe;
