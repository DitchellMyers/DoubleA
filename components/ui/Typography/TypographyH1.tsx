import { cn } from "@/lib/utils"

export const TypographyH1 = ({ className, children }: React.HTMLAttributes<HTMLHeadingElement>) => {
  return <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)}>{children}</h1>
}
