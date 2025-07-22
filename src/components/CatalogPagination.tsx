import LoadingSpinner from "./LoadingSpinner";
import { SEE_MORE } from "@/constants/texts";

interface CatalogPaginationProps {
  loading: boolean;
  hasMore: boolean;
  onSeeMore: () => void;
}

export default function CatalogPagination({
  loading,
  hasMore,
  onSeeMore,
}: CatalogPaginationProps) {
  if (!hasMore) return null;

  return (
    <div className="relative">
      <button
        onClick={onSeeMore}
        disabled={loading}
        className="w-full md:w-auto bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "" : SEE_MORE}
      </button>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 z-10">
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
}
