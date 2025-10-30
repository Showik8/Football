import type { Player } from "../types";

interface PlayerCardProps {
  player: Player;
  onEdit: (player: Player) => void;
  onDelete: (playerId: number) => void;
}

const PlayerCard = ({ player, onEdit, onDelete }: PlayerCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 text-white font-bold text-xl rounded-lg w-12 h-12 flex items-center justify-center">
            {player.jersey}
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-900">
              {player.name}
            </h3>
            <p className="text-sm text-gray-600">{player.position}</p>
          </div>
        </div>
        {player.is_active && (
          <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
            Active
          </span>
        )}
      </div>

      <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
        {player.nationality && (
          <div>
            <span className="font-medium">Nationality:</span>{" "}
            {player.nationality}
          </div>
        )}
        {player.height && (
          <div>
            <span className="font-medium">Height:</span> {player.height} cm
          </div>
        )}
        {player.weight && (
          <div>
            <span className="font-medium">Weight:</span> {player.weight} kg
          </div>
        )}
        {player.joined_at && (
          <div>
            <span className="font-medium">Joined:</span> {player.joined_at}
          </div>
        )}
      </div>

      <div className="flex gap-2 pt-3 border-t border-gray-200">
        <button
          onClick={() => onEdit(player)}
          className="flex-1 bg-blue-50 text-blue-600 hover:bg-blue-100 py-2 rounded-lg font-medium transition-all"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(player.id)}
          className="flex-1 bg-red-50 text-red-600 hover:bg-red-100 py-2 rounded-lg font-medium transition-all"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default PlayerCard;
