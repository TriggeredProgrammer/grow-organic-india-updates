import "./style.css";

export default function TermsAndCondition() {
  return (
    <div className="terms-container">
      <div className="terms-content">
        <h1>
          <span className="orange-text">TERMS</span> AND{" "}
          <span className="green-text">CONDITIONS</span>
        </h1>
        <ul>
          <li>Farm Revenue 200%</li>
          <li>Working profit Max 400%</li>
          <li>The minimum withdrawal amount is 600 Rs.</li>
          <li>All transactions will be done through a bank account.</li>
          <li>All Business closing can be every week.</li>
          <li>Salary will be credited every month.</li>
          <li>
            If you make a withdrawal request every week, 5% admin charges apply.
          </li>
          <li>
            If you make a withdrawal request 2 monthly basis, no admin charges.
          </li>
          <li>TDS applicable as per government rules.</li>
          <li>KYC is mandatory for all withdrawals.</li>
          <li>The withdrawal process will take between 24 to 48 hours.</li>
        </ul>
      </div>
      <div className="terms-image">
        <img src="/terms.png" alt="Goat" />
      </div>
      {/* <footer className="terms-footer">
        <span>Page 12 | </span>Grow Organic India
      </footer> */}
    </div>
  );
}
