import { cn } from "@/lib/utils"

export const Container = ({ children, className }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn("container mx-auto", className)}>{children}</div>
}
