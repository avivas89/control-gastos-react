import React from 'react'
import Spent from '../card/Spent'

const SpentsList = ({spents, setEditSpent, removeSpent, filterSpent, filteredSpent}) => {
   return (
      <div className='listado-spends container'>         
         {
            filterSpent ? (
               <>
               <h2>{filteredSpent.length ? 'Gastos' : 'No hay gastos'}</h2>
               {
                  filteredSpent.map(s => (
                     <Spent
                        key={s.id}
                        spent={s}
                        setEditSpent = {setEditSpent}
                        removeSpent = {removeSpent}
                     />
                  ))
               }
               </>
               
            ) : (
               <>
               <h2>{spents.length ? 'Gastos' : 'No hay gastos'}</h2>
               {
                  spents.map(s => (
                     <Spent
                        key={s.id}
                        spent={s}
                        setEditSpent = {setEditSpent}
                        removeSpent = {removeSpent}
                     />
                  ))
               }
               </>
            )
         }        
      </div>
   )
}

export default SpentsList


