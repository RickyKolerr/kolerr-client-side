import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Press = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-6">Press</h1>
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Press Releases</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Kolerr Launches in Vietnam</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Revolutionary platform connects brands with key opinion leaders in Vietnam's growing
                    influencer marketing space.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Media Kit</h2>
            <p className="text-gray-400">
              For media inquiries, please contact our press team at press@kolerr.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Press;