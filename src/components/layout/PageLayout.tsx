import React, { FunctionComponent, PropsWithChildren } from "react";
import Header from "./Header";

const PageLayout: FunctionComponent<PropsWithChildren> = ({ children }: PropsWithChildren) => {
  return (
    <div className='h-screen container px-4 mx-auto flex flex-col gap-4'>
      <Header />
      {children}
    </div>
  );
}

export default PageLayout;