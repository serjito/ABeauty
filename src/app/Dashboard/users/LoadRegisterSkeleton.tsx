import { Skeleton } from '@/components/ui/skeleton';

export function LoadRegisterSkeleton() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center space-y-4 my-4 bg-zinc-900 rounded-lg text-zinc-100">
      <Skeleton className="h-full w-full rounded-lg" /> {/* Simula el título */}
      <div className="flex flex-col space-y-2">
        {/* Simula los encabezados de la tabla */}
        <div className="flex space-x-4">
          <Skeleton className="h-[50px] w-[100px] rounded-lg" />
          <Skeleton className="h-[50px] w-[200px] rounded-lg" />
          <Skeleton className="h-[50px] w-[200px] rounded-lg" />
          <Skeleton className="h-[50px] w-[100px] rounded-lg" />
          <Skeleton className="h-[50px] w-[100px] rounded-lg" />
        </div>
        {/* Simula las filas de la tabla */}
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <div key={index} className="flex space-x-4">
              <Skeleton className="h-[50px] w-[100px] rounded-lg" />
              <Skeleton className="h-[50px] w-[200px] rounded-lg" />
              <Skeleton className="h-[50px] w-[200px] rounded-lg" />
              <Skeleton className="h-[50px] w-[100px] rounded-lg" />
              <Skeleton className="h-[50px] w-[100px] rounded-lg" />
            </div>
          ))}
      </div>
      {/* Simula el pie de página de la tabla */}
      <div className="flex justify-between bg-zinc-700 rounded-lg p-2">
        <Skeleton className="h-[50px] w-[200px] rounded-lg" />
        <Skeleton className="h-[50px] w-[50px] rounded-lg" />
      </div>
    </div>
  );
}
