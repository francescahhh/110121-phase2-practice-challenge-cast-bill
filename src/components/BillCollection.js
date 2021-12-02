import React from 'react';
import BillCard from './BillCard';

export default function BillCollection({bills, castBill}) {
  // Your code here


  return (
    <div className="ui four column grid">
      <div className="row">
        {bills.map(bills => <BillCard key={bills.id}
         bill={bills} 
        //  handleClick={castBill} handleClick={fireBill}
         />)}
      </div>
    </div>
  );
}
