import { cn } from "@/lib/utils"

export const TypographyH2 = ({ className, children }: React.HTMLAttributes<HTMLHeadingElement>) => {
  return <h2 className={cn("mt-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0", className)}>{children}</h2>
}
