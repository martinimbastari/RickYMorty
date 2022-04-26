import React, { useState } from 'react'

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
        <div>
            <form onSubmit={ e => handleSubmit(e)}>
                <label>Name: </label>
                <input type="text" value={name} name="name" onChange={ e => handleChange(e)}/>
                <label>Status: </label>
                <input type="text" value={status} name="status" onChange={e => handleChange(e)}/>
                <label>Location: </label>
                <input type="text" value={location} name="location" onChange={e => handleChange(e)}/>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}