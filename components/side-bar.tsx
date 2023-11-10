import { SIDENAV_ITEMS } from '@/constants';
import { SideNavItem } from '@/types/type';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { Dispatch, SetStateAction, useState } from 'react'
import { SideBarMenuItem } from './side-bar-menu-item';

export const SideBar = ({ toggleCollapse, setToggleCollapse }: { toggleCollapse: boolean, setToggleCollapse: Dispatch<SetStateAction<boolean>> }) => {
    const asideStyle = classNames("fixed bg-[#fff] dark:bg-[#31353d] text-gray-500 z-50 h-full shadow-lg shadow-gray-900/20 transition duration-300 ease-in-out",
        {
            ["w-[20rem]"]: !toggleCollapse,
            ["w-[5.4rem]"]: toggleCollapse,
        });
    return (
        <aside className={asideStyle}>
            <div className="sidebar-top relative flex items-center px-3.5 py-5">
                <Image width={35} alt="" className="w-12 mx-3.5 min-h-fit"
                    height={35} src='/DZ-logos_white.png' id="dzIcon" />
                <h3 className={classNames("pl-2 font-bold text-2xl min-w-max dark:text-[#e6e9ee] text-[#6e768e]",
                    { hidden: toggleCollapse })}>
                    DZ LMS</h3>
            </div>
            <nav className="flex flex-col gap-2 transition duration-300 ease-in-out">
                <div className="flex flex-col gap-2 px-4">

                    {SIDENAV_ITEMS.map((item, idx) => {
                        return <SideBarMenuItem key={idx} item={item} toggleCollapse={toggleCollapse} />;
                    })}
                </div>
            </nav>
        </aside>
    )
}
