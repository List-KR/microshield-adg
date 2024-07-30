import { simpleGit } from "simple-git"
import * as Commander from 'commander'
import * as TsMorph from 'ts-morph'

const Program = new Commander.Command()
Program.option('--mainstream-path <path>', 'Path to the microShield repository')
Program.option('--auth <auth>', 'GitHub auth Token')
Program.option('--token-path <path>', 'Path to the microShield-token repository')
Program.option('--target <target>', '')

Program.parse(process.argv)

const ProgramOptions = Program.opts() as {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  mainstreamPath: string,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  auth: string,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  tokenPath: string
}

const MainStreamGit = simpleGit(ProgramOptions.mainstreamPath)
const TokenGit = simpleGit(ProgramOptions.tokenPath)

const 