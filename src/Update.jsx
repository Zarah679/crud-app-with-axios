import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import axios from "axios"

const Update = () => {


    const [value, setValue] = useState({
        name: "",
        email: "",
        phone: ""
    })

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
    axios.get('http://localhost:3000/users/' + id)
        .then(res => {
            console.log((res.data))
            setValue(res.data)})
        .catch(err => console.error(err))
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.put('http://localhost:3000/users/' + id,  value)
        .then(res => {
            console.log(res.data)
            navigate('/')
        }).catch(err => console.error(err))
    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-light vh-100'>
      <div className='w-50 bg-white shadow p-5 rounded'>
        <h2>Update User</h2>
        <form onSubmit={handleSubmit}>
            <div className='mb-3 d-flex flex-column'>
                <label htmlFor="name">Name </label>
                <input type="text" name='name' placeholder='Enter your name' className='p-1' 
                 value={value.name} onChange={(e) => setValue({...value, name: e.target.value})}/>
            </div>
            <div className='mb-3 d-flex flex-column'>
                <label htmlFor="name">Email </label>
                <input type="text" name='name' placeholder='Enter your email' className='p-1'
                 value={value.email} onChange={(e) => setValue({...value, email: e.target.value})}/>
            </div>
            <div className='mb-3 d-flex flex-column'>
                <label htmlFor="name">Phone </label>
                <input type="text" name='name' placeholder='Enter your phone' className='p-1' 
                 value={value.phone} onChange={(e) => setValue({...value, phone: e.target.value})}/>
            </div>
            <div className='d-flex justify-content-end'>
                <button className='btn btn-sm btn-success me-2'>Submit</button>
                <Link to={'/'} className='btn btn-sm btn-primary'>Back</Link>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Update
