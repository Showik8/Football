// src/components/team-squad/PlayerCard.tsx

import Image from "next/image";
import { motion } from "framer-motion";
import { Player } from "../types";
import { UserCircle } from "lucide-react";

type PlayerCardProps = {
  player: Player;
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const PlayerCard = ({ player }: PlayerCardProps) => {
  return (
    <motion.div
      className="relative bg-gray-800 rounded-lg overflow-hidden group border border-transparent hover:border-blue-500 transition-colors duration-300"
      variants={cardVariants}
      whileHover={{ y: -5 }}
    >
      <div className="absolute top-2 right-2 z-10 h-8 w-8 bg-black/70 rounded-full flex items-center justify-center text-sm font-bold border-2 border-gray-600 group-hover:border-blue-500 transition-colors">
        {player.jerseyNumber}
      </div>

      <div className="aspect-[4/5] relative bg-gray-900">
        {player.photoUrl && (
          <Image
            src={player.photoUrl}
            alt={`Photo of ${player.name}`}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
          />
        )}

        {!player.photoUrl && (
          <div className="w-full h-full flex items-center justify-center">
            <UserCircle className="w-1/2 h-1/2 text-gray-600" />
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg truncate">{player.name}</h3>
        <p className="text-sm text-gray-400">{player.position}</p>
      </div>
    </motion.div>
  );
};

export default PlayerCard;
