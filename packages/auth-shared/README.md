# @t4g/auth-shared

Shared Auth0 configuration, types, and helpers for T4G (users and business platforms).

## Usage

```ts
import { getT4GAuth0Config, detectT4GPlatform, getT4GEnvironment, T4GAuth0Config, T4GPlatform, T4GEnvironment } from '@t4g/auth-shared';
```

- Provides unified config for both webapp and dashboard.
- Uses Vite env variables for runtime config.
- Platform and environment detection included.
