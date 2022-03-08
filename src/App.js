import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";
import {useState} from "react";

function App() {

   let [contact,setContact] = useState(contacts.slice(5,10))

   const handleAddRandom=()=>{
    const randomPos = Math.floor(Math.random() * contacts.length)
    const randomContact = contacts[randomPos]
    setContact([randomContact, ...contact])
   }
   const handleSortPopu = () =>{
    //clonar el array
    const contactsCopy = [...contact]
    {/* wizards.sort((elem1,elem2)=>elem1.name > elem2.name ? 1 : -1) */} //lo mismo que abajo pero reucido
    contactsCopy.sort((elem1,elem2)=>{     
    //ordenar con un sort
    return elem1.popularity < elem2.popularity ? 1 : -1
  })
  //actualizar el estado de wizards
  setContact(contactsCopy)
  }
  const handleSortName = () =>{
    //clonar el array
    const contactsCopy = [...contact]
    {/* wizards.sort((elem1,elem2)=>elem1.name > elem2.name ? 1 : -1) */} //lo mismo que abajo pero reucido
    contactsCopy.sort((elem1,elem2)=>{     
    //ordenar con un sort
    return elem1.name > elem2.name ? 1 : -1
  })
  //actualizar el estado de wizards
  setContact(contactsCopy)
  }
  const handleDelContact = (deleteCont)=>{
    const contactCopy = [...contact]

    contactCopy.splice(deleteCont,1)
    setContact(contactCopy)
  }

  return (
    <div>
    <h1>Actors</h1>
    <div className='btn-menu'>
    <button onClick={handleAddRandom}>Add Contact</button>
    <button onClick={handleSortPopu}>Sort By Populaty</button>
    <button onClick={handleSortName}>Sort By Name</button>
    </div>

    <div className='table-con'>
    <thead className='name-tr'>
    <tr>
      <th>Picture</th>
      <th>Name</th>
      <th>Popularaity</th>
      <th>Won Oscar</th>
      <th>Won Emmy</th>
      <th>Actions</th>
      </tr>
      </thead>
      <tbody>
    {contact.map((eachContact,index)=>{
      return(
        
      <tr key={eachContact.id} className="contact-card">
      <td><img width="70px" src={eachContact.pictureUrl} alt="" /></td>
      <td>{eachContact.name}</td>
      <td>{eachContact.popularity}</td>
      <td>{eachContact.wonOscar && "🏆"}</td>
      <td>{eachContact.wonEmmy && "⭐️"}</td>
      <div>
      <td><button onClick={() =>handleDelContact(index)}>Delete</button></td>
      </div>
      </tr>
      
      
      )  
    })}
    </tbody>
    </div>
    </div>

    
  )
}
export default App;
