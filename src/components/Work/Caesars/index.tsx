import React from 'react';

import { WorkInfo } from '@/components/WorkInfo';
import { WorkInfoRow } from '@/components/WorkInfoRow';

export const Caesars = () => {
    return (
        <section className="flex flex-col items-center">
            <h2 className="text-3xl font-bold">Booking Engine</h2>

            <WorkInfo>
                <WorkInfoRow name="Role" value="Front-end Developer" />
                <WorkInfoRow name="Platform" value="Web" />
                <WorkInfoRow name="Technology" value="React" />
            </WorkInfo>

            <p className="py-3">
                This project was pretty well established and live already when I
                joined the team. But, I was able to quickly jump in and help
                with bug fixes and new features alike. I was a co-developer on a
                new Rewards system look and feel that went into an A/B test and
                became permanent after an increase in sales.
            </p>
        </section>
    );
};
