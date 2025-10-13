function Successful() {
  return (
    <>
      <div className="mt-6 mx-auto max-w-md flex items-center justify-center  rounded-lg bg-green-50 p-4 sm:p-6 border border-green-200 shadow-sm animate-fade-in">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg
                className="h-6 w-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-base font-semibold text-green-800 sm:text-lg">
                Registration Successful!
              </p>
              <p className="mt-1 text-sm text-green-700">
                Your account has been created. Welcome aboard!
              </p>
            </div>
          </div>
          <button
            className="flex-shrink-0 rounded-full p-1 text-green-600 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            aria-label="Close alert"
          ></button>
        </div>
      </div>
    </>
  );
}
export default Successful;
