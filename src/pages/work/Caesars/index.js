import React from 'react';

import './Caesars.css';

import { WorkInfo } from '../../../components/WorkInfo';
import { WorkInfoRow } from '../../../components/WorkInfoRow';

export const Caesars = () => {
  return (
    <section className="">
      <h2>Booking Engine</h2>

      <WorkInfo>
        <WorkInfoRow name="Role" value="Front-end Developer" />
        <WorkInfoRow name="Platforms" value="Web" />
        <WorkInfoRow name="Technology" value="React" />
        <WorkInfoRow name="Status" value="Live" />
      </WorkInfo>

      <p>
        This project was pretty well established and live already when I joined
        the team. But, I was able to quickly jump in and help with bug fixes and
        new features alike. I was a co-developer on a new Rewards system look
        and feel that went into an A/B test and became permanent after an
        increase in sales.
      </p>
    </section>
  );
};
