import { Link } from "@remix-run/react";

export default function Feature() {
    return (
      <p className="font-extralight mt-3 sm:mt-0 sm:text-sm">
        New{" "}
        <Link className="text-amber-400 underline underline-offset-4 font-bold" to="/subscribe/newsletter">
          Features
        </Link>{" "}
        Coming soon 🎉
      </p>
    );
  }
