import type { EmptyCatalogProps } from "@/types";

export default function EmptyCatalog({ message }: EmptyCatalogProps) {
  return (
    <div className="text-center py-8">
      <p className="text-gray-500">{message}</p>
    </div>
  );
}
