import React, { Suspense } from 'react';
import { LoadRegisterSkeleton } from './LoadRegisterSkeleton';
import Registros from './LoadRegisters';

function page() {
  return (
    <div>
      <Suspense fallback={<LoadRegisterSkeleton />}>
        <Registros />
      </Suspense>
    </div>
  );
}

export default page;
