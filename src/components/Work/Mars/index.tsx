import React from 'react';

import { WorkInfo } from '@/components/WorkInfo';
import { WorkInfoRow } from '@/components/WorkInfoRow';

export const Mars = () => {
    return (
        <section className="flex flex-col items-center">
            <h2 className="text-3xl font-bold">Treat Town</h2>

            <WorkInfo>
                <WorkInfoRow name="Client" value="Mars - Bounteous Client" />
                <WorkInfoRow name="Role" value="Front-end Architect" />
                <WorkInfoRow name="Platforms" value="iOS, Android, Web" />
                <WorkInfoRow
                    name="Technology"
                    value="React Native, React Native Web"
                />
            </WorkInfo>

            <p className="py-3">
                This was my first React Native and React Native Web project. On
                this project I was tasked with setting up the project foundation
                and sharing code between native and web apps. I helped lead
                developers, reviewed pull requests and worked with our
                experience design teams to launch the app in a very tight
                deadline.
            </p>
            <p className="py-3">
                On this project I also handled the CI/CD for the web app.
                Working closely with Mars, I implemented a pipeline for code
                diagnostics to ensure our code was meeting their standards. I
                helped triage bugfixes as well as security findings from
                penetration testing. I also took a large ownership of our asset
                management and server side scripts in PlayFab.
            </p>
            <p className="py-3">
                I was able to help and provide input to some of the mini-games
                design. In addition to everything else, I took a lead role in
                managing a smaller team that was tasked with making mini-games
                for the project. By the end of the project, I was even fixing
                and implementing the last changes to the final mini-game, Grave
                Escape.
            </p>
        </section>
    );
};
