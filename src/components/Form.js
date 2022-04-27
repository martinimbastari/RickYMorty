import React, { useState } from 'react'
import "../styles/form.css"

export default function Form() {
    const [ formulario, setFormulario ] = useState({name: "", status: "", location: ""})

    const { name, status, location } = formulario

    function handleSubmit(e){
        e.preventDefault()
        console.log(formulario);
        setFormulario({name: "", status: "", location: ""})
    }

    function handleChange(e){
        e.preventDefault()
        setFormulario({...formulario, [e.target.name]: e.target.value})
    }

    return (
        <div className='Contenedor'>
            <div className='templateForm'>
            <div className='imgContainer'>
            </div>

            <form onSubmit={ e => handleSubmit(e)}>
                <h2>Comencemos a crearlo</h2>
                <p>Name </p>
                <input type="text"  value={name} name="name" onChange={ e => handleChange(e)}/>
                
                
                <p>Status </p>
                <input type="text"  value={status} name="status" onChange={e => handleChange(e)}/>
                
                
                <p>Location </p>
                <input type="text"  value={location} name="location" onChange={e => handleChange(e)}/> <br/>
                    
                
                <button className='botonAdd' type="submit">Create</button>
            </form>
        </div>
        </div>
    )
}