import { Player } from "./components";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player1" symbol="X" />
          <Player initialName="Player2" symbol="X" />{" "}
        </ol>
        GAME BOARD
      </div>
    </main>
  );
}

export default App;
