import "./Expenses.css"
import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter"
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"
import { useState } from "react"

const Expenses = (props) => {
  const { expenses } = props
  const [selectedYear, setSelectedYear] = useState("2019")
  const expenseFilterHandler = (value) => {
    setSelectedYear(value)
  }

  const filteredExpenses = expenses.filter(item => item.date.getFullYear() === +selectedYear)
  

  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter year={selectedYear} onExpenseFilter={expenseFilterHandler} />
      </div>

      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}
 
export default Expenses;