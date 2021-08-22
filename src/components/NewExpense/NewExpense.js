import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expsenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expsenseData);
    setShowForm(false);
  };
  const [showForm, setShowForm] = useState(false);
  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  let formContent = <button onClick={openForm}>Add New Expense</button>;
  if (showForm)
    formContent = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        formStatus={closeForm}
      />
    );

  return <div className='new-expense'>{formContent}</div>;
};

export default NewExpense;
