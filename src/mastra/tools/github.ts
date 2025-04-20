import { Tool } from '@mastra/core/tool';
import { githubConfig } from '../../config/github';
import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
  auth: githubConfig.accessToken,
});

export const githubTool = new Tool({
  name: 'githubTool',
  description: 'Tool for GitHub repository operations',
  parameters: {
    type: 'object',
    properties: {
      operation: {
        type: 'string',
        enum: ['createRepo', 'createReadme', 'makeCommit'],
        description: 'The GitHub operation to perform'
      },
      repoName: {
        type: 'string',
        description: 'Name of the repository'
      },
      description: {
        type: 'string',
        description: 'Repository description'
      },
      readmeContent: {
        type: 'string',
        description: 'Content for README.md'
      },
      commitMessage: {
        type: 'string',
        description: 'Commit message'
      }
    },
    required: ['operation']
  },
  handler: async (params) => {
    try {
      switch (params.operation) {
        case 'createRepo':
          const response = await octokit.repos.createForAuthenticatedUser({
            name: params.repoName,
            description: params.description,
            private: false,
          });
          return response.data;
        case 'createReadme':
          // Implementation for creating README
          break;
        case 'makeCommit':
          // Implementation for making commits
          break;
        default:
          throw new Error(`Unsupported operation: ${params.operation}`);
      }
    } catch (error) {
      console.error('GitHub operation failed:', error);
      throw error;
    }
  }
}); 