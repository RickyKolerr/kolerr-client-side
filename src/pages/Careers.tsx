import Navbar from "@/components/Navbar";

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-6">Careers at Kolerr</h1>
        <p className="text-gray-400 mb-8">
          Join our team and help shape the future of influencer marketing in Vietnam.
        </p>
        <div className="grid gap-6">
          <div className="bg-card p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">No Open Positions</h2>
            <p className="text-gray-400">
              We currently don't have any open positions, but we're always looking for talented
              individuals. Feel free to send your resume to careers@kolerr.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;