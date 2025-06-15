import { Component } from "react";
import Denomination from "../DenominationItem";
import "./index.css";

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
    denominationsList: this.props.denominationsList,
  };

  onDenomination = (value) => {
    if (this.state.balance - value >= 0) {
      this.setState((prevVal) => ({ balance: prevVal.balance - value }));
    } else {
      alert("Insufficient Balance");
    }
  };

  render() {
    const { balance, denominationsList } = this.state;
    return (
      <div className="main-container">
        <div className="cash-card">
          <div className="user-cnt">
            <div className="user-logo">S</div>
            <h1>Sarah Williams</h1>
          </div>
          <div className="balance-cnt">
            <p className="cnt-title">Your Balance</p>
            <div>
              <p className="balance">{balance}</p>
              <p className="currency-type">In Rupees</p>
            </div>
          </div>
          <div className="withdraw-cnt">
            <p>Withdraw</p>
            <p>CHOOSE SUM (IN RUPEES)</p>
            <ul className="denomination-cnt">
              {denominationsList.map((eachItem) => (
                <Denomination
                  item={eachItem}
                  onDenomination={this.onDenomination}
                  key={eachItem.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default CashWithdrawal;
