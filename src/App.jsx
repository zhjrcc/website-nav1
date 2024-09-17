import Menu from "./Menu"

function App() {
  const links = [
    { href: "/home", icon: "home", title: "home" },
    { href: "/services", icon: "services", title: "services" },
    { href: "/pricing", icon: "pricing", title: "pricing" },
    { href: "/blog", icon: "blog", title: "blog" },
    { href: "/profile", icon: "profile", title: "profile" },
  ]
  return (
    <>
      <header>
        <Menu links={links} />
      </header>
      <main>
        <h1>Welcome to this website</h1>
      </main>
      <footer>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">React Quickly 2E</a>
          </li>
        </ul>
      </footer>
    </>
  )
}

export default App
