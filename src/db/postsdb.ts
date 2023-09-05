type Blog = {
	title: string
	desc: string
	thumbnail: string
	filename: string
	badge?: string
	tags?: string[]
	date: string
}

const blogs: Blog[] = [
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

export { type Blog, blogs }
