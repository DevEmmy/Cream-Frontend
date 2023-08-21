import React from "react";
import { Identification, GlobeAlt } from "heroicons-react";
import liscence from "../../Assets/liscence.png";
import { useState } from "react";

const Advanced_Verf = (props) => {
  let { stage, setStage, scrollToRef, idType, setIdType, position } = props;

  const [selected, setSelected] = useState(false);

  return (
    <>
      <h3>Select ID type</h3>
      <div className="id_info" id="verify">
        <p>Use a valid government-issued photo ID.</p>
      </div>

      <div className="formField">
        <div className="section" id="id_section">
          <div
            className={idType.text === "Passport" ? "id_selected" : "id_type"}
            onClick={() => {
              setIdType({ digit: 0, text: "Passport" });
              setSelected(true);
            }}
          >
            <div>
              <GlobeAlt size="30px" />
            </div>
            <h4>Passport</h4>
          </div>
          <div
            className={idType.text === "Driver's liscence" ? "id_selected" : "id_type"}
            onClick={() => {
              setIdType({ digit: 1, text: "Driver's liscence" });
              setSelected(true);
            }}
          >
            <div className="lsc">
              <img src={liscence} alt="licence" />
            </div>
            <h4>Driver's licence</h4>
          </div>
          <div
            className={idType.text === "Identity card" ? "id_selected" : "id_type"}
            onClick={() => {
              setIdType({ digit: 2, text: "Identity card" });
              setSelected(true);
            }}
          >
            <div>
              <Identification size="30px" />
            </div>
            <h4>Identity card</h4>
          </div>
        </div>
      </div>

      <div
        className={selected ? "enable" : "disable"}
        onClick={() => {
          if (selected) {
            setStage(stage + 1);
            scrollToRef(position);
          }
        }}
      >
        Continue
      </div>
    </>
  );
};

export default Advanced_Verf;
