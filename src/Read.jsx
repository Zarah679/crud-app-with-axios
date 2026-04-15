import { useState, useEffect } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"

const Read = () => {

  const[data, setData] = useState({})

  const { id } = useParams()

  useEffect(() => {
    axios.get('http://localhost:3000/users/' + id)
        .then(res => setData(res.data))
        .catch(err => console.error(err))
  })

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
      <div className='w-50 shadow rounded px-5 pt-3 pb-5 border bg-white'>
        <h2>User Details</h2>
        <div className="mb-2">
          <strong>Name: {data.name}</strong>
        </div>
        <div className="mb-2">
          <strong>Email: {data.email}</strong>
        </div>
        <div className="mb-2">
          <strong>Phone: {data.phone}</strong>
        </div>
        <div className="d-flex justify-content-end gap-2">
          <Link to={`/update/${id}`} className="btn btn-success btn-sm">Update</Link>
          <Link to={'/'} className="btn btn-warning btn-sm">Back</Link>
        </div>
      </div>
    </div>
  )
}

export default Read
