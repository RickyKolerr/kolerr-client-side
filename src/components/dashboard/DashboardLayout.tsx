import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserType } from "@/utils/userTypeUtils";
import { BrandDashboard } from "./brand/BrandDashboard";
import { AgencyDashboard } from "./agency/AgencyDashboard";
import { KOLDashboard } from "./kol/KOLDashboard";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export function DashboardLayout() {
  const navigate = useNavigate();
  const userType = getUserType();
  const { toast } = useToast();

  useEffect(() => {
    if (!userType) {
      navigate("/auth/login");
      return;
    }

    const welcomeMessages = {
      brand: "Welcome to your Brand Dashboard! Ready to launch impactful campaigns?",
      agency: "Welcome back to your Agency Dashboard! Let's manage your client campaigns.",
      kol: "Welcome to your KOL Dashboard! Let's explore new opportunities."
    };

    toast({
      title: `Welcome back!`,
      description: welcomeMessages[userType],
      duration: 3000,
    });
  }, [userType, navigate, toast]);

  if (!userType) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-background to-background/80"
    >
      {userType === "brand" && <BrandDashboard />}
      {userType === "agency" && <AgencyDashboard />}
      {userType === "kol" && <KOLDashboard />}
    </motion.div>
  );
}