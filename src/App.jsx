import { useState, useEffect } from 'react'

import Header from './components/sections/Header'
import FilterSpents from './components/forms/FilterSpents'
import SpentsList from './components/sections/SpentsList'
import Modal from './components/forms/Modal'

import { generateId } from './components/helpers'
import IconNewBudget from './img/nuevo-gasto.svg'

function App() {

  const [spents, setSpents] = useState(
    localStorage.getItem('spents') ? JSON.parse(localStorage.getItem('spents')) : []
  )

  const [budget, setBudget] = useState(
    Number(localStorage.getItem('budget')) ?? 0
  )

  const [isValidBudget, setIsValidBudget] = useState(false)

  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)

  const [editSpent, setEditSpent] = useState({})

  const [filterSpent, setFilterSpent] = useState('')
  const [filteredSpent, setFilteredSpent] = useState([])

  useEffect(() => {
    if(Object.keys(editSpent).length > 0) {
      setModal(true)

      setTimeout(() => {
        setAnimateModal(true)
      }, 300);
    }
    
  }, [editSpent])
  
  //Guardando presupuesto en el localStorage
  useEffect(() => {
    localStorage.setItem('budget', budget ?? 0)
  }, [budget])

  useEffect(() => {
    const budgetLS = Number(localStorage.getItem('budget')) ?? 0

    if(budgetLS > 0) {
      setIsValidBudget(true)
    }
  }, [])

   //Guardando gasto en localstorage, primero lo debo convertir en string, en localStorage no se almacenan arreglos
   useEffect(() => {
    localStorage.setItem('spents', JSON.stringify(spents) ?? [])
  }, [spents])

  //Escuchando los cambios que suceden en filterSpent
  useEffect(() => {
    if(filterSpent) {
      //filtrar gastos por categoria
      const filteredSpents = spents.filter( spent => spent.category === filterSpent)

      setFilteredSpent(filteredSpents)
    }    
  }, [filterSpent])



  
  
 



  const handleNewSpend = () => {
    setModal(true)
    setEditSpent({}) 

    setTimeout(() => {
      setAnimateModal(true)
    }, 300);    
  }



  const saveSpent = spent => {
    if(spent.id) {
      //editando gasto
      const updateSpents = spents.map(spentState => spentState.id === spent.id ? spent : spentState)
      setSpents(updateSpents)
      setEditSpent({})
    } else {
      //Nuevo gasto
      spent.id = generateId()
      spent.day = Date.now()
      setSpents([...spents, spent ])
    }

    

    setAnimateModal(false)
    setTimeout(() => {
        setModal(false)
      }, 300);
  }

  const removeSpent = id => {
    const updateSpents = spents.filter(spent => spent.id !== id)
    setSpents(updateSpents)
  }
  

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        spents = {spents}
        setSpents = {setSpents}
        budget = {budget}
        setBudget = {setBudget}
        isValidBudget = {isValidBudget}
        setIsValidBudget = {setIsValidBudget}
      /> 
      { isValidBudget && (
        <>
        <main>
          <FilterSpents
            filterSpent = {filterSpent}
            setFilterSpent = {setFilterSpent}
          />
          <SpentsList
            spents = {spents}
            setEditSpent = {setEditSpent}
            removeSpent = {removeSpent}
            filterSpent = {filterSpent}
            filteredSpent = {filteredSpent}
          />
        </main>
        <div className="new-spend">
          <img 
            src={IconNewBudget} 
            alt="Icono nuevo gasto" 
            onClick={handleNewSpend}
          />
        </div>  
        </>
      )}

      {modal && 
        <Modal
          setModal = {setModal}
          animateModal = {animateModal}
          setAnimateModal = {setAnimateModal}
          saveSpent = {saveSpent}
          editSpent = {editSpent}
          setEditSpent = {setEditSpent}
        />
      } 
    </div>
    
  )
}

export default App
