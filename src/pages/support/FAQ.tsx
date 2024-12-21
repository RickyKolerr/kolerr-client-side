import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
            <div className="space-y-6">
              {[
                {
                  question: "How do I create a campaign?",
                  answer: "Navigate to the Campaigns section and click on 'Create New Campaign'. Follow the step-by-step guide to set up your campaign."
                },
                {
                  question: "How do payments work?",
                  answer: "We support various payment methods including bank transfer and credit cards. Payments are processed securely through our platform."
                }
              ].map((faq, index) => (
                <Card key={index} className="p-4">
                  <h3 className="text-xl font-semibold">{faq.question}</h3>
                  <p className="mt-2">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FAQ;