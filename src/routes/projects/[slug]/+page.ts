import { error } from "@sveltejs/kit"
import type { PageLoad } from "./$types"
import { projectBaseUrl } from "$lib/config"

export const load: PageLoad = async ({ params }) => {
	const url = projectBaseUrl + params.slug
	try {
		const response = await fetch(url)

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`)
		}

		const data = (await response.text()) as String
		return {
			content: data,
		}
	} catch (e) {
		error(404, { message: `An error occurred: ${e}` })
	}
}
