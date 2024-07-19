import React, { useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]) ;
  };

  const handleTextChange = (e) => {
    setText(e.target.value) ;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const formData = new FormData() ;
    formData.append("file", file) ;
    formData.append("text", text) ;

    try {
      const ele = document.getElementById("result");
      if (ele) {
        ele.innerHTML = "Analyzing..." ;
      }
      const response = await axios.post(
        "http://localhost:5001/analyze",
        formData
      );

      if (ele) {
        const formattedResult = response.data.result.replace(/\n/g, "<br>");
        ele.innerHTML = formattedResult;
      }
    } catch (error) {
      console.log(error.response.data.error) ;
      if (error.response.data.error.trim() === "wrong language") {
        const ele = document.getElementById("result") ;
        if (ele) {
          ele.innerHTML = "<p style='color:red'>Wrong Language, please enter correct language</p>";
        }
      }
      console.error(error);
    }
  };


  return (
    <div
      className="App"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "#D5DBDB",
      }}
    >
      <div
        className="App"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: "90vh",
          width: "90vw",
          backgroundColor: "#c1c8c8",
          border: "0px",
          borderRadius: "16px",
          margin: "2rem 0",
          boxShadow: "0px 0px 30px -1px #839192",
        }}
      >
        <h1
          style={{
            color: "#424949",
            fontFamily: "monospace",
            fontSize: "30px",
          }}
        >
          Image-Text Extracter
        </h1>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="chat">
            <p
              id="result"
              style={{
                fontSize: "1rem",
                fontFamily: "sans-serif",
                color: "#424949",
                margin: "0rem 3rem",
                lineHeight: "1.8rem",
                minHeight: "60vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></p>
          </div>
          <form
            onSubmit={handleSubmit}
            style={{
              height: "50px",
              width: "90%",
              margin: "2rem 0",
              border: "0px",
              borderRadius: "16px",
              padding: "0px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "0px 0px 10px -1px #839192",
              backgroundColor: "#D5DBDB",
            }}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              required
              style={{
                width: "30%",
                fontFamily: "sans-serif",
                // cursor: "pointer",
              }}
            />
            <input
              type="text"
              value={text}
              onChange={handleTextChange}
              placeholder="Enter Language of text in image"
              required
              style={{
                border: "0px",
                width: "50%",
                height: "40px",
                padding: "0px 10px",
                fontSize: "16px",
                backgroundColor: "#D5DBDB",
                fontFamily: "monospace",
                outline: "none",
              }}
            />
            <button
              type="submit"
              id="submitBtn"
              style={{
                border: "0px",
                width: "35px",
                height: "35px",
                backgroundColor: "#839192",
                borderRadius: "100%",
                color: "white",
                cursor: "pointer",
                fontSize: "20px",
              }}
              onMouseOver={() => {
                document.getElementById("submitBtn").style.backgroundColor =
                  "#9ba7a7";
              }}
              onMouseOut={() => {
                document.getElementById("submitBtn").style.backgroundColor =
                  "#839192";
              }}
            >
              &uarr;
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
