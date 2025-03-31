
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface DonateButtonProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
  showPopover?: boolean;
}

const DonateButton = ({ 
  className, 
  size = "md",
  variant = "primary",
  showPopover = false
}: DonateButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const sizeClasses = {
    sm: "text-sm py-1.5 px-4",
    md: "py-2.5 px-6",
    lg: "text-lg py-3 px-8"
  };
  
  const variantClasses = {
    primary: "bg-primary-green hover:bg-primary-green/90",
    secondary: "bg-secondary-orange hover:bg-secondary-orange/90",
  };
  
  if (showPopover) {
    return (
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger>
          <button 
            className={cn(
              "inline-flex items-center gap-2 text-white font-medium rounded-full transition-all hover:shadow-lg hover:translate-y-[-2px] active:translate-y-[0]",
              sizeClasses[size],
              variantClasses[variant],
              className
            )}
          >
            <Heart className="w-4 h-4" />
            <span>Donate Now</span>
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Make a Difference Today</h4>
            <p className="text-sm text-gray-600">
              Your donation helps us provide education to children and skill development to single mothers.
            </p>
            <div className="grid grid-cols-2 gap-2">
              <a 
                href="/get-involved#donate" 
                className="bg-primary-green text-white text-center py-2 rounded-md hover:bg-primary-green/90 transition-colors"
              >
                One-time Gift
              </a>
              <a 
                href="/get-involved#donate" 
                className="bg-secondary-orange text-white text-center py-2 rounded-md hover:bg-secondary-orange/90 transition-colors"
              >
                Monthly Support
              </a>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    );
  }
  
  return (
    <a 
      href="/get-involved#donate"
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
