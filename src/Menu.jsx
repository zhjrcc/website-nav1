function Menu() {
  return (
    <nav>
      <ul className="menu">
        <li>
          <a href="#" className="menu-link">
            <img src="icons/home.svg" alt="" width="16" />
            Home
          </a>
        </li>
        <li>
          <a href="#" className="menu-link">
            <img src="icons/services.svg" alt="" width="16" />
            Services
          </a>
        </li>
        <li>
          <a href="#" className="menu-link">
            <img src="icons/pricing.svg" alt="" width="16" />
            Pricing
          </a>
        </li>
        <li>
          <a href="#" className="menu-link">
            <img src="icons/blog.svg" alt="" width="16" />
            Blog
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
