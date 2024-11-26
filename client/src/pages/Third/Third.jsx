import './style.css';

export default function Third() {
  return (
    <div className="business-container">
      <h1 className="business-title">
        <span className="green-text">BUSINESS</span> <span className="orange-text">OPPORTUNITIES</span>
      </h1>
      <div className="business-cards">
        <div className="business-card">
          <div className="business-image">
            <img src="/vermi-compost.png" alt="Vermi Compost" />
          </div>
          <h2 className="business-card-title">VERMI COMPOST</h2>
          <p>
            Grow Organic India Pvt. Ltd. produces premium-quality vermi compost by recycling organic waste into nutrient-rich fertilizer. Our eco-friendly solution enhances soil fertility, ensuring sustainable farming and healthier crops.
          </p>
        </div>
        <div className="business-card">
          <div className="business-image">
            <img src="/cow-farm.png" alt="Cow Farm" />
          </div>
          <h2 className="business-card-title">COW FARM</h2>
          <p>
            Grow Organic India Pvt. Ltd. specializes in ethical cow farming to deliver pure, high-quality dairy products. Our sustainable practices ensure healthier nutrition while promoting animal welfare and environmental care.
          </p>
        </div>
        <div className="business-card">
          <div className="business-image">
            <img src="/goat-farm.png" alt="Goat Farm" />
          </div>
          <h2 className="business-card-title">GOAT FARM</h2>
          <p>
            Grow Organic India Pvt. Ltd. excels in sustainable goat farming, providing premium-quality dairy and meat products. Our ethical farming practices ensure superior nutrition and promote a healthy, eco-friendly lifestyle.
          </p>
        </div>
      </div>
      {/* <footer className="business-footer">
        <span>Page 04 | </span>Grow Organic India
      </footer> */}
    </div>
  );
}
