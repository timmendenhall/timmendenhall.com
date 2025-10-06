import React from 'react';

import { WorkInfo } from '@/components/WorkInfo';
import { WorkInfoRow } from '@/components/WorkInfoRow';

export const VSP = () => {
    return (
        <section className="">
            <h2>Member Portal</h2>

            <WorkInfo>
                <WorkInfoRow name="Role" value="Front-end Developer" />
                <WorkInfoRow name="Platforms" value="Web" />
                <WorkInfoRow name="Technology" value="Angular 5+" />
                <WorkInfoRow name="Status" value="Live" />
            </WorkInfo>

            <p>
                This was my first project while employed for Bounteous. I was able to
                help work in the Angular fresh build of VSP's member portal. I got to
                take on new features such as customer registration, member information
                editing, social media integration and more.
            </p>
            <p>
                Some challenges on this project included working with the back-end teams
                to ensure API integrity and accuracy. To achieve this we had to manage
                API status per feature and endpoint and work with back end teams to get
                things production ready. In addition, we setup convenient ways to return
                mock responses if critical services ever went down.
            </p>
        </section>
    );
};
