function Footer({ linkedin, github }) {
  return (
    <footer id="footer" className="footer">
      <p>© 2025 Kiruthiga Palani</p>
      <p>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a> |{" "}
        <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
      </p>
    </footer>
  );
}

export default Footer;
