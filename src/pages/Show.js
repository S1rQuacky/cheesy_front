import { useState } from "react";

function Show(props){
    const id = props.match.params.id
    const cheese = props.cheese
    const queso = cheese.find(p => p._id === id)

    //state form
    const [editForm, setEditForm] = useState(queso)

    //handleChange
    const handleChange = (event) => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value});
    };

    //handleSubmit
    const handleSubmit = (event) => {
        event.preventDefault()
        props.updateCheese(editForm, queso._id)
        //redirect back to index
        props.history.push("/")
    };

    const removeCheese = () => {
        props.deleteCheese(queso._id)
        props.history.push("/")
    }

    return (
        <div className="queso">
            <h1>{queso.name}</h1>
            <h2>{queso.countryOfOrigin}</h2>
            <img src={queso.image} alt={queso.name} />
            <button onClick={removeCheese} id="delete">DELETE</button>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={editForm.name}
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                />
                 <input
                    type="text"
                    value={editForm.countryOfOrigin}
                    name="countryOfOrigin"
                    placeholder="Country of Origin"
                    onChange={handleChange}
                />
                 <input
                    type="text"
                    value={editForm.image}
                    name="image"
                    placeholder="image URL"
                    onChange={handleChange}
                />
                <input type="submit" value="Update the Cheese" />
            </form>
        </div>
    )
}

export default Show