def call(Map config) {
    def repoUrl = config.repoUrl
    def branch = config.branch
    def credentialsId = config.credentialsId ?: 'github-pat'

    // Step 1: Checkout the repository
    checkout([
        $class: 'GitSCM',
        branches: [[name: "refs/heads/${branch}"]],
        userRemoteConfigs: [[url: repoUrl, credentialsId: credentialsId]]
    ])

    // Step 2: Parse the repository URL to extract owner and repository name
    def matcher = repoUrl =~ /https:\/\/github\.com\/([^\/]+)\/([^\/]+)\.git/
    if (!matcher) {
        error("Failed to parse GitHub repository URL: ${repoUrl}")
    }

    // Extract values and discard the matcher object
    def repoOwner = matcher[0][1]
    def repoName = matcher[0][2]
    matcher = null // Explicitly discard the matcher object

    // Step 3: Get the latest commit SHA
    def lastCommitSha = sh(script: 'git rev-parse HEAD', returnStdout: true).trim()

    // Step 4: Return the extracted information
    return [
        owner: repoOwner,
        repository: repoName,
        commitSha: lastCommitSha
    ]
}