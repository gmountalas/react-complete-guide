import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [selectedOption, setSelectedOption] = useState("2020");

  const selectHandler = (option) => {
    setSelectedOption(option);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return Number.parseInt(selectedOption) === expense.date.getFullYear();
  });

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={selectedOption} selectOption={selectHandler} />
      {expensesContent}
    </Card>
  );
}

export default Expenses;
