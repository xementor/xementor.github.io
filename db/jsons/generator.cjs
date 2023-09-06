
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
const blogs = [
  {
    badge: "Cool",
    desc: "it is a short des",
    filename: "filename.md",
    tags: ["ami", "tmi"],
    thumbnail: "project.jpg",
    title: "vong",
    date: "a",
  },
  {
    badge: "Cool",
    desc: "it is a short des",
    filename: "filename.md",
    tags: ["ami", "tmi"],
    thumbnail: "project.jpg",
    title: "vong",
    date: "",
  },
]
const jsonData = JSON.stringify({ projects }, null, 2)
const jsonData2 = JSON.stringify({ blogs }, null, 2)



// Save the JSON data to a file
fs.writeFileSync("./src/db/projects.json", jsonData)
fs.writeFileSync("./src/db/blogs.json", jsonData2)

console.log("JSON data saved to project.json",)
