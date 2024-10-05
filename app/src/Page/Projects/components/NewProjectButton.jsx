import ProjectCreateModal from "./ProjectCreateModal";

export default function NewProjectButton() {
  return (
    <ProjectCreateModal>
      <button
        className="inline-flex items-center justify-center px-3 py-2 text-[0.8rem] font-medium text-center rounded-md w-30 text-black bg-[#F7C04A] hover:bg-[#ffae00] focus:ring-4 focus:ring-yellow-500"
      >
        New Project
      </button>
    </ProjectCreateModal>
  );
}
