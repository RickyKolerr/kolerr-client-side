import { ChatWindow } from "@/components/chat/ChatWindow";
import { ContractForm } from "@/components/contracts/ContractForm";
import { ContractHandleBar } from "@/components/contracts/ContractHandleBar";

const Communication = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent mb-8">
          Communication & Contracts
        </h1>
        <div className="grid gap-8">
          <div className="grid md:grid-cols-2 gap-8">
            <ChatWindow />
            <ContractForm />
          </div>
          <div>
            <ContractHandleBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communication;