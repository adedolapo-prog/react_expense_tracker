import AddButton from "./AddButton";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

const NewExpense = (props) => {
  const [form, setForm] = useState(false)

  const submitFormHandler = (expenseDetails) => {
    const expenseData = {
      ...expenseDetails,
      id: Math.random().toString()
    }

    props.onExpense(expenseData)
  }

  const addExpenseForm = () => {
    setForm((prevState) => !prevState)
  }

  return (
    <div className="new-expense">
      {!form && <AddButton onButtonClick={addExpenseForm}/>}
      {form && <ExpenseForm onSubmitExpenseForm={submitFormHandler} onButtonClick={addExpenseForm}/>}
    </div>
  );
}
 
export default NewExpense;