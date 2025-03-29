def call(Map config) {
    def imageTag = config.imageTag
    def dockerfile = config.dockerfile ?: 'Dockerfile'

    // Build the Docker image
    echo "Building Docker image: ${imageTag}"
    def image = docker.build(
        imageTag,
        "--file ${dockerfile} .",
    )

    // Return the image object and tag for downstream use
    return [image: image, imageTag: imageTag]
}