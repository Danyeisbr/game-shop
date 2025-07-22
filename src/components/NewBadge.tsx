import { NEW_LABEL } from "@/constants/texts";

export default function NewBadge() {
  return (
    <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs rounded font-medium">
      {NEW_LABEL}
    </span>
  );
}
