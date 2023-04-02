import { cn } from "@/lib/utils"

export const TypographyBlockquote = ({ className, children }: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => {
  return <blockquote className={cn("mt-6 border-l-2 border-slate-300 pl-6 italic ", className)}>{children}</blockquote>
}
