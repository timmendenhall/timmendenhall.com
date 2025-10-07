import React from 'react';
import Image from 'next/image';
import { robotoCondensed, ubuntuSans } from '@/font';
import { ButtonBar, Button, PageContainer } from '@/components';
import profileImage from './profile-pic.jpg';

export const Welcome = () => {
    return (
        <div className="flex items-center justify-center overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-full bg-[url(/img/background-welcome.jpg)] bg-cover blur-md" />
            <PageContainer id="home">
                <Image
                    src={profileImage}
                    className="z-10 mt-5 w-32 rounded-full border-1 border-white shadow sm:w-48"
                    alt="Tim Mendenhall"
                />
                <div className="relative mx-3 mt-8 flex flex-col items-center justify-center rounded-xl bg-black/70 p-3 text-center text-white shadow-lg/30">
                    <span
                        className={`${ubuntuSans.className} text-5xl sm:text-7xl`}
                    >
                        Tim Mendenhall
                    </span>
                    <span
                        className={`${robotoCondensed.className} text-3xl text-gray-300 sm:text-5xl`}
                    >
                        Full-stack Web Developer
                    </span>
                </div>
                <ButtonBar>
                    <Button
                        href="https://github.com/timmendenhall"
                        icon="github"
                        text="GitHub"
                    />
                    <Button
                        href="https://www.linkedin.com/in/timmendenhall/"
                        icon="linkedin"
                        text="LinkedIn"
                    />
                    <Button
                        href="/Tim_Mendenhall_Resume.pdf"
                        icon="pdf"
                        text="Resume"
                    />
                </ButtonBar>
            </PageContainer>
        </div>
    );
};
