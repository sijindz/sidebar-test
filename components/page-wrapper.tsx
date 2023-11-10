import classNames from 'classnames';
import { ReactNode } from 'react';

export default function PageWrapper({ children, toggleCollapse }: { children: ReactNode, toggleCollapse: boolean }) {

    const bodyStyle = classNames("bg-slate-50 flex-grow text-black p-2 mt-16",
        {
            ["md:pl-[20.4rem]"]: !toggleCollapse,
            ["md:pl-[5.8rem]"]: toggleCollapse,
        });

    return (
        <div className={bodyStyle}>
            {children}
        </div>
    );
}