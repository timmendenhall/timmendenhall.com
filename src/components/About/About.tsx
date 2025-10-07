import React from 'react';
import { PageContainer } from '@/components';
import { recursive } from '@/font';
import {
    FaGamepad,
    FaBook,
    FaCalculator,
    FaUserGraduate,
} from 'react-icons/fa';

const ICON_SIZE = '3em';

export interface IconContainerProps {
    children: React.ReactNode;
}

export const IconContainer = ({ children }: IconContainerProps) => (
    <div className="flex w-24 flex-col items-center justify-center text-xl">
        {children}
    </div>
);

export interface AboutSectionContainerProps {
    children: React.ReactNode;
}

export const AboutSectionContainer = ({ children }: IconContainerProps) => (
    <div className="flex max-w-5xl flex-row items-center justify-center-safe p-6 text-justify">
        {children}
    </div>
);

export const About = () => {
    return (
        <PageContainer
            id="about"
            className={`bg-linear-to-br from-sky-950 to-cyan-700`}
        >
            <h1 className={`${recursive.className} py-8 text-5xl`}>About</h1>

            <p className="w-full">
                Hi! I&#39;m Tim Mendenhall. Here&#39;s a little bit about my
                journey.
            </p>

            <AboutSectionContainer>
                <p className="w-full">
                    When I was young my dad got me my very first video game,
                    Super Mario Brothers on the original Nintendo. This sparked
                    my interest in gaming and I&#39;m still quite a passionate
                    gamer and indie game developer in my spare time.
                </p>

                <IconContainer>
                    <FaGamepad size={ICON_SIZE} />
                </IconContainer>
            </AboutSectionContainer>

            <AboutSectionContainer>
                <IconContainer>
                    <FaBook size={ICON_SIZE} />
                </IconContainer>
                <p className="w-full">
                    In middle school a friend showed me his website he made for
                    a Starcraft gaming group he ran. I was so thrilled seeing
                    his original art, HTML and CSS skills in action that I just
                    knew I had to do it too. The very next day I went to the
                    library and rented &#34;HTML For Dummies&#34; unknowingly
                    starting my web development career.
                </p>
            </AboutSectionContainer>

            <AboutSectionContainer>
                <p className="w-full">
                    By high school I got a graphing calculator, the TI-83. This
                    changed my world forever with game development. I spent all
                    of my spare time in class making small games in Basic on the
                    calculator.
                </p>
                <IconContainer>
                    <FaCalculator size={ICON_SIZE} />
                </IconContainer>
            </AboutSectionContainer>

            <AboutSectionContainer>
                <IconContainer>
                    <FaUserGraduate size={ICON_SIZE} />
                </IconContainer>
                <p className="w-full">
                    After high school, I knew I wanted to be a game developer!
                    So, I went to college and got my degree in Game and
                    Simulation Programming. I learned a lot in a short amount of
                    time making a few small game projects along the way.
                </p>
            </AboutSectionContainer>
        </PageContainer>
    );
};
