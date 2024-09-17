import Menu from "./Menu"
import { DataProvider } from "./Context"
import MainBody from "./MainBody"
import './style.css'

function App() {
  return (
    <DataProvider>
      <header>
        <Menu />
      </header>
      <MainBody />
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
    </DataProvider>
  )
}

export default App
