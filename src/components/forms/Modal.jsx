import { useState, useEffect } from 'react'
import Close from '../../img/cerrar.svg'
import Spent from '../card/Spent'
import Message from '../helpers/Message'

const Modal = ({setModal, animateModal, setAnimateModal, saveSpent, editSpent, setEditSpent}) => {

   const [message, setMessage] = useState('')

   const [name, setName] = useState('')
   const [amount, setAmount] = useState('0')
   const [category, setCategory] = useState('0')
   const [id, setId] = useState('')
   const [day, setDay] = useState('')

   //Para editar el gasto en el modal
   useEffect(() => {
      if(Object.keys(editSpent).length > 0) {
         setName(editSpent.name)
         setAmount(editSpent.amount)
         setCategory(editSpent.category)
         setId(editSpent.id)
         setDay(editSpent.day)
       }
   }, [])
   

   const hideModal = () => {
      setAnimateModal(false)
      setEditSpent({})
      setTimeout(() => {
         setModal(false)
       }, 300);
   }

   const handleSubmit = e => {
      e.preventDefault()

      if([name, category, amount].includes('')) {
         setMessage('Todos los campos son obligatorios')

         setTimeout(() => {
            setMessage('')
         }, 3000);
         return
      }

     

      saveSpent({name, category, amount, id, day})
      
   }
   return (
         <div className='modal'>
            <div className="close-modal">
               <img 
                  src={Close} 
                  alt="Cerrar modal"
                  onClick={hideModal} 
               />
            </div>
            <form onSubmit={handleSubmit} className={`form ${animateModal ?  'animar' : 'close'} `}>
               <legend>{editSpent.name ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>
               {
                  message && <Message tipo="error">{message}</Message>
               }
               <div className="field">
                  <label htmlFor="name">Nombre Gasto</label>
                  <input 
                     id="name"
                     type="text" 
                     placeholder='Descripción Gasto'
                     value={name}
                     onChange={e => setName(e.target.value)}
                  />
               </div>
               <div className="field">
                  <label htmlFor="amount">Monto</label>
                  <input 
                     id="amount"
                     type="number" 
                     placeholder='Descripción Gasto'
                     value={amount}
                     onChange={e => setAmount(Number(e.target.value))}
                  />
               </div>
               <div className="field">
                  <label htmlFor="category">Categoria</label>
                  <select 
                     name="category" 
                     id="category"
                     value={category}
                     onChange={e => setCategory(e.target.value)}
                  >
                     <option value="">Seleccione</option>
                     <option value="ahorro">Ahorro</option>
                     <option value="comida">Comida</option>
                     <option value="casa">Casa</option>
                     <option value="gastos">Gastos Varios</option>
                     <option value="ocio">Ocio</option>
                     <option value="salud">Salud</option>
                     <option value="suscripciones">Suscripciones</option>
                  </select>
               </div>
               <input type="submit" value={editSpent.name ? 'Guardar cambios' : 'Añadir gasto' } />

               
            </form>
         </div>
   )
}

export default Modal
