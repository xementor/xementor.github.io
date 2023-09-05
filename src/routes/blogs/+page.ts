import type { Blog } from "../../db/postsdb"
import type { PageLoad } from "./$types"
import { error } from "@sveltejs/kit"

export const load: PageLoad = async () => {
	type BlogJson = {
		blogs: Blog[]
	}
	const baseUrl =
		"https://raw.githubusercontent.com/xementor/xementor.github.io/main/src/db/"
	try {
		const url = baseUrl + "blogs.json"
		const response = await fetch(url)

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`)
		}

		const data = (await response.json()) as BlogJson
		return data
	} catch (e) {
		error(404, { message: `An error occurred: ${e}` })
	}
}
