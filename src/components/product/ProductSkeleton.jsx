const ProductSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
      {/* Image placeholder */}
      <div className="relative aspect-[3/4] animate-pulse bg-zinc-800" />

      {/* Content placeholder */}
      <div className="space-y-3 p-5">
        <div className="h-4 w-1/3 animate-pulse rounded-full bg-zinc-800" />
        <div className="h-5 w-4/5 animate-pulse rounded-md bg-zinc-800" />
        <div className="flex items-center gap-1.5">
          <div className="h-3.5 w-3.5 animate-pulse rounded-full bg-zinc-800" />
          <div className="h-3.5 w-8 animate-pulse rounded-md bg-zinc-800" />
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-4 w-4 animate-pulse rounded-full bg-zinc-800" />
          <div className="h-4 w-4 animate-pulse rounded-full bg-zinc-800" />
        </div>
        <div className="flex items-center justify-between pt-1">
          <div className="h-6 w-16 animate-pulse rounded-md bg-zinc-800" />
        </div>
        <div className="h-11 w-full animate-pulse rounded-xl bg-zinc-800" />
      </div>
    </div>
  );
};

export default ProductSkeleton;
