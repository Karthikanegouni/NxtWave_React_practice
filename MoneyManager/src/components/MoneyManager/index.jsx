import { v4 as uuidv4 } from "uuid";
import { Component } from "react";
import MoneyDetails from "../MoneyDetails";
import TransactionItem from "../TransactionItem";
import "./index.css";

const transactionTypeOptions = [
  {
    optionId: "INCOME",
    displayText: "Income",
  },
  {
    optionId: "EXPENSES",
    displayText: "Expenses",
  },
];

class MoneyManager extends Component {
  state = {
    titleInput: "",
    amountInput: "",
    typeInput: transactionTypeOptions[0].optionId,
    transactionItemsList: [],
  };

  updateTitleInput = (event) => {
    this.setState({
      titleInput: event.target.value,
    });
  };

  updateAmountInput = (event) => {
    this.setState({
      amountInput: event.target.value,
    });
  };

  updateTypeInput = (event) => {
    this.setState({
      typeInput: event.target.value,
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    const { titleInput, amountInput, typeInput } = this.state;
    if (
      titleInput.trim() === "" ||
      Number.isNaN(Number(amountInput)) ||
      Number(amountInput) <= 0
    ) {
      alert("Invalid Input");
      return;
    }

    const optionType = transactionTypeOptions.find(
      (item) => item.optionId === typeInput
    ).displayText;
    const newTransactionItem = {
      id: uuidv4(),
      title: titleInput,
      amount: Number(amountInput),
      type: optionType,
    };

    this.setState((prevState) => ({
      transactionItemsList: [
        ...prevState.transactionItemsList,
        newTransactionItem,
      ],
      titleInput: "",
      amountInput: "",
      typeInput: transactionTypeOptions[0].optionId,
    }));
  };

  deleteTransactionItem = (id) => {
    const { transactionItemsList } = this.state;
    const updatedList = transactionItemsList.filter((item) => id !== item.id);
    this.setState({
      transactionItemsList: updatedList,
    });
  };

  render() {
    const { transactionItemsList, titleInput, amountInput, typeInput } =
      this.state;

    const totalIncome = transactionItemsList
      .filter((item) => item.type === "Income")
      .reduce((sum, item) => sum + item.amount, 0);

    const totalExpenses = transactionItemsList
      .filter((item) => item.type === "Expenses")
      .reduce((sum, item) => sum + item.amount, 0);

    const totalBalance = totalIncome - totalExpenses;

    return (
      <div className="wrapper">
        <div className="welcome-card">
          <h1 className="greet-text">Hi, Richard</h1>
          <p className="welcome-text">
            Welcome back to your{" "}
            <span className="blue-text">Money Manager</span>
          </p>
        </div>

        <MoneyDetails
          income={totalIncome}
          expenses={totalExpenses}
          balance={totalBalance}
        />

        <div className="bottom-cnt">
          <form className="add-transaction-form" onSubmit={this.onFormSubmit}>
            <h1 className="card-heading">Add Transaction</h1>

            <label htmlFor="titleInput" className="input-label">
              TITLE
            </label>
            <input
              value={titleInput}
              onChange={this.updateTitleInput}
              type="text"
              id="titleInput"
              className="input"
              placeholder="TITLE"
            />

            <label htmlFor="amountInput" className="input-label">
              AMOUNT
            </label>
            <input
              value={amountInput}
              onChange={this.updateAmountInput}
              type="text"
              id="amountInput"
              className="input"
              placeholder="AMOUNT"
            />

            <label htmlFor="typeInput" className="input-label">
              TYPE
            </label>
            <select
              name="Type"
              id="typeInput"
              className="input"
              onChange={this.updateTypeInput}
              value={typeInput}
              data-testid="transactionType"
            >
              {transactionTypeOptions.map((item) => (
                <option key={item.optionId} value={item.optionId}>
                  {item.displayText}
                </option>
              ))}
            </select>
            <div>
              <button type="submit" className="add-btn">
                Add
              </button>
            </div>
          </form>

          <div className="history-card">
            <h1 className="card-heading">History</h1>
            <ul className="history-items-cnt">
              <li className="history-first-item">
                <p className="item-text-cnt">Title</p>
                <p className="item-text-cnt">Amount</p>
                <p className="item-text-cnt">Type</p>
                <p className="del-icon-cnt" />
              </li>
              {transactionItemsList.map((item) => (
                <TransactionItem
                  key={item.id}
                  deleteTransactionItem={this.deleteTransactionItem}
                  transaction={item}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MoneyManager;
