import { useState } from 'react'
import './App.css'
import { Card } from './components/card/card';
import { ProductData } from './interface/ProductData';

function App() {
  const data:ProductData[]  = [];

  return (
      <div className="container">
        <h1>Hardware</h1>
        <div className="card-grid">
          {data.map(body => <Card
          price={body.price}
          title={body.title}
          imgURL={body.imgURL}/>)}
        </div>
      </div>
  )
}

export default App
