import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
    return (
        <div>
            <Link to="./Signup" className="btn btn-success">
                Add +
            </Link>
        </div>
    )
}

export default Login
