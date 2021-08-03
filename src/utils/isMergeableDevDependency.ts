const validPrefixes = ['@types/', 'eslint', 'jest', 'lint', 'husky', 'prettier'];

export const isMergeableDevDependency = (packageName: string) => {
  return validPrefixes.some((prefix) => packageName.startsWith(prefix));
};
