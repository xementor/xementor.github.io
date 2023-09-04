// place files you want to import through the `$lib` alias in this folder.
export type Project = {
	thumbnail: string
	app: {
		name: string
		logoUrl: string
	}
	filename: string
	desc?: string
	badge?: string
	tags?: string[]
}
