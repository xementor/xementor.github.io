
// generate-json.js
const fs = require('fs');

const projects = [
  {
    app: { name: "ihABC", logoUrl: "vong" },
    filename: "ihabc.md",
    thumbnail: "project.jpg",
    desc: "It is a interactive platform to teach kids alphabet.",
    badge: "Cool",
    tags: ["kids", "solar2d", "game"],
  },
  {
    app: { name: "ihStudy", logoUrl: "vong" },
    filename: "ihabc.md",
    thumbnail: "project.jpg",
  },
  {
    app: { name: "ami tmari premo vikari , amiake", logoUrl: "vong" },
    filename: "ihabc.md",
    thumbnail: "project.jpg",
    desc: "It is a interactive platform to teach kids alphabet.It is a interactive platform to teach kids alphabet.",
  },
]
const jsonData = JSON.stringify({ projects }, null, 2)



// Save the JSON data to a file
fs.writeFileSync("./src/db/projects.json", jsonData)

console.log("JSON data saved to project.json",)
