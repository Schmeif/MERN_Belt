import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'

const Pet = () => {

    const { id } = useParams()
    const [pet, setPet] = useState({})

    const navigate = useNavigate()
    
    const [disabled, setDisabled] =useState(false)



    useEffect(()=>{
        axios.get(`http://localhost:8000/api/getOnePet/${id}`,)
        .then((res)=>{
            console.log(res)
            setPet(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }, [id])

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/deletePet/${id}`)
        .then((res)=>{
            navigate('/')
        }).catch((err)=>{
            console.log(err)
        })
    }

const [count, setCount] = useState(0)


    return (
    <div>
        <div>
        </div>
        <div className='bg-white d-flex flex-row  justify-content-between col-6 mx-auto'>
        <h1>Details About:        {pet.name}</h1>
        <button className='btn btn-danger' onClick={deleteHandler}>Adopt {pet.name} </button>
        </div>
                <div className='card'>
                    <p>Pet Type:                    {pet.type}</p>
                    <p>Description:                 {pet.description}</p>
                    <p>Skills:                       {pet.skill1}</p>
                    <p>                             {pet.skill2}</p>
                    <p>                             {pet.skill3}</p>
                    <button className='btn btn-primary d-flex  col-0 mx-auto ' disabled={disabled}  onClick={()=> { setDisabled(true); setCount(count + 1);}}>Like {pet.name} ---> {count}</button>
                </div>
    </div>
    )
}

export default Pet;
