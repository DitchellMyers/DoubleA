import { cn } from "@/lib/utils"

export const TypographyP = ({ className, children }: React.HTMLAttributes<HTMLParagraphElement>) => {
  return <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>{children}</p>
}
