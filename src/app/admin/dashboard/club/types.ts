interface Player {
  id: number;
  name: string;
  jersey: number;
  position: string;
  date_of_birth: string;
  nationality: string;
  height?: number;
  weight?: number;
  is_active: boolean;
  joined_at: string;
}
export type { Player };
