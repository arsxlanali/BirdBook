import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../apiUrl";

const token = localStorage.getItem("Token");

const api_key = "252944217837197";
const cloud_name = "dpxrvbatm";

var a;
const UploadAudio = ({ field, audios }) => {
  const [buttonName, setButtonName] = useState("Play");
  const [signature, setSignature] = useState("");
  const data = new FormData();
  const [audio, setAudio] = useState();

  useEffect(() => {
    if (a) {
      a.pause();
      a = null;
      setButtonName("Play");
    }
    if (audio) {
      a = new Audio(audio);
      a.onended = () => {
        setButtonName("Play");
      };
    }
  }, [audio]);
  useEffect(() => {
    axios
      .get(`${baseURL}/img/getSignature`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setSignature(res.data);
        console.log("THis is ", res.data, signature);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const handleClick = () => {
    if (buttonName === "Play") {
      a.play();
      setButtonName("Pause");
    } else {
      a.pause();
      setButtonName("Play");
    }
  };

  const addFile = async (e) => {
    if (e.target.files[0]) {
      setAudio(URL.createObjectURL(e.target.files[0]));
      data.append("file", e.target.files[0]);
      data.append("api_key", api_key);
      data.append("signature", signature.signature);
      data.append("timestamp", signature.timestamp);
      // console.log("this is preview", accepted);

      const axiousUnintecepted = axios.create();
      const cloudinaryResponse = await axiousUnintecepted.post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/auto/upload`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      field(audios, cloudinaryResponse.data.secure_url);
    }
  };

  return (
    <div>
      <button className="mx-2" onClick={handleClick}>
        {buttonName}
      </button>
      <input type="file" onChange={addFile} />
    </div>
  );
};

export default UploadAudio;
