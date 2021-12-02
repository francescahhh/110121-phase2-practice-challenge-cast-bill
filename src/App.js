import React, {useEffect, useState} from 'react';
import BillCollection from './components/BillCollection';
import BillsCast from './components/BillsCast';

const API="http://localhost:8002/bills";

 //start here with your code for step one
export default function App() {
const [bills, setBills] = useState([]);

  useEffect(() => {
    fetch(API).then(result => result.json()).then((json) => setBills(json)); }, []);

  
  //trying to map over the array of bills and update the data to include a cast property???????
    // setBills(bills.map((oneBill) =>
    // oneBill.id === bills.id ? {...bills, cast: true} : oneBill));
  
 

  return (
    <div>
      <BillsCast //castBill={castBill} //a bills.filter somewhere in here maybe????? */}
      bills={bills}/>
      <BillCollection bills={bills}/>
    </div>
  );
}
