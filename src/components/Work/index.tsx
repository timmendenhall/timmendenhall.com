'use client';

import React, { useState, useMemo } from 'react';
import { WorkItem } from '@/components/WorkItem';
import { ATI } from './ATI';
import { Mars } from './Mars';
import { Caesars } from './Caesars';
import { VSP } from './VSP';

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
        <section className="page__container work__background" id="work">
            <h1>Work</h1>
            <div className="work__container">
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
            <div className="work__work-item-content-container">{WorkContent}</div>
        </section>
    );
};
