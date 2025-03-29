def call(Map config) {
    def repository = config.repository
    def dockerfile = config.dockerfile ?: 'Dockerfile'

    // Generate dynamic tag (SHA + timestamp)
    def gitSha = env.GIT_COMMIT ?: 'unknown'
    def timestamp = sh(script: 'date +%Y%m%d-%H%M%S', returnStdout: true).trim()
    def imageTag = "${repository}:${gitSha}-${timestamp}"

    // Build the Docker image
    echo "Building Docker image: ${imageTag}"
    def image = docker.build(
        imageTag,
        "--file ${dockerfile} .",
    )

    // Return the image object and tag for downstream use
    return [image: image, imageTag: imageTag]
}