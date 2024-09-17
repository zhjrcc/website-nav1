import { createContext, useContext, useState } from "react"

const Context = createContext({
  links: [],
  isLoggedIn: false,
  toggleLogin: () => {},
})

export function DataProvider({ children }) {
  const [isLoggedIn, setLoggedIn] = useState(false)
  const links = [
    { href: "/home", icon: "home", title: "Home" },
    { href: "/services", icon: "services", title: "Service" },
    { href: "/pricing", icon: "pricing", title: "Pricing" },
    { href: "/blog", icon: "blog", title: "Blog" },
  ].concat(
    isLoggedIn ? [{ href: "/profile", icon: "profile", title: "Profile" }] : []
  )
  const toggleLogin = () => setLoggedIn((prevState) => !prevState)
  const value = { links, isLoggedIn, toggleLogin }
  return <Context.Provider value={value}>{children}</Context.Provider>
}

export function useData() {
  return useContext(Context)
}

export default Context
