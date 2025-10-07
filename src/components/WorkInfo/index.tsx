import React, { ReactNode } from 'react';

export const WorkInfo = ({ children }: { children: ReactNode }) => {
    return <div className="flex flex-col">{children}</div>;
};
