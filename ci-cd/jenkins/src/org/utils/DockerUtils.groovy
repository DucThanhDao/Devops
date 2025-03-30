package org.utils

class DockerUtils {
    /**
     * Generates a dynamic Docker image tag based on the provided configuration.
     *
     * @param config A map containing the following keys:
     *    - owner: The repository owner (e.g., "DucThanhDao").
     *    - repository: The repository name (e.g., "Devops").
     *    - branch: The Git branch name (e.g., "feat/ci-cd-integration").
     *    - gitSha: The Git commit SHA (e.g., "a1b2c3d4").
     *    - timestamp: The timestamp (e.g., "20230501-123456").
     * @return A dynamically generated Docker image tag.
     */
    static String generateImageTag(Map config) {
        // Normalize inputs by converting them to lowercase
        def registry = (config.registry ?: '').toLowerCase()
        def owner = (config.owner ?: '').toLowerCase()
        def repository = (config.repository ?: '').toLowerCase()
        def branch = (config.branch ?: '').toLowerCase()
        def gitSha = (config.gitSha ?: '').toLowerCase()
        def timestamp = (config.timestamp ?: '').toLowerCase()

        if (!owner || !repository || !branch || !gitSha) {
            throw new IllegalArgumentException("Missing required parameters: owner, repository, branch, or gitSha")
        }
        // Replace slashes in the branch name with dashes
        def formattedBranch = branch.replaceAll("/", "-")

        // Generate the image tag
        return "${registry}/${owner}/${repository}:${formattedBranch}-${gitSha}-${timestamp}"
    }
}