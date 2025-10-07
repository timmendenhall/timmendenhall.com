'use client';

import React, { useState, useMemo } from 'react';
import { WorkItem } from '@/components/WorkItem';
import { ATI } from './ATI';
import { Mars } from './Mars';
import { Caesars } from './Caesars';
import { VSP } from './VSP';
import { PageContainer } from '../PageContainer';

export const Work = () => {
    const [selectedWorkItem, setSelectedWorkItem] = useState<string>('ati');

    const WorkContent = useMemo(() => {
        switch (selectedWorkItem) {
            case 'ati':
                return <ATI />;
            case 'mars':
                return <Mars />;
            case 'caesars':
                return <Caesars />;
            case 'vsp':
                return <VSP />;
            default:
                return null;
        }
    }, [selectedWorkItem]);

    const handleClickWorkItem = (workItem: string) => {
        setSelectedWorkItem(workItem);
    };

    return (
        <PageContainer>
            <h1 className="py-8 text-5xl font-bold">Work</h1>
            <div className="mb-3 flex flex-row flex-wrap justify-center gap-3">
                <WorkItem
                    shortName="ati"
                    longName="ATI Physical Therapy"
                    onClick={handleClickWorkItem}
                    isActive={'ati' === selectedWorkItem}
                />
                <WorkItem
                    shortName="mars"
                    longName="Mars"
                    onClick={handleClickWorkItem}
                    isActive={'mars' === selectedWorkItem}
                />
                <WorkItem
                    shortName="caesars"
                    longName="Caesars"
                    onClick={handleClickWorkItem}
                    isActive={'caesars' === selectedWorkItem}
                />
                <WorkItem
                    shortName="vsp"
                    longName="VSP"
                    onClick={handleClickWorkItem}
                    isActive={'vsp' === selectedWorkItem}
                />
            </div>
            <div className="work__work-item-content-container max-w-2xl">
                {WorkContent}
            </div>
        </PageContainer>
    );
};
