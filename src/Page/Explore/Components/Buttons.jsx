import React, { useState } from "react";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import {
  HeartIcon as HeartIconSolid,
  EyeIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { mutateSavePalette } from "../actions/mutateSavePalette";
import useSavePalettes from "../../../services/useSavePalettes";
import { motion } from "framer-motion";

export function LikeButton({ palettes, userID }) {
  const { likeAction, unlikeAction, isLikePending } =
    mutateSavePalette(palettes);
  const { savedPalettes } = useSavePalettes();
  const isLiked = savedPalettes?.includes(palettes.join("-"));
  const { isLoading } = useSavePalettes();
  return (
    <Button
      onClick={isLiked ? unlikeAction : likeAction}
      className="flex items-center h-full gap-x-1 text-sm font-semibold bg-neutral-800 hover:bg-neutral-700 px-5 py-2.5 rounded-lg"
    >
      {isLoading ? null : <Heart like={isLiked} />}
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
  return (
    <motion.span whileTap={{ scale: 0.8 }}>
      {like ? (
        <HeartIconSolid color="red" className="w-4" />
      ) : (
        <HeartIconOutline color="white" className="w-4" />
      )}
    </motion.span>
  );
}
