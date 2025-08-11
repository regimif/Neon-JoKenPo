const PrivacyPolicyModal = ({
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
        <h2>Privacy Policy</h2>
        <p>
          Neon JoKenPo uses Google Analytics to collect anonymous usage data to
          improve user experience. No personal data is collected. Cookies may be
          used to track gameplay and site performance. By using this site, you
          consent to our data collection practices.
        </p>
        <button className="modal-close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
