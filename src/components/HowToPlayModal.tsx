import "./HowToPlayModal.css";

type Props = {
  open: boolean;
  onClose: () => void;
};

const HowToPlayModal = ({ open, onClose }: Props) => {
  if (!open) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="how-to-play-title"
      >
        <h2 id="how-to-play-title">How to Play</h2>
        <p>
          Welcome to Neon JoKenPo!
          <br />
          <br />
          🪨 Rock beats ✂️ Scissors
          <br />
          ✂️ Scissors beats 📄 Paper
          <br />
          📄 Paper beats 🪨 Rock
          <br />
          <br />
          Make your move and try to beat the computer. Good luck!
        </p>
        <button className="modal-close-btn" onClick={onClose}>
          Got It
        </button>
      </div>
    </div>
  );
};

export default HowToPlayModal;
