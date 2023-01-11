import React from 'react';
import { Suspense } from 'react';

export const Loadable =
  (Component: any) =>
  (props: JSX.IntrinsicAttributes): JSX.Element => {
    return (
      <Suspense fallback={<>Loading</>}>
        <Component {...props} />
      </Suspense>
    );
  };
