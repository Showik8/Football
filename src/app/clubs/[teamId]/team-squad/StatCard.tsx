"use client";

import { motion } from "framer-motion";
import type { LucideProps } from "lucide-react";
import { useCountUp } from "../useCountUp";

type StatCardProps = {
  icon: React.ElementType<LucideProps>;
  label: string;
  value: string | number;
  suffix?: string;
};

const StatCard = ({ icon: Icon, label, value, suffix }: StatCardProps) => {
  const animatedValue = useCountUp(Number(value), 1500, true);

  return (
    <motion.div
      className="bg-white/5 rounded-xl p-4 flex items-center gap-4 border border-white/10"
      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="bg-blue-500/10 p-3 rounded-lg">
        <Icon className="h-6 w-6 text-blue-400" />
      </div>
      <div>
        <p className="text-2xl font-bold">
          {animatedValue}
          {suffix && <span className="text-xl font-bold">{suffix}</span>}
        </p>
        <p className="text-xs text-gray-400 uppercase tracking-wider">
          {label}
        </p>
      </div>
    </motion.div>
  );
};

export default StatCard;
