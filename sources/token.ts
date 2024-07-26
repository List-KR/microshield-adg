import * as Fs from 'node:fs'
import * as Glob from 'glob'

export function LoadTokens(RepoPath: string) {
  const Tokens = new Map<string, string>()
  for (const Selected of Glob.globSync('**/*.token', { cwd: RepoPath })) {
    Tokens.set(Selected, Fs.readFileSync(`${RepoPath}/${Selected}`, 'utf-8'))
  }
  return Tokens
}