"use client";
import { useState } from "react";
import Header from "./components/Header";
import AgeGroupSelector from "./components/AgeGroup";
import PlayerForm from "./components/PlayerForm";
import PlayerList from "./components/PlayerList";
import CoachEditModal from "./components/CoachEditModal";
import type { Player } from "./types";

const AdminPlayers = () => {
  const [players, setPlayers] = useState<Player[]>([
    {
      id: 1,
      name: "Giorgi Kapanadze",
      jersey: 10,
      position: "Midfielder",
      date_of_birth: "2005-03-15",
      nationality: "Georgia",
      height: 178,
      weight: 72,
      is_active: true,
      joined_at: "2023-01-15",
    },
    {
      id: 2,
      name: "Luka Beridze",
      jersey: 9,
      position: "Forward",
      date_of_birth: "2006-07-22",
      nationality: "Georgia",
      height: 182,
      weight: 75,
      is_active: true,
      joined_at: "2023-02-01",
    },
  ]);

  const [coach, setCoach] = useState("Zurab Chikviladze");
  const [ageGroup, setAgeGroup] = useState("u-17");
  const [openModal, setOpenModal] = useState(false);

  const handleAddPlayer = (player: Player) => {
    setPlayers((prev) => [...prev, { ...player, id: Date.now() }]);
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this player?")) {
      setPlayers((prev) => prev.filter((p) => p.id !== id));
    }
  };

  const handleEdit = (player: Player) => {
    alert(`Edit functionality for ${player.name} - Coming soon!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <Header coach={coach} onChangeCoach={() => setOpenModal(true)} />

        <AgeGroupSelector
          value={ageGroup}
          onChange={(e) => setAgeGroup(e.target.value)}
        />

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Player Management
          </h2>
          <PlayerForm onAdd={handleAddPlayer} />
          <PlayerList
            players={players}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>

        <CoachEditModal
          open={openModal}
          currentCoach={coach}
          onClose={() => setOpenModal(false)}
          onSave={setCoach}
        />
      </div>
    </div>
  );
};

export default AdminPlayers;
