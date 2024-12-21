import Navbar from "@/components/Navbar";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
        <p className="text-gray-400">Get in touch with our team for support and inquiries.</p>
      </div>
    </div>
  );
};

export default Contact;