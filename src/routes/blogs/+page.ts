import { baseUrl } from "$lib/config"
import type { Blog } from "../../lib/postsdb"
import type { PageLoad } from "./$types"
import { error } from "@sveltejs/kit"

export const load: PageLoad = async () => {
	type BlogJson = {
		blogs: Blog[]
	}
	try {
		const url = baseUrl + "jsons/blogs.json"
		const response = await fetch(url)

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`)
		}

		const data = (await response.json()) as BlogJson
		console.log(data)
		return data
	} catch (e) {
		error(404, { message: `An error occurred: ${e}` })
	}
}
