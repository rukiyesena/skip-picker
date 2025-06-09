
export default function PostCode({ onNext, onBack }) {
  return (
    <div className="p-4 text-center">
      <h1 className="text-xl font-bold mb-4">Select Post Code</h1>
      <div className="gap-2 sm:ml-auto w-full sm:w-auto">
         <button
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-700 transition w-full sm:w-auto"
          onClick={onNext}
        >
          Continue
        </button>
      </div>

    </div>
  )
}
