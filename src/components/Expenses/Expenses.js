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

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={selectedOption} selectOption={selectHandler} />
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
