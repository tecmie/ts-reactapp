import React from 'react'
import './App.css'
import Thing from 'components/Thing'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Thing name="widget" />
      </header>
    </div>
  )
}

export default App
