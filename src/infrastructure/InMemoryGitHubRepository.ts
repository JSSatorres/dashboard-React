import { githubApiResponses } from "../github_api_responses";

export class InMemoryGitHubRepository {
	search(): typeof githubApiResponses {
		return githubApiResponses;
	}
}
