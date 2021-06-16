import React from "react";
import './app.sass';
import CustomSelect from "../custom-select/custom-select";
import {mockOptions} from "../../mock-variables/mock-options";

const App = () => {
  return (
    <div className="wrapper">
        <CustomSelect
            onChange={(value) => console.log("onChange", value)}
            onBlur={(value) => console.log("onBlur")}
            // value={"color2"}
            // defaultValue={"color3"}
            // disabled={true}
            onFocus={(value) => console.log("onFocus")}
            options={mockOptions}/>
    </div>
  );
}

export default App;
