import classNames from "classnames";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { BsList } from "react-icons/bs"

export default function Header({ toggleCollapse, setToggleCollapse }: { toggleCollapse: boolean, setToggleCollapse: Dispatch<SetStateAction<boolean>> }) {

    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    const sidebarToggle = () => {
        setToggleCollapse(!toggleCollapse);
    }
    const headerStyle = classNames("bg-[#31353d] fixed w-full z-0 pr-4 shadow-sm shadow-slate-500/40",
        {
            ["md:pl-[20rem]"]: !toggleCollapse,
            ["md:pl-[5.6rem]"]: toggleCollapse,
        });
    return (
        <header className={headerStyle}>
            <div className="h-16 flex items-center justify-between">
                <button onClick={sidebarToggle} className="shrink-btn bg:[#efefef] text-[#6e768e] hover:bg-black hover:text-white dark:bg-[#3a3f48] dark:text-[#6e768e] dark:hover:bg-white dark:hover:text-black ml-3 rounded-md w-[30px] h-[30px] flex items-center justify-center shadow-md shadow-black/10  transition duration-300 ease-in-out">
                    <BsList />
                </button>
                <div className="h-10 w-10 rounded-full bg:[#efefef] dark:bg-[#3a3f48] flex items-center justify-center text-center">
                    <span className="font-semibold text-sm">HQ</span>
                </div>                
            </div>
        </header>
    )
}