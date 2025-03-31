
import { Button } from "@/components/ui/button";
import { useFinancialSupportForm } from "@/hooks/useFinancialSupportForm";
import { CreditCard, BookOpen, UserRound } from "lucide-react";

type SupportType = "education" | "upskilling";

interface ApplicationButtonProps {
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  type?: SupportType;
}

const ApplicationButton = ({ 
  variant = "default", 
  size = "default",
  className,
  type = "education"
}: ApplicationButtonProps) => {
  const { openForm } = useFinancialSupportForm();
  
  const handleClick = () => {
    openForm(type);
  };

  return (
    <Button 
      onClick={handleClick}
      variant={variant}
      size={size}
      className={className}
    >
      {type === "education" ? (
        <>
          <BookOpen className="mr-2 h-4 w-4" />
          Financial Support for Education
        </>
      ) : (
        <>
          <UserRound className="mr-2 h-4 w-4" />
          Upskilling and Job Assistance for Single Mothers
        </>
      )}
    </Button>
  );
};

export default ApplicationButton;
