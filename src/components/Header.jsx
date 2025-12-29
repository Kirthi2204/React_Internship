function Header(props) {
  return (
    <header className="header">
      <h2>{props.title}</h2>
      <nav>
        {props.links.map((link, index) => (
          <a key={index} href={`#${link.toLowerCase()}`}>
            {link}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
