export default [ 
    linkFactory("Home","/"),
    linkFactory("Generate","/generate"),
    linkFactory("Explore","/palettes"),
]

function linkFactory(name, link) {
    return {
      name,
      link
    };
  }
  