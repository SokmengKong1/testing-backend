import React, { useState, } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
export const Update = () => {
    const [teacher, setTeacher] = useState({
        name: "",
        sex: "",
        major: "",
        email: "",
    });
    const navigate = useNavigate()
    const location = useLocation()
    const teacherId = location.pathname.split("/")[2]

    const handlechange = (e) => {
        setTeacher((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const dendleClink = async (e) => {
        e.preventDefault();
        try {
            await axios.put("http://localhost:9090/update/" + teacherId, teacher);
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
                    <h2>Form Update</h2>
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
                        <input
                            name="email"
                            type="email"
                            placeholder="email"
                            className="form-control"
                            onChange={handlechange}
                        ></input>
                    </div>
                    <button onClick={dendleClink} className="btn btn-success">
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};
