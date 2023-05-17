import { useState } from 'react'
import './App.css'
import { Card } from './components/card/card';
import { useProductData } from './hooks/useProductData';
import { CreateModal } from './components/create-modal/create-modal';

function App() {
  const { data } = useProductData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <div className="container">
      <h1>Marketplace Hardware</h1>
      <div className="card-grid">
        {data?.map(body => 
          <Card
            price={body.price} 
            title={body.title} 
            imgURL={body.imgURL}
          />
        )}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>novo</button>
    </div>
  )
}

export default App