export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center min-h-64">
      <div
        data-testid="loading-spinner"
        className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"
      />
    </div>
  );
}
