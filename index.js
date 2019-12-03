import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Dashboard from "./pages/dashboard/dashboard";

function App(){
  return (
    <>
      <h1>Todo List</h1>
      <Dashboard />
    </>
  );
}

render(<App />, document.getElementById('root'));
