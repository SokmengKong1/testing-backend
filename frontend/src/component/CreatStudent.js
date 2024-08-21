import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import axios from "axios";
export const CreatStudent = () => {
  const [teacher, setTeacher] = useState({
    name: "",
    sex: "",
    major: "",
    email: "",
  });
  const navigate = useNavigate();
  const handlechange = (e) => {
    setTeacher((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  let myObj = [
    {
      name: teacher.name,
      Male: teacher.email,
      Major: teacher.major,
      Email: teacher.email,
    },
    {
      name: teacher.name,
      Email: teacher.email,
    },
  ];

  const dendleClink = async (e) => {
    // localStorage.setItem = [("name", teacher.name, "Sex", teacher.sex)];

    localStorage.setItem("key", JSON.stringify(myObj));

    console.log(teacher);
    e.preventDefault();
    try {
      await axios.post("http://localhost:9090/create", teacher);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(teacher);

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded">
        <form>
          <h2>Form Add</h2>
          <div className="mb-2">
            <label>Name</label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="form-control"
              onChange={handlechange}
            ></input>
          </div>
          <div className="mb-2">
            <label>Gender</label>
            <input
              name="sex"
              type="text"
              placeholder="Gender"
              className="form-control"
              onChange={handlechange}
            ></input>
          </div>
          <div className="mb-2">
            <label>Name</label>
            <input
              name="major"
              type="text"
              placeholder="Major"
              className="form-control"
              onChange={handlechange}
            ></input>
          </div>
          <div className="mb-2">
            <label>Email</label>
            {/* <CKEditor
              editor={ClassicEditor}
              data={teacher?.email}
              onChange={(event, editor) => {
                const data = editor.getData();
                setTeacher((prev) => {
                  return { ...prev, email: data };
                });
                setTeacher(data);
              }}
            /> */}

            <CKEditor
              editor={ClassicEditor}
              data={teacher?.email}
              onReady={(editor) => {
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();

                setTeacher((prev) => {
                  return { ...prev, email: data };
                });
              }}
              onBlur={(event, editor) => {
                console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                console.log("Focus.", editor);
              }}
            />
          </div>
          <button onClick={dendleClink} className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
