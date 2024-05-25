'use client'
import Link from "next/link";
import style from "./ActiveLink.module.css"
import { usePathname } from "next/navigation";


interface Props {
    path: string;
    text: string;
}

export const ActiveLink = ({ path, text }: Props) => {
    const pathName = usePathname();

    return (
        // si el pathName es igual al path que le pasamos, le agregamos la clase active-link
        <Link href={path} className={`${style.link} ${(pathName === path) && style['active-link']}`}>{text}</Link>
    )
}
