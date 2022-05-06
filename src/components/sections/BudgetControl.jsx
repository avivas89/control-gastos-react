import {useEffect, useState} from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const BudgetControl = ({budget, setBudget, spents, setSpents, setIsValidBudget}) => {

   const [porcentaje, setPorcentaje] = useState(0)
   const [disponible, setDisponible] = useState(0)
   const [gastado, setGastado] = useState(0)

   useEffect(() => {
      const totalGastado = spents.reduce((total, spent) => spent.amount + total, 0)

      const totalDisponible = budget - totalGastado

      //calcular porcentaje gastado
      const newPercentage = (((budget - totalDisponible) / budget) * 100).toFixed(2)      
      setTimeout(() => {
         setPorcentaje(newPercentage)
      }, 500);

      setDisponible(totalDisponible)

      setGastado(totalGastado)
   }, [spents])   

   const amountFormat = (amount) => {
      return amount.toLocaleString('en-US', {
         style: 'currency',
         currency: 'USD'
      })
   }

   const handleResetApp = () => {
      const resultado = confirm('¿Estas seguro de reiniciar presupuesto y gastos?')

      if (resultado) {
         setSpents([])
         setBudget(0)
         setIsValidBudget(false)
      }
   }

   return (
      <div className='container-budget container shadow-box two-columns'>
         <div>
            <CircularProgressbar 
               value={porcentaje} 
               text={`${porcentaje}% Gastado`}
               styles={buildStyles({
                  pathColor: porcentaje > 100 ? 'red' : '#64748b',
                  textColor: porcentaje > 100 ? 'red' : '#64748b',
               })}
            />
         </div>
         <div className='content-budget'>
            <button className='reset-app' type="button" onClick={handleResetApp}>
               Reiniciar App
            </button>
            <p>
               <span>Presupuesto: </span> {amountFormat(budget)}
            </p>
            <p className={`${disponible < 0 ? 'negativo' : ''}`}>
               <span>Disponible: </span> {amountFormat(disponible)}
            </p>
            <p>
               <span>Gastado: </span> {amountFormat(gastado)}
            </p>
         </div>
      </div>
   )
}

export default BudgetControl
