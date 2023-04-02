import { cn } from "@/lib/utils"

export const TypographyList = ({ className, children }: React.HTMLAttributes<HTMLUListElement>) => {
  return <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}>{children}</ul>
}
