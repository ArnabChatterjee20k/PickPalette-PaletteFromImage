export default function RedirectButton({className}) {
    return (
      <a
        href="#"
        className={`inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-black rounded-lg bg-[#F7C04A] hover:bg-[#ffae00] focus:ring-4 focus:ring-yellow-500 ${className}`}
      >
        Generate
      </a>
    );
  }