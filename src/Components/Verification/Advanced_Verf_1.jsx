import React, { useState, useEffect, useCallback } from "react";
import {
  UploadOutline,
  ShieldCheckOutline,
} from "heroicons-react";
import frontpage from "../../Assets/frontpage.png";
import backpage from "../../Assets/backpage.png";
import FileBase64 from "react-file-base64";

const Advanced_Verf_1 = (props) => {
  let {
    stage,
    setStage,
    scrollToRef,
    idType,
    frontImage,
    setFrontImage,
    backImage,
    setBackImage,
    position,
  } = props;

  const [loaded, setLoaded] = useState(false);
  const [valid, setValid] = useState(false);

  const setCallBack = useCallback(()=>{
    setFrontImage(frontImage);
    setBackImage(backImage);    
    if (frontImage.length !== 0 && backImage.length !== 0) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [ frontImage, backImage, setFrontImage, setBackImage])

  useEffect(() => {
    setCallBack()
  }, [setCallBack]);

  const Load = (base64, type) => {
    if (type === "front") {
      setFrontImage(base64);
    } else if (type === "back") {
      setBackImage(base64);
    }
    setLoaded(!loaded);
  };

  return (
    <>
      <h4>Advanced Verification</h4>
      <div className="id_info" id="verify">
        <p>Use a valid government-issued photo ID.</p>
      </div>

      <div className="formField">
        <div className="section" id="id_section_veri">
          <div className="details" id="veri_details">
            <div className="title">
              <div className="tag">1</div>
            </div>
          </div>
          <hr />
          <div className="details" id="veri_details">
            <div className="title">
              <div className="tag" id="tag">
                2
              </div>
            </div>
          </div>
          <hr />
          <div className="details" id="veri_details">
            <div className="title">
              <div className="tag" id="tag">
                3
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="formField">
        <h5>Upload {idType.text}</h5>
        <div className="upload">
          <div className="uploading">
            <div className="pages">
              <img
                src={frontImage.length !== 0 ? frontImage.base64 : frontpage}
                alt="frontpage"
              />
            </div>
            <div className="uploadType">
              <h5>Upload front page</h5>
              <div className="load">
                <UploadOutline size="25px" />
                <h5>Upload as image</h5>
                <div className="file">
                  <FileBase64
                    name="images"
                    defaultValue={frontImage}
                    multiple={false}
                    onDone={(base64) => {
                      Load(base64, "front");
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <hr style={{ color: "gray", width: "100%" }} />
          <div className="uploading">
            <div className="pages">
              <img
                src={backImage.length !== 0 ? backImage.base64 : backpage}
                alt="backpage"
              />
            </div>
            <div className="uploadType">
              <h5>Upload back page</h5>
              <div className="load">
                <UploadOutline size="25px" />
                <h5>Upload as image</h5>
                <div className="file">
                  <FileBase64
                    name="images"
                    defaultValue={backImage}
                    multiple={false}
                    onDone={(base64) => {
                      Load(base64, "back");
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <p>Upload .jpg, .jpeg, or png file and not exceeding 5mb</p>
        </div>
      </div>

      <div
        className={valid ? "enable" : "disable"}
        id="button"
        onClick={() => {
          if (!valid) {
            setStage(stage + 1);
            scrollToRef(position);
          }
        }}
      >
        Continue
      </div>
      <div className="id-v">
        <ShieldCheckOutline />
        <p>
          This information is used for identity verification only, and will be
          kept safe by KDE
        </p>
      </div>
    </>
  );
};

export default Advanced_Verf_1;
