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
        <div className="min-h-[80vh] flex items-center justify-center">
            <LargeSkeletonCard />
        </div>
    );
}