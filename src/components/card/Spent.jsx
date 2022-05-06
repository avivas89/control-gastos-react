import {
   LeadingActions,
   SwipeableList,
   SwipeableListItem,
   SwipeAction,
   TrailingActions
} from 'react-swipeable-list'
import "react-swipeable-list/dist/styles.css"
import { formatDate } from '../helpers'

import IconoAhorro  from '../../img/icono_ahorro.svg'
import IconoCasa  from '../../img/icono_casa.svg'
import IconoComida  from '../../img/icono_comida.svg'
import IconoGastos  from '../../img/icono_gastos.svg'
import IconoOcio  from '../../img/icono_ocio.svg'
import IconoSalud  from '../../img/icono_salud.svg'
import IconoSuscripciones  from '../../img/icono_suscripciones.svg'

const diccionarioIconos = {
   ahorro : IconoAhorro,
   casa: IconoCasa,
   comida: IconoComida,
   gastos: IconoGastos,
   ocio: IconoOcio,
   salud: IconoSalud,
   suscripciones: IconoSuscripciones
}

const Spent = ({spent, setEditSpent, removeSpent}) => {

  const {name, category, day, amount,id} = spent

  const leadingActions = () => (
     <LeadingActions>
        <SwipeAction onClick={() => setEditSpent(spent)}>
           Editar
        </SwipeAction>
     </LeadingActions>
  )

  const trailingActions = () => (
      <TrailingActions>
         <SwipeAction 
            onClick={() => removeSpent(id)}
            destructive={true}
         >
            Eliminar
         </SwipeAction>
      </TrailingActions>
  )

  return (
      <SwipeableList>
         <SwipeableListItem
            leadingActions={leadingActions()}
            trailingActions={trailingActions()}
         >
            <div className='spend shadow-box'>
               <div className="content-spend">
                  <img 
                     src={diccionarioIconos[category]} 
                     alt="Icono Gasto"             
                  />
                  <div className="descripcion-spend">
                     <p className="categoria">{category}</p>
                     <p className='nombre-spend'>{name}</p>
                     <p className='fecha-spend'>
                        Agregado el: <span>{formatDate(day)}</span>
                     </p>
                  </div> 
               </div>  
               <p className='cantidad-spend'>${amount}</p>
            </div>
         </SwipeableListItem>
      </SwipeableList>
    
  )
}

export default Spent
