import { ABOUT_LINK } from "./data";


export default [
    socialLinkFactory("About",ABOUT_LINK),
    socialLinkFactory("Github",ABOUT_LINK)
];

function socialLinkFactory(name, link) {
  return {
    name,
    link,
  };
}
