import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-6">Blog</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>The Future of Influencer Marketing in Vietnam</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Exploring the trends and opportunities in Vietnam's growing influencer marketing landscape.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>How to Choose the Right KOL for Your Brand</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                A comprehensive guide to selecting the perfect influencer for your campaign.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog;