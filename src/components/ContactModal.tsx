const ContactModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  if (!open) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Contact</h2>
        <p>For questions, suggestions, or issues, contact me:</p>
        <ul className="contact-modal-list">
          <li>
            <a
              href="mailto:reginaldoisidoro21@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span role="img" aria-label="email">
                📧
              </span>
              reginaldoisidoro21@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://github.com/regimif"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span role="img" aria-label="github">
                🐙
              </span>
              github.com/regimif
            </a>
          </li>
        </ul>
        <button className="modal-close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ContactModal;
