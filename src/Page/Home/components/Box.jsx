import useMediaQuery from "../../../hooks/useMediaQuery";
export function Box({ className }) {
  const isMobile = useMediaQuery("(max-width:400px)");
  return (
    <div
      className={`rounded-2xl ${
        isMobile ? "h-[100px]" : "h-[200px]"
      } ${className}`}
    />
  );
}
