import { cn } from "@/lib/utils"

interface TypographyH1Props extends React.HTMLAttributes<HTMLHeadingElement> {
  center?: boolean
  highlight?: boolean
}

export const TypographyH1 = ({ className, children, center, highlight }: TypographyH1Props) => {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        center && "text-center",
        highlight && "drop-shadow-glow2",
        className
      )}
    >
      {children}
    </h1>
  )
}
