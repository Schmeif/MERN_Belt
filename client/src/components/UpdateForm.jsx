import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'

const UpdateForm = () => {

    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')
    const [skill1, setSkill1] = useState('')
    const [skill2, setSkill2] = useState('')
    const [skill3, setSkill3] = useState('')

    const {id} = useParams()
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const [pet, setPet] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/getOnePet/${id}`,)
        .then((res)=>{
            console.log(res)
            setName(res.data.name)
            setType(res.data.type)
            setDescription(res.data.description)
            setSkill1(res.data.skill1)
            setSkill2(res.data.skill2)
            setSkill3(res.data.skill3)
            setPet(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }, [id])

    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/updatePet/${id}`, {
            name,
            type,
            description,
            skill1,
            skill2,
            skill3
        })
        .then((res)=>{
            console.log(res)
            navigate('/')
        }).catch((err)=>{
            console.log(err)
            console.log("error is caught in front end")
            setErrors(err.response.data.errors)
        })
    }

    return (
        <div className='col-6 mx-auto'>
        <div className='col mx-auto d-flex flex-row'>
        <h1>Edit:        {pet.name}</h1>
        <h5 className=' ms-5 mt-2'>
        </h5>
        </div>
    <form onSubmit={submitHandler}>
    <div className='forms'>
        <div className='formLeft'>
            <div className='form-group m-2'>
                <label className='form-label'>Pet Name:</label>
                <input className='form-control mt-2' value={name} type="text" onChange={(e)=>setName(e.target.value)}/>
                {errors.name && <span className='text-danger m-3'>{errors.name.message}</span> }<br></br>
            </div>
            <div className='form-group m-2'>
                <label className='form-label'>Pet Type:</label>
                <input className='form-control mt-2' value={type} type="text" onChange={(e)=>setType(e.target.value)}/>
                {errors.type && <span className='text-danger m-3'>{errors.type.message}</span> }<br></br>
            </div>
            <div className='form-group m-2'>
                <label className='form-label'>Pet Description:</label>
                <input className='form-control mt-2' value={description} type="text" onChange={(e)=>setDescription(e.target.value)}/>
                {errors.description && <span className='text-danger m-3'>{errors.description.message}</span> }<br></br>
            </div>
        </div>
        <div className='formRight'>
            <div className='form-group m-2'>
                <label className='form-label'>Skill 1:</label>
                <input className='form-control mt-2' value={skill1} type="text" onChange={(e)=>setSkill1(e.target.value)}/>
                {errors.skill1 && <span className='text-danger m-3'>{errors.skill1.message}</span> }<br></br>
            </div>
            <div className='form-group m-2'>
                <label className='form-label'>Skill 2:</label>
                <input className='form-control mt-2' value={skill2} type="text" onChange={(e)=>setSkill2(e.target.value)}/>
                {errors.skill2 && <span className='text-danger m-3'>{errors.skill2.message}</span> }<br></br>
            </div>
            <div className='form-group m-2'>
                <label className='form-label'>Skill 3:</label>
                <input className='form-control mt-2' value={skill3} type="text" onChange={(e)=>setSkill3(e.target.value)}/>
                {errors.skill3 && <span className='text-danger m-3'>{errors.skill3.message}</span> }<br></br>
            </div>
        </div>
        </div>
        <button className='btn btn-primary'>Update Pet!</button>
    </form>
    </div>
    )
}

export default UpdateForm