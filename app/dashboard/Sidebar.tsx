import Link from "next/link"
import Icon, { IconName } from "../components/Icon"

interface Menu {
    title: String;
    icon: IconName;
    path: string;
}

const menus: Menu[] = [
    {
        title: "Activities",
        icon: "folder-closed",
        path: "/dashboard/activities",
    },
    {
        title: "Projects",
        icon: "folder-closed",
        path: "/dashboard/projects",
    },
    {
        title: "Tags",
        icon: "tag",
        path: "/dashboard/tags",
    },
    {
        title: "Clients",
        icon: "folder-closed",
        path: "/dashboard/clients",
    },
];


const Sidebar = () => {
    return (
        <aside>
            <div className=" border-b px-4 py-4 flex justify-center items-center">
                <span><Icon name="folder-clock" /></span>
                <h1 className="text-2xl ml-2">Time Master</h1>
            </div>
            <ul className="menu p-4 w-64 min-h-full text-base-content">
                {
                    menus.map((menu, key) =>
                        <li key={key} className="mb-2">
                            <Link href={menu.path} className="group">
                                <span><Icon name={menu.icon} size={18} /></span>
                                <span>{menu.title}</span>
                            </Link>
                        </li>)
                }
            </ul>
        </aside>
    )
}

export default Sidebar