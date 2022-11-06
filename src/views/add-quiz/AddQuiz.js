import React from "react";
import UplaodImg from "../../reusable/UploadImg";

function AddQuiz() {
  const data = new FormData();
  return (
    <>
      <h1>Welcome</h1>
      <form id="upload-form">
        <UplaodImg data={data} />
      </form>
      <button
        onClick={() => {
          setTimeout(console.log("This is ", data.get("url")), 5000);
        }}
      >
        Helllo
      </button>
    </>
  );
}

export default AddQuiz;
