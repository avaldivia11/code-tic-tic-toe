import React, { useState } from "react";
import Game from "./Game";




function App() {
    const [formulario, setFormulario] = useState(true);
    const changes = () => {
        setFormulario(false)
    }
    return (
        <>
            <div className="header">
                <h1>Tic Tac Toe in React.js</h1>
            </div>
            <div>
                {
                    formulario === true ?
                        <>
                            <h2>Pick a Weapon</h2>
                            <div className="formulario">
                                <h2>Choose your weapon</h2>
                                <form>
                                    <div className="campos">
                                        <input type="text" name="player1" placeholder="Player1 Username"></input>
                                        <input type="text" name="player2" placeholder="Player2 Username"></input>
                                    </div>
                                    <div className="botones">
                                        <button value="X" onClick={() => changes()} className="B1">X</button>
                                        <button value="O" onClick={() => changes()} className="B2">O</button>
                                    </div>
                                </form>
                            </div>
                        </>
                        : <Game />
                }

            </div>
        </>
    );
};

export default App;