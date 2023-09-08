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
		badge: "New",
		desc: "it is a short des",
		filename: "ihLang-compiler.md",
		tags: ["ihLang", "Compiler Desing", "Python"],
		thumbnail:
			"https://raw.githubusercontent.com/xementor/xementor.github.io/main/db/blogs/ihLang-compiler/thumbnail.jpg",
		title: "Simple Compiler design with code for (IhLang)",
		date: "18 June 2023",
	},
]

export { type Blog, blogs }
