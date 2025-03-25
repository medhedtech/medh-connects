
import { Button } from "@/components/ui/button";
import { useFinancialSupportForm } from "@/hooks/useFinancialSupportForm";
import { CreditCard } from "lucide-react";

interface ApplicationButtonProps {
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

const ApplicationButton = ({ 
  variant = "default", 
  size = "default",
  className 
}: ApplicationButtonProps) => {
  const { openForm } = useFinancialSupportForm();
  
  return (
    <Button 
      onClick={openForm}
      variant={variant}
      size={size}
      className={className}
    >
      <CreditCard className="mr-2 h-4 w-4" />
      Online Application for Financial Support
    </Button>
  );
};

export default ApplicationButton;
