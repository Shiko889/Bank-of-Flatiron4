// App.js
import React, { useState, useEffect } from 'react';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';
import SearchBar from './SearchBar';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5173/transactions') // Update this URL with your actual server URL
      .then(response => response.json())
      .then(data => {
        setTransactions(data);
        setFilteredTransactions(data);
      });
  }, []);

  const handleAddTransaction = newTransaction => {
    setTransactions(prevTransactions => [...prevTransactions, newTransaction]);
    setFilteredTransactions(prevTransactions => [...prevTransactions, newTransaction]);
  };

  const handleSearch = searchTerm => {
    const filtered = transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  return (
    <div>
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <SearchBar onSearch={handleSearch} />
      <TransactionList transactions={filteredTransactions} />
    </div>
  );
};

export default App;
