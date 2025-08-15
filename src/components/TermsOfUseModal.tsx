const TermsOfUseModal = ({
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
        <h2>Terms of Use</h2>
        <p>
          By using Neon JoKenPo, you agree to use this site for personal,
          non-commercial entertainment only. The game is provided as-is, without
          warranty of any kind. We are not responsible for any damages or losses
          resulting from the use of this site. Do not attempt to misuse, hack,
          or disrupt the service.
        </p>
        <button className="modal-close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default TermsOfUseModal;
