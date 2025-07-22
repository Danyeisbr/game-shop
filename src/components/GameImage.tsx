import type { GameImageProps } from "@/types";
import Image from "next/image";

export default function GameImage({
  src,
  alt,
  priority = false,
}: GameImageProps & { priority?: boolean }) {
  return (
    <div className="relative w-full h-48">
      <Image
        src={src ?? "/placeholder.svg?height=200&width=300"}
        alt={alt}
        fill
        className="object-cover rounded-t-lg"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
        priority={priority}
      />
    </div>
  );
}
