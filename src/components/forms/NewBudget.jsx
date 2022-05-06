import {useState} from 'react'
import Message from '../helpers/Message'

const NewBudget = ({budget, setBudget, setIsValidBudget}) => {

  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!budget || budget < 0) {
      setMessage('No es un presupuesto válido')

      setTimeout(() => {
        setMessage('')
     }, 3000);
     return
    } 
      setMessage('')
      setIsValidBudget(true)
  }

  return (
    <div className='container-budget container shadow-box'>
      <form className='form' onSubmit={handleSubmit}>
         <div className="field">
            <label htmlFor="">Definir presupuesto</label>
            <input 
               type="number"
               className='new-budget'
               placeholder='Agrega tu presupuesto'
               value= {budget}
               onChange= {e => setBudget(Number(e.target.value))}
               />
         </div>
         <input type="submit" value="Ingresar" />
         {
           message && <Message tipo="error">{message}</Message>
         }
      </form>
    </div>
  )
}

export default NewBudget
