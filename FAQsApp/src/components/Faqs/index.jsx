import { Component } from "react";
import FaqItem from "../FaqItem";
import "./index.css";

export default class Faqs extends Component {
  render() {
    const { faqsList } = this.props;
    return (
      <div className="bg-wrapper">
        <div className="faqs-cnt">
          <h1 className="heading">FAQs</h1>
          <ul className="faq-item-list">
            {faqsList.map((faq) => (
              <FaqItem key={faq.id} faqDetails={faq} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
