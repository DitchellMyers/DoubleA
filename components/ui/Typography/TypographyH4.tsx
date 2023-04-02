import { cn } from "@/lib/utils"

export const TypographyH4 = ({ className, children }: React.HTMLAttributes<HTMLHeadingElement>) => {
  return <h4 className={cn("mt-8 scroll-m-20 text-xl font-semibold tracking-tight", className)}>{children}</h4>
}
