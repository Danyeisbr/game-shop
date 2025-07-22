import type { PaginationButtonProps } from "@/types";

export default function PaginationButton({
  loading,
  onClick,
  children,
}: PaginationButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="w-full md:w-auto bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? "" : children}
    </button>
  );
}
