"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./tab-navLink.module.css";

export const TabNavLink = ({ path, title }) => {
    const pathname = usePathname();

    return (
        <Link
            href={path}
            className={classNames(styles.link, {
                [styles.activeLink]: path === pathname,
            })}
        >
            {title}
        </Link>
    );
};
