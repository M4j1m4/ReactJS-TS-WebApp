import React, { useState } from 'react';
import './DonationForm.css'


const DonationForm: React.FC = () => {
  const [donationAmount, setDonationAmount] = useState<number>(0);

  const handleDonationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDonationAmount(Number(event.target.value));
  };

  const handleDonationSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add the logic to process the donation, such as integrating with a payment gateway
    console.log(`Donation amount: ${donationAmount}`);
  };

  return (
    <div className="donation-form">
      <img src="./src/images/2.png" alt="Christ, the Living Stone Fellowship University Belt" />
      <h1>Christ, the Living Stone Fellowship University Belt</h1>
      <p>
        As we gather in worship and fellowship, we are continually reminded of the boundless grace and generosity that flow from our heavenly Father. It is with deep gratitude and joy that we come before you today to express our heartfelt appreciation for your donation to the mission and ministry of Christ, the Living Stone Fellowship.
      </p>
      <form onSubmit={handleDonationSubmit}>
        <label htmlFor="donationAmount">Donation:</label>
        <input
          type="number"
          id="donationAmount"
          name="donationAmount"
          value={donationAmount}
          onChange={handleDonationChange}
          required
        />
        <button type="submit">Donate</button>
      </form>
      <div className="payment-options">
        <img src="./src/images/3.png" alt="PayMaya" />
        <img src="./src/images/4.png" alt="GCash" />
      </div>
    </div>
  );
};

export default DonationForm;