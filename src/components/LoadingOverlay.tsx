import LoadingSpinner from "./LoadingSpinner";

export default function LoadingOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 z-10">
      <LoadingSpinner />
    </div>
  );
}
