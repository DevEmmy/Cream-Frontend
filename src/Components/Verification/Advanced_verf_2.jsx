import React, { useState, useEffect, useCallback } from "react";
import { CameraOutline, UploadOutline } from "heroicons-react";
import Profile from "../../Assets/photo.png";
import FileBase64 from "react-file-base64";

const Advanced_Verf_2 = (props) => {
  let { stage, setStage, scrollToRef, photo, setPhoto, position } = props;

  const [valid, setValid] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const setCallBack = useCallback(() => {
    setPhoto(photo);
    if (photo.length !== 0) {
      setValid(true);
    }
  }, [photo, setPhoto]);

  useEffect(() => {
    setCallBack();
  }, [setCallBack]);

  const Load = (base64, type) => {
    if (type === "photo") {
      setPhoto(base64);
    }
    setLoaded(!loaded);
  };

  return (
    <>
      <h4>Advanced Verification</h4>
      <div className="id_info" id="verify">
        <p>Portrait photo submission</p>
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
              <div className="tag">2</div>
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
        <h5>Upload portrait photo Example...</h5>
        <div className="upload">
          <div className="uploading">
            <div className="pages" id="profile">
              <img
                src={photo.length !== 0 ? photo.base64 : Profile}
                alt="frontpage"
              />
            </div>
            <div className="uploadType">
              <div className="load">
                <UploadOutline />
                <h5>Upload as image</h5>
                <div className="file">
                  <FileBase64
                    name="images"
                    defaultValue={photo}
                    multiple={false}
                    onDone={(base64) => {
                      Load(base64, "photo");
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={valid ? "enable" : "disable"}
        id="button"
        onClick={() => {
          if (!valid === true) {
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

export default Advanced_Verf_2;
