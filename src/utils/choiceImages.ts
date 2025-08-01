import type { Choice } from "@utils/gameLogic";

// [1] Import images explicitly for Vercel compatibility.
// Vite handles this automatically, but Vercel requires direct imports.
import rockImg from "@assets/rock.webp";
import paperImg from "@assets/paper.webp";
import scissorsImg from "@assets/scissors.webp";

// Neon images
import rockNeonImg from "@assets/rock-neon.webp";
import paperNeonImg from "@assets/paper-neon.webp";
import scissorsNeonImg from "@assets/scissors-neon.webp";

// [2] Map each game choice to its corresponding image.
// Makes it easy to retrieve the correct image for display.
export const choiceImages: Record<Choice, string> = {
  rock: rockImg,
  paper: paperImg,
  scissors: scissorsImg,
};

export const choiceImagesNeon: Record<Choice, string> = {
  rock: rockNeonImg,
  paper: paperNeonImg,
  scissors: scissorsNeonImg,
};
