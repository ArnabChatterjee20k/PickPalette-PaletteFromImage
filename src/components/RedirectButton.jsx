import { Link } from "react-router-dom";
export default function RedirectButton({className,buttonTitle,link}) {
    return (
      <Link
        to={link}
        className={`inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center rounded-md  ${className}`}
      >
        {buttonTitle}
      </Link>
    );
  }