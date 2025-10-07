import React from 'react';
import Image from 'next/image';

// import './ATI.css';
import dashboardImage from './ati_dashboard.png';
import hepImage from './ati_hep.png';
import progressImage from './ati_progress.png';
import { Carousel } from '@/components/Carousel';
import { WorkInfo } from '@/components/WorkInfo';
import { WorkInfoRow } from '@/components/WorkInfoRow';

export const ATI = () => {
    return (
        <section className="flex flex-col items-center">
            <Carousel>
                <div>
                    <Image src={dashboardImage} alt="Dashboard" />
                </div>
                <div>
                    <Image src={hepImage} alt="Home Exercise Program" />
                </div>
                <div>
                    <Image src={progressImage} alt="My Progress" />
                </div>
            </Carousel>

            <h2 className="text-3xl font-bold">Customer Portal</h2>
            <WorkInfo>
                <WorkInfoRow name="Role" value="Front-end Architect" />
                <WorkInfoRow name="Platforms" value="iOS, Android, Web" />
                <WorkInfoRow
                    name="Technology"
                    value="React Native, React Native Web"
                />
            </WorkInfo>

            <p className="py-3">
                On this project I was tasked with creating the foundation of the
                project in React Native / React Native Web. This included
                setting up the CI/CD for native with Fastlane and AppCenter,
                Azure pipelines for building and deployment, Azure B2C
                integration for user management and more.
            </p>
            <p className="py-3">
                I lead a team of three front end engineers, set the coding
                standards and reviewed pull requests. I worked closely with the
                client, design, developers, project managers and business
                analyst to ensure the team was always unblocked and moving
                towards the target goals.
            </p>
        </section>
    );
};
