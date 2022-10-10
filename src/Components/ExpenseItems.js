import "./ExpenseItems.css";
function ExpenseItem() {
  const expenseDate = new Date(2022, 2, 20);
  const expenseName = "Car Insaurance";
  const expensePrice = 185;
  return (
    <div className="expense-item">
      <div className="date-el">{expenseDate.toISOString()}</div>
      <div className="expense-item__description ">
        <h2>{expenseName}</h2>
        <div className="expense-item__price">${expensePrice}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
