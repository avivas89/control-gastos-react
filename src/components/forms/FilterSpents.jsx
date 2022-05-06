import {useState, useEffect} from 'react'

const FilterSpents = ({filterSpent, setFilterSpent}) => {
  return (
    <div className='filtros shadow-box container'>
      <form>
        <div className="field">
          <label>Filtrar gastos</label>
          <select
            value={filterSpent}
            onChange={e => setFilterSpent(e.target.value)}
          >
            <option value="">Todas las categorías</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default FilterSpents
