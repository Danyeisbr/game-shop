import type { CatalogErrorProps } from "@/types";
import { TRY_AGAIN } from "@/constants/texts";

export default function CatalogError({ message, onRetry }: CatalogErrorProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <p className="text-red-600 mb-4">{message}</p>
        <button
          onClick={onRetry}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {TRY_AGAIN}
        </button>
      </div>
    </div>
  );
}
