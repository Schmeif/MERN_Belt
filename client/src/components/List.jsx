import React from 'react';
import axios from 'axios';
import { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';

const List = () => {

    const [list, setList] = useState([])

    useEffect (()=>{
        axios.get(`http://localhost:8000/api/getPets`)
        .then((res)=>{
            setList(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

return (
    <div className='tbl'>
        <table className="table table-dark mt-3 p-2 mx-auto ">
            <thead>
                <tr>
                    <th scope='col'>Name</th>
                    <th scope='col'>Type</th>
                    <th scope='col'>Options</th>
                </tr>
            </thead>
            <tbody>
                {list.map((pet)=>{
                    return (
                        <tr className='table-secondary' key={pet._id}>
                            <td className='table-secondary' >{pet.name}</td>
                            <td className='table-secondary' >{pet.type}</td>
                            <td className='table-secondary' >
                                <Link to={`/api/getOnePet/${pet._id}`}>Details</Link>
                                <span> | </span>
                                <Link to={`/api/updatePet/${pet._id}`}> edit</Link>
                            </td>
                        </tr>
                )
            })
        }
        </tbody>
    </table>
    </div>
)
    
}

export default List;