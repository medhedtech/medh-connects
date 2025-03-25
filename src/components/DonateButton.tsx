
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface DonateButtonProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
}

const DonateButton = ({ 
  className, 
  size = "md",
  variant = "primary" 
}: DonateButtonProps) => {
  const sizeClasses = {
    sm: "text-sm py-1.5 px-4",
    md: "py-2.5 px-6",
    lg: "text-lg py-3 px-8"
  };
  
  const variantClasses = {
    primary: "bg-primary-green hover:bg-primary-green/90",
    secondary: "bg-secondary-orange hover:bg-secondary-orange/90",
  };
  
  return (
    <a 
      href="/get-involved"
      className={cn(
        "inline-flex items-center gap-2 text-white font-medium rounded-full transition-all hover:shadow-lg hover:translate-y-[-2px] active:translate-y-[0]",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      <Heart className="w-4 h-4" />
      <span>Donate Now</span>
    </a>
  );
};

export default DonateButton;
