import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb";
import Navbar from "@/components/Navbar";

const Team = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      image: "https://i.pravatar.cc/150?img=1",
      bio: "Experienced leader in digital marketing and influencer partnerships."
    },
    {
      name: "Jane Smith",
      role: "CTO",
      image: "https://i.pravatar.cc/150?img=2",
      bio: "Tech veteran with expertise in AI and platform development."
    },
    {
      name: "Mike Johnson",
      role: "Head of Partnerships",
      image: "https://i.pravatar.cc/150?img=3",
      bio: "10+ years experience in building strategic partnerships."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/about">About</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbPage>Team</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="mt-8">
          <h1 className="text-4xl font-bold text-white mb-8">Our Team</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-card rounded-lg p-6 shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-white text-center">{member.name}</h3>
                <p className="text-muted-foreground text-center mb-2">{member.role}</p>
                <p className="text-gray-400 text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Team;