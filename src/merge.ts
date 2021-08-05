import { GitHub } from '@actions/github';
import { Context } from '@actions/github/lib/context';
import { isSuccessStatusCode } from './utils';

export const mergeToMaster = async (
  pullRequestNumber: number,
  context: Context,
  client: GitHub,
): Promise<boolean> => {
  console.log('Starting merge to master');

  const mergePullRequestResult = await client.pulls.merge({
    pull_number: pullRequestNumber,
    owner: context.repo.owner,
    repo: context.repo.repo,
    merge_method: 'squash',
  });

  if (!isSuccessStatusCode(mergePullRequestResult.status)) {
    console.log(`Merge could not be made. ${JSON.stringify(mergePullRequestResult)}`);
    return false;
  }

  console.log('Merge done');
  return true;
};
