def call(Map config) {
    def registry = config.registry
    def credentialsId = config.credentialsId
    def imageTag = config.imageTag

    if (!registry || !credentialsId) {
        error("Registry and credentialsId are required for pushing the image.")
    }

    // Log in to the registry
    echo "Logging into registry: ${registry}"
    docker.withRegistry("https://${registry}", credentialsId) {
        echo "Logged into ${registry}"
        // Push the image
        echo "Pushing image: ${imageTag}"
        docker.image("${imageTag}").push() 
    }
}