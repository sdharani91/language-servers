import { standalone } from '@aws/language-server-runtimes/runtimes'
import { CodeWhispererServerIAMProxy, QAgenticChatServerIAMProxy } from '@aws/lsp-codewhisperer'
import { IdentityServer } from '@aws/lsp-identity'
import {
    BashToolsServer,
    FsToolsServer,
    McpToolsServer,
} from '@aws/lsp-codewhisperer/out/language-server/agenticChat/tools/toolServer'
import { createIAMRuntimeProps } from './standalone-common'

const MAJOR = 0
const MINOR = 1
const PATCH = 0
const VERSION = `${MAJOR}.${MINOR}.${PATCH}`

const props = createIAMRuntimeProps(VERSION, [
    QAgenticChatServerIAMProxy,
    IdentityServer.create,
    FsToolsServer,
    BashToolsServer,
    //QLocalProjectContextServerTokenProxy,
    //WorkspaceContextServerTokenProxy,
    McpToolsServer,
    // LspToolsServer,
])

standalone(props)
