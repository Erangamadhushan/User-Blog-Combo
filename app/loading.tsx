import { Skeleton } from "@/components/ui/skeleton";

export function LargeSkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[550px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}

export function SmallSkeletonCard() {
  return (
    <div className="flex flex-col space-y-2">
        <Skeleton className="h-8 w-8 rounded-full" />
        <Skeleton className="h-4 w-[250px]" />
    </div>
  );
}

export default function LoadingPage() {
  return (
    <main className="min-h-[80vh] dark:bg-black bg-white py-12">
      <div className="max-w-4xl mx-auto px-6 space-y-6">
        <LargeSkeletonCard />
      </div>
      <div className="max-w-4xl mx-auto px-6 space-y-6">
        <LargeSkeletonCard />
      </div>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto px-6 mt-12">
        {Array.from({ length: 6 }).map((_, index) => (
          <SmallSkeletonCard key={index} />
        ))}
      </div>
    </main>
  );
}
