import type { CatalogPaginationProps } from "@/types";
import PaginationButton from "./PaginationButton";
import { SEE_MORE } from "@/constants/resources";
import LoadingOverlay from "./LoadingOverlay";

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
