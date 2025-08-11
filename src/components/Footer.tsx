// [1] Create Privacy Policy Component
const Footer = ({ onShowPrivacy }: { onShowPrivacy: () => void }) => (
  <footer className="footer">
    <span>
      © {new Date().getFullYear()} Neon JoKenPo
      {" · "}
      <button className="privacy-link" onClick={onShowPrivacy}>
        Privacy Policy
      </button>
    </span>
  </footer>
);

// [2] Export
export default Footer;
