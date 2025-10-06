import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface WorkItemProps {
    shortName: string;
    longName: string;
    isActive: boolean;
    onClick: (name: string) => void;
}

export const WorkItem = ({
    shortName,
    longName,
    onClick,
    isActive,
}: WorkItemProps) => {
    const mergedClasses = twMerge('', isActive ? 'border-white' : undefined);

    return (
        <div className="m-1 flex flex-1 content-center items-center rounded-sm border-2 border-black bg-[url('/img/work/caesars.png')]">
            <button
                onClick={() => onClick(shortName)}
                className="h-28 w-28 border-0 bg-black opacity-60"
            >
                <span className="flex h-full w-full content-center items-center">
                    {longName}
                </span>
            </button>
        </div>
    );
};

//   background - size: contain;
//   background - repeat: no - repeat;
//   background - position: center;
//   background - color: #ffffff;

//   border: 4px solid #000000;
// }

// .work__work - item button {
//   background - color: rgba(0, 0, 0, 0.6);
//   border: none;
//   color: white;
//   text - decoration: none;
//   font - size: 1em;

//   width: 5em;
//   height: 5em;

//   transition - property: all;
//   transition - delay: 0s;
//   transition - duration: 0.5s;

//   cursor: pointer;
// }

// .work__work - item button:hover {
//   background - color: rgba(0, 0, 0, 0.0);
//   color: rgba(0, 0, 0, 0.0);
// }

// .work__work - item.active {
//   border: 4px solid #fff;
// }

// .work__ati {
//   background - image: url(./ati.jpg);
// }

// .work__mars {
//   background - image: url(./mars.png);
// }

// .work__caesars {
//   background - image: url(./caesars.png);
// }

// .work__vsp {
//   background - image: url(./vsp.jpg);
// }
