import Activities from "./dashboard/activities/page";
import Projects from "./dashboard/projects/page";
import Clients from "./dashboard/clients/page";
import Tags from "./dashboard/tags/page";


export default function Home({ children }) {

  return (
    <main className="drawer lg:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side relative">
        <aside className="h-screen w-full">
          <ul className="menu bg-base-200 w-64">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
            <li><a>Item 3</a></li>
          </ul>
        </aside>
      </div>

      <div className="drawer-content">{children}</div>
    </main>
  )
}
