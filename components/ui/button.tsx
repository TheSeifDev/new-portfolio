import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-xs font-semibold uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold disabled:pointer-events-none disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        // Gold gradient filled CTA matching "LET'S BUILD →"
        gold: "bg-[linear-gradient(180deg,#D4AF77_0%,#C59A5A_32%,#BA8D54_55%,#9A6E32_82%,#8D6328_100%)] text-[#FBF9F5] shadow-[0_2px_10px_rgba(154,110,50,0.28)] border border-[#E9D7B7]/40 hover:brightness-105 hover:shadow-[0_4px_16px_rgba(154,110,50,0.42)] active:scale-[0.98]",
        
        // Outlined gold matching "SEE MY WORK →"
        outlineGold: "border border-[#C69441]/60 bg-white/40 text-[#272E3B] backdrop-blur-[2px] shadow-sm hover:border-[#C69441] hover:bg-[#C69441]/10 hover:text-[#12161F] active:scale-[0.98]",
        
        // Ghost text-only matching "DOWNLOAD CV ↓"
        ghostText: "text-[#272E3B] hover:text-gold hover:bg-transparent font-medium tracking-[0.14em] hover:underline hover:underline-offset-4",
        
        // Default standard shadcn fallback
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-border bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 rounded-md tracking-[0.14em]",
        sm: "h-8 px-3 text-[10.5px] rounded-md tracking-[0.14em]",
        lg: "h-10 px-6 rounded-md tracking-[0.16em]",
        icon: "h-9 w-9 rounded-md",
        nav: "h-[34px] px-5 rounded-[6px] text-[11px] tracking-[0.14em]",
      },
    },
    defaultVariants: {
      variant: "gold",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
