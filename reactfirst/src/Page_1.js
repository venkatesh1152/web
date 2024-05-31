import React, { useState } from 'react';
import './Page_1.css';
import Button from '@mui/material/Button';

function Page_1() {
  const [data, setData] = useState([{ product_Id: '', quantity: '' }]);
  const handleInputChange = (index, column, value) => {
    const newData = [...data];
    newData[index][column] = value;
    setData(newData);
  };

  const addRow = () => {
    console.log("Data" + data);
    setData(prevData => [...prevData, { product_Id: '', quantity: '' }]);
  };
  const removeRow = (index) => {
    const newData = data.filter((_, i) => i !== index);
    console.log(JSON.stringify(newData, null, 2));
    setData(newData);
  };
  return (
    <div className="container">
      <div className="top-pane">
        <div className="text-style">Billing Page</div>
        <div className="form-group">
          <label htmlFor="customerEmail">Customer Email</label>
          <input type="email" id="customerEmail" name="customerEmail" placeholder="Email Id" />
        </div>
        <div className="input_button">
          <Button variant="contained" onClick={addRow}>Add New</Button>
          <Button variant="contained" onClick={() => removeRow((data.length - 1))}>Remove</Button>
        </div>
        <div className="form-group2">
          <label htmlFor="BillSection">Bill section</label>
          <div className="table-container">
            <table className="custom-table">
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    <td><input type="text" value={row.product_Id} onChange={(e) => handleInputChange(index, 'product_Id', e.target.value)} placeholder="Product Id" /></td>
                    <td><input type="text" value={row.quantity} onChange={(e) => handleInputChange(index, 'quantity', e.target.value)} placeholder="Quantity" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="bottom-pane">
        <div className="line"></div>
        <div className="form-group">
          <label htmlFor="Denominations">Denomination</label>
        </div>
        <div className="form-group3">
          <input type="number" id="rupee500" name="rupee500" placeholder="Count" />
          <label htmlFor="rupee500">500</label>
        </div>
        <div className="form-group3">
          <input type="number" id="rupee50" name="rupee50" placeholder="Count" />
          <label htmlFor="rupee50">50</label>
        </div>
        <div className="form-group3">
          <input type="number" id="rupee20" name="rupee20" placeholder="Count" />
          <label htmlFor="rupee20">20</label>
        </div>
        <div className="form-group3">
          <input type="number" id="rupee10" name="rupee10" placeholder="Count" />
          <label htmlFor="rupee10">10</label>
        </div>
        <div className="form-group3">
          <input type="number" id="rupee5" name="rupee5" placeholder="Count" />
          <label htmlFor="rupee5">5</label>
        </div>
        <div className="form-group3">
          <input type="number" id="rupee2" name="rupee2" placeholder="Count" />
          <label htmlFor="rupee2">2</label>
        </div>
        <div className="form-group3">
          <input type="number" id="rupee1" name="rupee1" placeholder="Count" />
          <label htmlFor="rupee1">1</label>
        </div>
        <div className="form-group">
          <label htmlFor="CashPaidByCustomer">Cash paid bu customer</label>
          <input type="number" id="cashPaidCustomer" name="cashPaidCustomer" placeholder="Amount" />
          <Button variant="contained" onClick={addRow} className="ml-10">Cancel</Button>
          <Button variant="contained" onClick={removeRow}>Generate Bill</Button>
        </div>
      </div>
    </div>
  );
}
export default Page_1;