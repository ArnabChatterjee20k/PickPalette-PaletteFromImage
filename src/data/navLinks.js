export default [ 
    linkFactory("Home","/"),
    linkFactory("Generate","/generate"),
    linkFactory("Explore","/palettes"),
    linkFactory("Feedback","/feedback"),
]

function linkFactory(name, link) {
    return {
      name,
      link
    };
  }
  