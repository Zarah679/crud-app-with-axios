import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {

    const[data, setData] = useState([])

    const { id } = useParams()

    useEffect(() => {
        axios.get('http://localhost:3000/users')
        .then(res => 
            setData(res.data))
        .catch(err => console.error(err))
    },[])

    function handleDelete(id) {
        const confirm = window.confirm("Would you like to remove this user?")
        if(confirm) {
            axios.delete('http://localhost:3000/users/' + id)
            .then(res => {
                location.reload()
            })
            .catch(err => console.error(err))
        }
    }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light '>
        <h1>
            List of Users
        </h1>
        <div className='w-75 d-flex flex-column bg-white rounded shadow border p-4'>
            <div className='align-self-end'>
                <Link to={'/create'} className='btn btn-success btn-sm'>Add +</Link>
            </div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td className='d-flex gap-2'>
                                <Link to={`/read/${item.id}`}  className='btn btn-info btn-sm'>Read</Link>
                                <Link to={`/update/${item.id}`} className='btn btn-primary btn-sm'>Edit</Link>
                                <button onClick={ e => handleDelete(item.id)} className='btn btn-danger btn-sm'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Home
