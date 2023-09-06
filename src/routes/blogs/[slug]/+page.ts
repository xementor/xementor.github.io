import { error } from "@sveltejs/kit"
import type { PageLoad } from "./$types"
import type { Blog } from "$lib/postsdb"
import { baseUrl } from "$lib/config"

export const load: PageLoad = async ({ params }) => {
	type BlogJson = {
		blogs: Blog[]
	}
	const url = baseUrl + "blogs/first-blog.md"
	try {
		const response = await fetch(url)

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`)
		}

		const data = (await response.text()) as String
		console.log(data)
		return data
	} catch (e) {
		console.log(e)
		error(404, { message: `An error occurred: ${e}` })
	}
}
