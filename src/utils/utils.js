// function convertTextUpperOrLower
export const convertTextUpperOrLower = text => [
  text === text.toUpperCase()
    ? text.toLowerCase() || text === text.toLowerCase()
    : text.toUpperCase(),
  text === text.toUpperCase()
]
