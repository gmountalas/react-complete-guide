import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [selectedOption, setSelectedOption] = useState("2020");

  const selectHandler = (option) => {
    setSelectedOption(option);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return Number.parseInt(selectedOption) === expense.date.getFullYear();
  });

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={selectedOption} selectOption={selectHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
