import { useState } from 'react';
export default function Header({ onSearch, onFilter }) {
  return (
    <header className="header">
      <input
        type="text"
        placeholder="Search by name, region, code"
        onChange={(e) => onSearch(e.target.value)}
      />
      <select onChange={(e) => onFilter(e.target.value)}>
        <option value="">All</option>
        <option value="independent">Independent</option>
        <option value="dependent">Dependent</option>
      </select>
    </header>
  );
}
