import React from 'react';
import './Footer.css'; // (ঐচ্ছিক) যদি ফুটারের কোনো অতিরিক্ত স্টাইল থাকে

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <p>&copy; {currentYear} MyPortfolio. All rights reserved.</p>
    </div>
  );
};

export default Footer;