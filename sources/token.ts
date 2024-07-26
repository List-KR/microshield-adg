import * as Fs from 'node:fs'

export function LoadTokens(RepoPath: string) {
  const Tokens = new Map<string, string>()
  
  return Tokens
}

function ListFiles(DirPath: string): string[] {
  for (const Path of Fs.readdirSync(DirPath)) {
    if ()
  }
}

function ListDir(Paths: string[]): string[] {
  
}