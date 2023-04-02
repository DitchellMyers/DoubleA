import { cn } from "@/lib/utils"

interface ISection extends React.HTMLAttributes<HTMLElement> {
  direction?: "vertical" | "horizontal"
}

export const Section = ({ children, className, direction = "vertical" }: ISection) => {
  return <section className={cn("flex flex-col items-center justify-center space-y-12", className)}>{children}</section>
}
