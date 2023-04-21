import useIsMobile from "../../../hooks/useIsMobile";


export function Box({ className }) {
  const isMobile = useIsMobile()
  return (
    <div
      className={`rounded-2xl ${
        isMobile ? "h-[100px]" : "h-[200px]"
      } ${className}`}
    />
  );
}
