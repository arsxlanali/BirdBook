import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const baseURL = "https://bird-book.herokuapp.com";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZXMiOlsyMDAxLDUxNTBdfSwiaWF0IjoxNjY3Njc3MzY3LCJleHAiOjE2Njc2NzkzNjd9.BObfMYeAt1Xw6WFLM-8JQ9sAWZjfLmOhJldv5GGZYAk";

function UplaodImg({ data }) {
  const api_key = "252944217837197";
  const cloud_name = "dpxrvbatm";
  // const [count, setCount] = useState(null);
  // const [signature, setSignature] = useState(null);
  const [signature, setSignature] = useState("");
  // var signature;
  useEffect(() => {
    // setSignature("fsdfdsf");
    axios
      .get(`${baseURL}/img/getSignature`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        // console.log("helel");
        setSignature(res.data);
        console.log("THis is ", res.data, signature);
      })
      .catch((err) => {
        console.error(err);
      });
    // console.log(signature);
  }, []);
  return (
    <>
      <input id="file-field" type="file" />
      <button
        onClick={async function(e) {
          e.preventDefault();

          data.append("file", document.querySelector("#file-field").files[0]);
          data.append("api_key", api_key);
          data.append("signature", signature.signature);
          data.append("timestamp", signature.timestamp);
          console.log("THis is ", data);
          const cloudinaryResponse = await axios.post(
            `https://api.cloudinary.com/v1_1/${cloud_name}/auto/upload`,
            data,
            {
              headers: { "Content-Type": "multipart/form-data" },
              onUploadProgress: function(e) {
                console.log(e.loaded / e.total);
              },
            }
          );
          data.append("url", cloudinaryResponse.data.secure_url);
          // console.log("this is data", data.values());
          // console.log(cloudinaryResponse.data.secure_url);
        }}
      >
        Upload
      </button>
      <hr />
    </>
  );
}

export default UplaodImg;
