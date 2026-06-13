import Image from "next/image";
import { SITE_CONFIG } from "@/constants/site";
import { cn } from "@/lib/utils";

interface ProfileImageProps {
  className?: string;
  priority?: boolean;
  overlay?: boolean;
}

export function ProfileImage({
  className,
  priority = false,
  overlay = true,
}: ProfileImageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-black",
        className
      )}
    >
      <Image
        src={SITE_CONFIG.profileImage}
        alt={SITE_CONFIG.profileImageAlt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 384px"
        className="object-cover object-[center_18%]"
        quality={90}
      />
      {overlay && (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.08] via-transparent to-transparent" />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
        </>
      )}
    </div>
  );
}
