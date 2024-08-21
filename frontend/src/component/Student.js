import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Teacher from "./Teacher";

export const Student = () => {
  const [student, setStudent] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9091/")
      .then((res) => setStudent(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:9090/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-item-center">
      <div className="w-50 bg-white rounded p-3 ">
        <Link to="/create" className="btn btn-success">
          Add +
        </Link>
        <div className="table">
          <table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Email</td>
              </tr>
            </thead>
            <tbody>
              {student.map((data, i) => (
                <tr>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(Teacher.id)}
                      className="btn btn-primary"
                    >
                      Delete
                    </button>
                    <button className="btn btn-danger ms-2">Update</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
