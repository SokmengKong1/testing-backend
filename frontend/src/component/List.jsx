import { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import parse from "html-react-parser";
function List() {
    const [data, setData] = useState([])
    // const [student, setStudent] = useState([]);

    // how to call api 1
    // useEffect(() => {
    //     fetch("http://localhost:9090/")
    //         .then(res => res.json())
    //         .then(data => setData(data))
    // })



    //how call api 2 
    useEffect(() => {
        const getAip = async () => {
            try {
                const res = await axios("http://localhost:9090/",)
                setData(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getAip();
    }, [])




    // How to create api from axios 3
    // useEffect(() => {
    //     axios
    //         .get("http://localhost:9090/")
    //         .then((res) => setStudent(res.data))

    //         .catch((err) => console.log(err));
    // }, []);






    const hendleDelete = async (id) => {
        try {
            await axios.delete("http://localhost:9090/delete/" + id);
            window.location.reload()

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <div className='container'>
                <Link to="/create" className="btn btn-success">
                    Add +
                </Link>

                <table className='table'>

                    <thead className=''>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Sex</th>
                        <th scope="col">Major</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </thead>
                    <tbody>
                        {data.map((d, i) => (

                            <tr key={i}>

                                <td>{d.id}</td>
                                <td>{d.name}</td>
                                <td>{d.sex}</td>
                                <td>{d.major}</td>
                                <td>{parse(d.email)}</td>
                                <td>
                                    <td >
                                        <button onClick={() => hendleDelete(d.id)} type="button" className="btn btn-primary">Delete</button>
                                        <button type="button" className="btn btn-danger" ><Link to={`/update/${d.id}`}>Update</Link></button>
                                    </td>
                                </td>
                            </tr>


                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}
export default List



