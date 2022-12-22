import React, {useState, useEffect} from 'react'
import Form from '../components/Form'
import List from '../components/List'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Main = () => {
    const [pet, setPet] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/getPets')
        .then((res)=>{
            console.log(res.data)
            setPet(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])

    
    
    return (
        <div>
            <div className='col-6 mx-auto d-flex flex-row'>
        <h2 >These pet's are looking for a good home!</h2>
        <h5 className='ms-5 mt-2'>
        <Link to={`/api/createPet/`}>add a pet to the shelter</Link>
        </h5>
            </div>
            <List pet={pet} setPet={setPet} />
        </div>
    )
}

export default Main;