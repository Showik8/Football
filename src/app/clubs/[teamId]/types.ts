// lib/types.ts
import type { StaticImageData } from 'next/image';

/**
 * player interface
 */
export interface Player {
  id: number;
  name: string;
  age: number;
  position: 'Goalkeeper' | 'Defender' | 'Midfielder' | 'Forward';
  nationality: string;
  jerseyNumber: number;
  photoUrl: string | StaticImageData;
}

/**
 * squad statistic card interface
 */
export interface SquadStatCard {
  label: string;
  value: number | string;
  icon: string;
}

/**
 * squad performance stats interface
 */
export interface SquadPerformanceStats {
  matchesPlayed: number;
  goalsScored: number;
  cleanSheets: number;
  winRate: number;
}

/**
 * squad interface
 */
export type Squad = {
  category: string;
  players: Player[];
  stats?: SquadPerformanceStats;
};

/**
 * team page data interface
 */
export interface TeamPageData {
  teamName: string;
  academyName?: string;
  logoUrl: string | StaticImageData;
  squads: Squad[];
  squadStats: SquadStatCard[];
}