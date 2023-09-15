import type { Project } from "$lib"
export const projects: Project[] = [
	{
		app: {
			name: "ihABC",
			logoUrl: "vong",
		},
		filename: "ihabc.md",
		thumbnail: "project.jpg",
		desc: "It is a interactive platform to teach kids alphabet.",
		badge: "Cool",
		tags: ["kids", "solar2d", "game"],
	},
	{
		app: {
			name: "ihStudy",
			logoUrl: "",
		},
		filename: "ihstudy.md",
		thumbnail:
			"https://raw.githubusercontent.com/xementor/xementor.github.io/main/db/projects/ihstudy/ihstudy-web.png",
		desc: "Interctive learning platform",
		badge: "New",
		tags: ["redux", "react native", "nextjs"],
	},
]
