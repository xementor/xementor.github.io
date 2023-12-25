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
		tags: ["redux", "react native", "nextjs"],
	},
	{
		app: {
			name: "NftAudio",
			logoUrl: "",
		},
		filename: "nft_music.md",
		thumbnail:
			"https://raw.githubusercontent.com/xementor/xementor.github.io/main/db/projects/nft_music/1.png",
		desc: "Nft based audio platform",
		badge: "New",
		tags: ["nextjs", "stellar", "nft"],
	},
	{
		app: { name: "NftMarketplace", logoUrl: "" },
		filename: "nft_marketplace",
		desc: "Nft based marketplace for media",
		thumbnail:
			"https://raw.githubusercontent.com/xementor/xementor.github.io/main/db/projects/nft_marketplace/1.png",
		badge: "New",
		tags: ["nextjs", "stellar", "nft"],
	},
]
