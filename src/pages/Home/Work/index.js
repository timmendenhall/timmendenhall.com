import React, { useState, useMemo } from 'react';
import './Work.css';
import { WorkItem } from '../../../components/WorkItem';
import { ATI } from '../../work/ATI';
import { Mars } from '../../work/Mars';
import { Caesars } from '../../work/Caesars';
import { VSP } from '../../work/VSP';

export const Work = () => {
  const [selectedWorkItem, setSelectedWorkItem] = useState('ati');

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

  const handleClickWorkItem = (workItem) => {
    setSelectedWorkItem(workItem);
  };

  return (
    <section className="page__container" id="work">
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
