const Log = ({ turns }) => {
  const identifyPlayer = (player) => {
    const playerName = "";
    player === "X" ? (playerName = "Player 1") : (playerName = "Player 2");
    return playerName;
  };

  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} selected {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
};

export default Log;
