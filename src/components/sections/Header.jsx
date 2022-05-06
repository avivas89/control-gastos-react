import React from 'react'
import NewBudget from '../forms/NewBudget'
import BudgetControl from './BudgetControl'

const Header = ({budget, setBudget, isValidBudget, setIsValidBudget, spents, setSpents}) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>

      {isValidBudget ? (
        <BudgetControl
          budget = {budget}
          setBudget = {setBudget}
          spents = {spents}
          setSpents = {setSpents}
          setIsValidBudget = {setIsValidBudget}
        />
      ) : (
        <NewBudget
          budget = {budget}
          setBudget = {setBudget}
          setIsValidBudget = {setIsValidBudget}
        />
      )}
      
    </header>
  )
}

export default Header
