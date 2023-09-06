import { error } from "@sveltejs/kit"
import type { PageLoad } from "./$types"
import { baseUrl } from "$lib/config"

export const load: PageLoad = async ({ params }) => {
	try {
		const url = baseUrl + "projects"
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
