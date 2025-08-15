// [1] Create Privacy Policy Component
const Footer = ({
  onShowPrivacy,
  onShowTerms,
  onShowContact,
}: {
  onShowPrivacy: () => void;
  onShowTerms: () => void;
  onShowContact: () => void;
}) => (
  <footer className="footer">
    <span>
      © {new Date().getFullYear()} Neon JoKenPo
      {" · "}
      <button className="privacy-link" onClick={onShowPrivacy}>
        Privacy Policy
      </button>
      {" · "}
      <button className="privacy-link" onClick={onShowTerms}>
        Terms of Use
      </button>
      {" · "}
      <button className="privacy-link" onClick={onShowContact}>
        Contact
      </button>
    </span>
  </footer>
);

// [2] Export
export default Footer;
