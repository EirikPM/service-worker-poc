import React from 'react';
import './App.css';
import Header from '../features/header/Header'
import ObservasjonList from '../features/observasjoner/ObservasjonList'

function App() {
    return (
        <div className="App">
            <main>
                <section className="medium-container">
                    <h2>Observasjoner</h2>
                    <div className="todoapp">
                        <Header />
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
