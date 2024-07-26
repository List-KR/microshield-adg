import * as Fs from 'node:fs'

export function LoadTokens(RepoPath: string) {
  const Tokens = new Map<string, string>()
  for (const Selected of ListFiles(RepoPath)) {
    Tokens.set(Selected, Fs.readFileSync(Selected, 'utf-8'))
  }
  return Tokens
}

function ListFiles(RepoPath: string): string[] {
  const Files: string[] = []
  const Paths: string[] = [RepoPath]

  while (Paths.length > 0) {
    const CurrentPath = Paths.shift()!
    const DirContents = Fs.readdirSync(CurrentPath)

    DirContents.forEach((Item) => {
      const ItemPath = `${CurrentPath}/${Item}`
      const IsDirectory = Fs.statSync(ItemPath).isDirectory()

      if (IsDirectory) {
        Paths.push(ItemPath)
      } else {
        Paths.push(ItemPath)
      }
    })
  }

  return Files
}