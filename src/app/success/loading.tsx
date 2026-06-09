export default function SuccessLoading() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-dark-500 border-t-accent rounded-full animate-spin" />
        <p className="text-dark-300 text-sm">Loading...</p>
      </div>
    </div>
  );
}
