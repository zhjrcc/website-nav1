function MenuItem({ href, icon, children }) {
  return (
    <li>
      <a href={href} className="menu-link">
        <img src={`icons/${icon}.svg`} alt="" width="16" />
        {children}
      </a>
    </li>
  )
}

export default MenuItem
