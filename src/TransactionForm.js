// TransactionForm.js
import React, { useState } from 'react';

const TransactionForm = ({ onAddTransaction }) => {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      description,
      category,
      amount: parseFloat(amount),
    };

    onAddTransaction(newTransaction);

    // Reset form fields
    setDescription('');
    setCategory('');
    setAmount('');
  };

  return (
    <div>
      <h2>Add New Transaction</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Description:
          <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
        </label>
        <label>
          Category:
          <input type="text" value={category} onChange={e => setCategory(e.target.value)} />
        </label>
        <label>
          Amount:
          <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
        </label>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default TransactionForm;
