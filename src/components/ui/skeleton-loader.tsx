import { Skeleton } from "@/components/ui/skeleton";

export const BenefitsSkeleton = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg animate-pulse">
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-4 w-full" />
        </div>
      ))}
    </div>
  );
};

export const KOLCardSkeleton = () => {
  return (
    <div className="p-6 rounded-lg border animate-pulse space-y-4">
      <div className="flex justify-center">
        <Skeleton className="h-24 w-24 rounded-full" />
      </div>
      <Skeleton className="h-6 w-3/4 mx-auto" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
      <Skeleton className="h-10 w-full" />
    </div>
  );
};

export const ContentSkeleton = () => {
  return (
    <div className="space-y-4 animate-pulse">
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-4 w-4/6" />
    </div>
  );
};