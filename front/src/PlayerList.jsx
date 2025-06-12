import React, { useState, useEffect } from "react";
import axios from "axios";

const PlayersList = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/players?age_group=U17")
      .then((response) => {
        setPlayers(response.data.players);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching players:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>U17 Players</h2>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            {player.name} - {player.position} ({player.club})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayersList;
