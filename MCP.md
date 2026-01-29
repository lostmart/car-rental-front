```text
┌─────────────────────────────────────────────────────┐
│                   Your Terminal                     │
│        (Claude Code CLI or VS Code Extension)       │
└─────────────────────┬───────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────┐
│              MCP Agent Router Server                │
│                                                     │
│  Tools exposed to Claude:                           │
│  ├── activate_agent(agent_name)                     │
│  ├── list_agents()                                  │
│  ├── get_agent_context(agent_name)                  │
│  ├── route_task(task_description)  ← auto-routing   │
│  └── chain_agents(agent_list, task)                 │
│                                                     │
│  Resources:                                         │
│  ├── agents/ui-agent.md                             │
│  ├── agents/api-agent.md                            │
│  ├── agents/review-agent.md                         │
│  └── agents/docs-agent.md                           │
└─────────────────────────────────────────────────────┘
```
