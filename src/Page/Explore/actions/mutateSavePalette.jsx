import { useMutation } from "@tanstack/react-query";
import { savePalette, unSavePalette } from "../../../utils/paletteOperation";
import toast from "react-hot-toast";
import useUserAccessToken from "../../../hooks/useUserAccessToken";
import { queryClient } from "../../../queryClient/queryClient";
import { useMemberModalContext } from "../../../context/MemberModalContext";

export function mutateSavePalette(palettes) {
  const userToken = useUserAccessToken();
  const key = ["saved-palettes", userToken];
  const {handleModalOpen} = useMemberModalContext()
  const likeMutation = useMutation({
    mutationFn: () => savePalette(palettes, userToken),
    onMutate: async (newPalette) => {
      // optimistic updates
      await queryClient.cancelQueries({ queryKey: key });
      const prevSaves = queryClient.getQueryData(key);
      queryClient.setQueryData(key, (old) => [
        ...old,
        { palette: newPalette.palettes.join("-") },
      ]);
      // sending a context object with old saves snapshot
      return { prevSaves };
    },
    onError(err, newSave, context) {
      // the context send from the onMutate
      queryClient.setQueryData(key, context.prevSaves);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: key });
    },
  });

  const unlikeMutation = useMutation({
    mutationFn: () => unSavePalette(palettes, userToken),
    onMutate: async (newPalette) => {
      // optimistic updates
      await queryClient.cancelQueries({ queryKey: key });
      const prevSaves = queryClient.getQueryData(key);
      queryClient.setQueryData(key, (old) =>
        old.filter(({ palette }) => palette != newPalette.palettes.join("-"))
      );
      // sending a context object with old saves snapshot
      return { prevSaves };
    },
    onError(err, newSave, context) {
      // the context send from the onMutate
      queryClient.setQueryData(key, context.prevSaves);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: key });
    },
  });

  function likeAction() {
    if (!userToken) {
      handleModalOpen()
      return;
    }
    likeMutation.mutate(
      { palettes },
      {
        onError: (err) => {
          toast.error("Error while saving palette");
        },
      }
    );
  }

  function unlikeAction() {
    if (!userToken) {
      handleModalOpen()
      return;
    }
    unlikeMutation.mutate(
      { palettes },
      {
        onError: (err) => {
          console.log(err)
          toast.error("Error while deleting palette");
        },
      }
    );
  }

  return { likeAction, isLikePending: likeMutation.isPending , unlikeAction,isUnlikePending:unlikeMutation.isPending};
}
