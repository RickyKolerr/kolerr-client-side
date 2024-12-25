import React, { Suspense } from 'react';
import { Routes as RouterRoutes, Route } from 'react-router-dom';
import { Skeleton } from "@/components/ui/skeleton";

// Lazy load route components
const Index = React.lazy(() => import('@/pages/Index'));
const KOLs = React.lazy(() => import('@/pages/KOLs'));
const Brands = React.lazy(() => import('@/pages/Brands'));
const Campaigns = React.lazy(() => import('@/pages/Campaigns'));
const AboutUs = React.lazy(() => import('@/pages/AboutUs'));
const Pricing = React.lazy(() => import('@/pages/Pricing'));
const Contact = React.lazy(() => import('@/pages/Contact'));

// Loading fallback component
const PageLoader = () => (
  <div className="container mx-auto p-4 space-y-4">
    <Skeleton className="h-8 w-[250px]" />
    <Skeleton className="h-[200px] w-full" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {[1, 2, 3].map((i) => (
        <Skeleton key={i} className="h-[300px]" />
      ))}
    </div>
  </div>
);

export const Routes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <RouterRoutes>
        <Route path="/" element={<Index />} />
        <Route path="/kols" element={<KOLs />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </RouterRoutes>
    </Suspense>
  );
};