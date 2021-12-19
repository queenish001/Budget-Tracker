import React from 'react';

const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div elevation={2} style={{ textAlign: 'center', padding: '0 12%' }}>
      Try saying: <br /> 
      Add {isIncome ? 'Income ' : 'Expense '} 
      for {isIncome ? '₹100 ' : '₹50 '}  
      in Category {isIncome ? 'Salary ' : 'Travel '}
      for {isIncome ? 'Monday ' : 'Thursday '}
      <br />
    </div>
  );
};

export default InfoCard;
