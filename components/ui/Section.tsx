import { cn } from "@/lib/utils"

interface ISection extends React.HTMLAttributes<HTMLElement> {
  direction?: "vertical" | "horizontal"
  center?: boolean
}

export const Section = ({ children, className, direction = "vertical", center }: ISection) => {
  return (
    <section className={cn("flex flex-col space-y-12", center && "items-center justify-center", className)}>
      {children}
    </section>
  )
}
