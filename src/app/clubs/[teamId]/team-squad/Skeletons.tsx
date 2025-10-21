// components/team-squad/Skeletons.tsx
const Shimmer = () => (
  <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-gray-600/50 to-transparent" />
);

const StatCardSkeleton = () => (
  <div className="relative overflow-hidden p-4 bg-gray-800 rounded-lg">
    <div className="h-6 w-3/4 bg-gray-700 rounded-md mb-2" />
    <div className="h-8 w-1/2 bg-gray-700 rounded-md" />
    <Shimmer />
  </div>
);

const PlayerCardSkeleton = () => (
  <div className="relative overflow-hidden bg-gray-800 rounded-lg">
    <div className="h-60 w-full bg-gray-700" />
    <div className="p-4">
      <div className="h-6 w-3/4 bg-gray-700 rounded-md mb-3" />
      <div className="h-4 w-1/2 bg-gray-700 rounded-md" />
    </div>
    <Shimmer />
  </div>
);

export const SquadPageSkeleton = () => {
  return (
    <div className="container mx-auto p-4 animate-pulse">
      {/* Header Skeleton */}
      <div className="h-12 w-1/3 bg-gray-700 rounded-md mb-8 mx-auto" />

      {/* Stats Skeleton */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[...Array(4)].map((_, i) => <StatCardSkeleton key={i} />)}
      </div>
      
      {/* Filter Skeleton */}
      <div className="flex justify-center gap-2 mb-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-10 w-24 bg-gray-700 rounded-full" />
        ))}
      </div>

      {/* Player Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => <PlayerCardSkeleton key={i} />)}
      </div>
    </div>
  );
};