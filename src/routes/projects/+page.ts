import type { Project } from "$lib"
import type { PageLoad } from "./$types"
import { error } from "@sveltejs/kit"

export const load: PageLoad = async () => {
	type ProjectJson = {
		projects: Project[]
	}
	const baseUrl =
		"https://raw.githubusercontent.com/xementor/xementor.github.io/main/src/db/"
	try {
		const url = baseUrl + "projects.json"
		const response = await fetch(url)
		console.log("server", response)

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`)
		}

		const data = (await response.json()) as ProjectJson
		return data
	} catch (e) {
		error(404, { message: `An error occurred: ${e}` })
	}
}
