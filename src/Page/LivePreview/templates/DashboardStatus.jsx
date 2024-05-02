import { LinkIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { Cog8ToothIcon } from "@heroicons/react/24/solid";
import Charts from "../components/Charts";
import Medal from "../components/Medal";
export default function DashboardStatus() {
  return (
    <div className="bg-background flex flex-col max-w-md w-[80%] sm:w-[60%] rounded-md p-5 gap-4">
      <Header />
      <Status />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="flex w-full justify-between">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <LinkIcon className="w-4 h-4 text-accent" />
          <p className="text-accent">STATUS</p>
        </div>
        <p className="font-bold text-accent">OK</p>
      </div>
      <XCircleIcon className="w-8 h-8 text-accent" />
    </div>
  );
}

function Status() {
  return (
    <div className="full flex-col gap-3">
      <div className="bg-primary relative w-full rounded-sm h-[150px] sm:h-[250px] flex items-center">
        <Charts className="absolute fill-accent inset-0  m-2 w-5 sm:w-7" />
        <div className="flex items-end w-full justify-center gap-2 ">
          <p className="text-6xl font-extrabold text-text">42</p>
          <p className="text-text text-sm mb-1 font-bold">ACTIVE USERS</p>
        </div>
      </div>

      <div className="flex mt-3 gap-3 h-[120px] sm:h-[150px]">
        <div className="bg-secondary relative w-full rounded-sm flex items-center">
          <Medal className="absolute fill-accent inset-0  m-2 w-5 sm:w-7" />
          <div className="flex items-start w-full justify-center gap-1">
            <p className="text-4xl font-extrabold text-text">17</p>
            <p className="text-text font-bold mt-1 text-sm">%</p>
          </div>
        </div>

        <div className="bg-tertiary relative w-full rounded-sm flex items-center">
          <Medal className="absolute fill-accent inset-0  m-2 w-5 sm:w-7" />
          <div className="flex items-start w-full justify-center">
            <p className="text-4xl font-extrabold text-text">12</p>
            <p className="text-text font-bold mt-1 text-sm">%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="flex justify-between items-end">
      <div>
        <p className="text-accent">Current results are based on a 30</p>
        <p className="text-accent">day moving average.</p>
      </div>
      <div className="flex gap-2">
        <p className="text-accent font-bold text-sm">SETTING</p>
        <Cog8ToothIcon className="w-5 h-5 text-accent" />
      </div>
    </div>
  );
}
