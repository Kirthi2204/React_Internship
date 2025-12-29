function Footer({ linkedin, github }) {
  return (
    <footer className="footer">
      <p>© 2025 Kiruthiga Palani</p>
      <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a> | 
      <a href={github} target="_blank" rel="noreferrer"> GitHub</a>
    </footer>
  );
}

export default Footer;
