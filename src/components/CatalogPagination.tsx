import type { CatalogPaginationProps } from "@/types";
import PaginationButton from "./PaginationButton";
import LoadingOverlay from "./LoadingOverlay";
import { SEE_MORE } from "@/constants/texts";

export default function CatalogPagination({
  loading,
  hasMore,
  onSeeMore,
}: CatalogPaginationProps) {
  if (!hasMore) return null;

  return (
    <div className="relative">
      <PaginationButton loading={loading} onClick={onSeeMore}>
        {SEE_MORE}
      </PaginationButton>
      {loading && <LoadingOverlay />}
    </div>
  );
}
