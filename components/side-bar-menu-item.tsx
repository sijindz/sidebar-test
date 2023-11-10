"use client";
import { SideNavItem } from '@/types/type';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { BsChevronRight } from 'react-icons/bs';

export const SideBarMenuItem = ({ item, toggleCollapse }: { item: SideNavItem, toggleCollapse: boolean }) => {
    const pathname = usePathname();
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen);
    };
    const inactiveLink = classNames("flex items-center h-full dark:text-[#6e768e] text-[#6e768e] py-2 px-4 hover:text-black dark:hover:text-white  hover:bg-[#efefef] dark:hover:bg-[#3a3f48] rounded-md transition duration-200"        
    );
    const activeLink = classNames("rounded-md active dark:text-white text-black bg-[#efefef] dark:bg-[#3a3f48]");

    const navMenuDropdownItem = "dark:text-[#6e768e] text-[#6e768e] py-2 px-4 hover:text-black dark:hover:text-white transition duration-200"

    const dropdownMenuHeaderLink = classNames(inactiveLink,
        {
            ["bg-[#efefef] dark:bg-[#3a3f48]"]: subMenuOpen
        }
    );
    return (
        <>
            {item.submenu ? (
                <div className="rounded-md min-w-[18px]">
                    <a className={`${dropdownMenuHeaderLink} ${pathname.includes(item.path) ? activeLink : ''}`} 
                    onClick={toggleSubMenu}>
                        {item.icon}
                        {!toggleCollapse && <>
                            <span className='ml-3 text-base leading-6 font-semibold'>{item.title}</span>
                            <BsChevronRight className={`${subMenuOpen ? 'rotate-90' : ''} ml-auto stroke-2 text-xs`} />
                        </>
                        }
                    </a>
                    {subMenuOpen && !toggleCollapse && (
                        <div className='bg-[#efefef] dark:bg-[#3a3f48] border-l-4'>
                            <div className='grid gap-y-2 px-10 leading-5 py-3'>
                                {item.subMenuItems?.map((subItem, idx) => {
                                    return (
                                        <Link
                                            key={idx}
                                            href={subItem.path}
                                            className={`${navMenuDropdownItem} ${subItem.path === pathname ? 'dark:text-white text-black '  : ''}`}
                                        >
                                            <span>{subItem.title}</span>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>)
                    }
                </div>
            ) :
                (<Link href={item.path} className={`${inactiveLink} ${item.path === pathname ? activeLink : ''}`}>
                    {item.icon}
                    {!toggleCollapse && (<span className="ml-3 text-base leading-6 font-semibold">{item.title}</span>)}
                </Link>)}
        </>
    );
};