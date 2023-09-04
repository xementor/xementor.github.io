import { error } from "@sveltejs/kit"
import type { PageLoad } from "./$types"
export const load: PageLoad = ({ params }) => {
	return {
		title: params.slug,
		content: `
  # This is a header

This is a paragraph.

* This is a list
* With two items
  1. And a sublist
  2. That is ordered
    * With another
    * Sublist inside

| And this is | A table |
|-------------|---------|
| With two    | columns |`,
	}
}
