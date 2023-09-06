export function extractFileName(fileName: string) {
	// Extract the extension
	var fileExtension = fileName.split(".").pop()

	// Extract the file name (excluding extension)
	var fileNameWithoutExtension = fileName.substring(
		0,
		fileName.lastIndexOf(".")
	)

	// Create an object to store the results
	var result = {
		fileName: fileNameWithoutExtension,
		fileExtension: fileExtension,
	}

	return result.fileName
}
