import { githubAgent } from '../mastra/agents';

async function testGitHubAgent() {
  try {
    const response = await githubAgent.chat({
      message: "Create a new repository called 'test-repo' with a basic README"
    });
    console.log('Agent response:', response);
  } catch (error) {
    console.error('Test failed:', error);
  }
}

testGitHubAgent(); 