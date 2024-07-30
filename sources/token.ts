import * as Fs from 'node:fs'
import * as Glob from 'glob'

export function LoadTokens(RepoPath: string) {
  const Tokens = {} as Record<string, string>
  for (const Selected of Glob.globSync('**/*.token', { cwd: RepoPath })) {
    Tokens[/[a-z0-9]+(?=\.token)/g.exec(Selected)[0]] = Fs.readFileSync(`${RepoPath}/${Selected}`, 'utf-8')
  }
  return Tokens
}