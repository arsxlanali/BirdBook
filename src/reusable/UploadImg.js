import React from "react";
import axios from "axios";
import { useEffect } from "react";
// import { useEffect } from "react";
import { useState } from "react";

const baseURL = "https://bird-book.herokuapp.com";

function UplaodImg() {
  const api_key = "252944217837197";
  const cloud_name = "dpxrvbatm";
  // var [signature, setSignature] = useState(null);
  // var signature;
  useEffect(() => {
    axios.get(`${baseURL}/img/getSignature`).then((response) => {
      // setSignature(response.data);
      console.log("THis is ", response.data);
    });
  }, []);
  return (
    <>
      <h1>Welcome</h1>

      <form id="upload-form">
        <input id="file-field" type="file" />
        <button
          onSubmit={async function(e) {
            e.preventDefault();
            // get signature. In reality you could store this in localstorage or some other cache mechanism, it's good for 1 hour
            // const data = new FormData();
            // data.append("file", document.querySelector("#file-field").files[0]);
            // data.append("api_key", api_key);
            // data.append("signature", signatureResponse.data.signature);
            // data.append("timestamp", signatureResponse.data.timestamp);

            // const cloudinaryResponse = await axios.post(
            //   `https://api.cloudinary.com/v1_1/${cloud_name}/auto/upload`,
            //   data,
            //   {
            //     headers: { "Content-Type": "multipart/form-data" },
            //     onUploadProgress: function(e) {
            //       console.log(e.loaded / e.total);
            //     },
            //   }
            // );
            // console.log(cloudinaryResponse.data);
          }}
        >
          Upload
        </button>
      </form>

      <hr />
    </>
  );
}

export default UplaodImg;
