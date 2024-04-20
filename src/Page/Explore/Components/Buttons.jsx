import React, { useState } from "react";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import {
  HeartIcon as HeartIconSolid,
  EyeIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

export function LikeButton({ paletteID, userID }) {
  const [like, setLike] = useState(false);
  return (
    <Button
      onClick={() => setLike((prev) => !prev)}
      className="flex items-center h-full gap-x-1 text-sm font-semibold bg-neutral-800 hover:bg-neutral-700 px-5 py-2.5 rounded-lg"
    >
      <Heart like={like} />
    </Button>
  );
}
export function LivePreviewButton({ palettes }) {
  const nav = useNavigate();
  return (
    <Button>
      <EyeIcon className="w-4" color="white" />
    </Button>
  );
}

export function UsePaletteInProject({ palettes }) {
  const nav = useNavigate();
  return <Button>Use</Button>;
}

function Button({ children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center h-full gap-x-1 text-sm font-semibold bg-neutral-800 hover:bg-neutral-700 px-5 py-2.5 rounded-lg"
    >
      {children}
    </button>
  );
}

function Heart({ like }) {
  if (like) return <HeartIconSolid color="white" className="w-4" />;
  return <HeartIconOutline color="white" className="w-4" />;
}
