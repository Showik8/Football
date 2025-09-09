const StatisticCardSkeleton: React.FC = () => {
  return (
    <div className="group relative">
      {/* Card Container */}
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-100 min-h-[280px] animate-pulse">
        {/* Header skeleton */}
        <div className="bg-gradient-to-r from-gray-300 to-gray-400 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
              <div className="h-5 w-32 bg-gray-400 rounded"></div>
            </div>
            <div className="text-right">
              <div className="h-6 w-8 bg-gray-400 rounded"></div>
              <div className="h-3 w-16 bg-gray-400 rounded mt-1"></div>
            </div>
          </div>
        </div>

        {/* Players List skeleton */}
        <div className="p-4">
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`
                  flex items-center justify-between p-4 rounded-xl
                  ${
                    i === 0
                      ? "bg-gradient-to-r from-gray-300 to-gray-400"
                      : "bg-gray-100"
                  }
                `}
              >
                {/* Player Info skeleton */}
                <div className="flex items-center space-x-3 flex-1">
                  {/* Rank Badge skeleton */}
                  <div className="w-8 h-8 bg-gray-400 rounded-full"></div>

                  {/* Player Name skeleton */}
                  <div className="flex-1">
                    <div className="h-4 w-24 bg-gray-400 rounded mb-1"></div>
                    <div className="h-3 w-12 bg-gray-400 rounded"></div>
                  </div>
                </div>

                {/* Statistic Value skeleton */}
                <div className="w-12 h-6 bg-gray-400 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative elements skeleton */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gray-200 rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gray-200 rounded-tr-full" />
      </div>
    </div>
  );
};

export default StatisticCardSkeleton;
