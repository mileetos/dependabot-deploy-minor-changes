export type VersionType = 'PATCH' | 'MINOR' | 'MAJOR';
export type DeployDependencies = 'dev' | 'all';

export interface InputParams {
  deployDependencies: DeployDependencies;
  updateIndirectDependencies: boolean;
  gitHubToken: string;
  maxDeployVersion: VersionType;
  deployOnlyInWorkingHours: boolean;
  timezone: string;
}
