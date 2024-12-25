import Navbar from "@/components/Navbar";
import { KOLFilters } from "@/components/kol-filters/KOLFilters";
import KOLCard from "@/components/KOLCard";

const KOLs = () => {
  const kols = [
    {
      id: "kol-1",
      name: "Alex Johnson",
      image: "https://i.pravatar.cc/150?img=1",
      followers: "1.2M",
      engagement: "8.5%",
      expertise: "Tech & Gaming",
      socialLinks: [
        { platform: "instagram", url: "https://instagram.com/techalex" },
        { platform: "tiktok", url: "https://tiktok.com/@techalex" },
        { platform: "twitter", url: "https://twitter.com/techalex" },
        { platform: "facebook", url: "https://facebook.com/techalex" }
      ]
    },
    {
      id: "kol-2",
      name: "Sarah Lee",
      image: "https://i.pravatar.cc/150?img=5",
      followers: "980K",
      engagement: "7.2%",
      expertise: "Lifestyle & Fashion",
    },
    {
      id: "kol-3",
      name: "Michael Brown",
      image: "https://i.pravatar.cc/150?img=8",
      followers: "1.5M",
      engagement: "9.1%",
      expertise: "Food & Travel",
    },
    {
      id: "kol-4",
      name: "Linh Nguyen",
      image: "https://i.pravatar.cc/150?img=10",
      followers: "2.1M",
      engagement: "10.2%",
      expertise: "Beauty & Lifestyle",
    },
    {
      id: "kol-5",
      name: "Minh Tran",
      image: "https://i.pravatar.cc/150?img=12",
      followers: "850K",
      engagement: "8.9%",
      expertise: "Technology Reviews",
    },
    {
      id: "kol-6",
      name: "Hoa Pham",
      image: "https://i.pravatar.cc/150?img=15",
      followers: "1.8M",
      engagement: "9.5%",
      expertise: "Fashion & Beauty",
    },
    {
      id: "kol-7",
      name: "Duc Le",
      image: "https://i.pravatar.cc/150?img=20",
      followers: "750K",
      engagement: "11.2%",
      expertise: "Gaming & Esports",
    },
    {
      id: "kol-8",
      name: "Mai Thi",
      image: "https://i.pravatar.cc/150?img=25",
      followers: "1.3M",
      engagement: "8.7%",
      expertise: "Cooking & Lifestyle",
    },
    {
      id: "kol-9",
      name: "Thanh Dao",
      image: "https://i.pravatar.cc/150?img=30",
      followers: "920K",
      engagement: "9.8%",
      expertise: "Travel & Culture",
    },
    {
      id: "kol-10",
      name: "Anh Nguyen",
      image: "https://i.pravatar.cc/150?img=35",
      followers: "1.6M",
      engagement: "7.9%",
      expertise: "Business & Finance",
    },
    {
      id: "kol-11",
      name: "Trang Le",
      image: "https://i.pravatar.cc/150?img=40",
      followers: "680K",
      engagement: "12.3%",
      expertise: "Health & Fitness",
    },
    {
      id: "kol-12",
      name: "Hung Vu",
      image: "https://i.pravatar.cc/150?img=45",
      followers: "1.1M",
      engagement: "8.4%",
      expertise: "Education & Career",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
            Key Opinion Leaders
          </h1>
          <p className="text-muted-foreground">
            Connect with top Vietnamese influencers for your brand campaigns
          </p>

          <KOLFilters />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kols.map((kol) => (
              <KOLCard
                key={kol.id}
                {...kol}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KOLs;