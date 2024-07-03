import React, { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";

type Props = {};

const Provider = ({ children }: PropsWithChildren) => {
  return (
    <div>
      {children}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Provider;
