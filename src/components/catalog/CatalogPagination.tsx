import PaginationButton from "@/components/shared/PaginationButton";
import LoadingOverlay from "@/components/shared/LoadingOverlay";
import type { CatalogPaginationProps } from "@/types";
import { SEE_MORE } from "@/constants/resources";

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
