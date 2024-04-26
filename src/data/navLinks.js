import {
  SwatchIcon,
  PhotoIcon,
  EyeIcon,
  ChatBubbleLeftIcon,
  NewspaperIcon,
} from "@heroicons/react/24/solid";
export const ProductExplorationLinks = [
  {
    group: "Product",
    links: [
      { label: "Browse", link: "/palettes", Icon: SwatchIcon },
      { label: "Generate", link: "/generate", Icon: PhotoIcon },
      { label: "Preview", link: "/preview", Icon: EyeIcon },
    ],
  },
  {
    group: "News",
    links: [
      { label: "Newsletter", link: "/subscribe/newsletter", Icon: NewspaperIcon },
      { label: "Feedback", link: "/feedback", Icon: ChatBubbleLeftIcon },
    ],
  },
];

export const UserDashboardLink = {
  label: "Start your project",
  link: "/user/dashboard/projects",
};
