import { cn } from "@/lib/utils"

export const TypographyH3 = ({ className, children }: React.HTMLAttributes<HTMLHeadingElement>) => {
  return <h3 className={cn("mt-8 scroll-m-20 text-2xl font-semibold tracking-tight", className)}>{children}</h3>
}
