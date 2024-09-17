import { useData } from "./Context"

function MainBody() {
  const { isLoggedIn, toggleLogin } = useData()
  return (
    <main>
      <h1>Welcome to this website</h1>
      <button onClick={toggleLogin}>{isLoggedIn ? "logout" : "login"}</button>
    </main>
  )
}

export default MainBody
