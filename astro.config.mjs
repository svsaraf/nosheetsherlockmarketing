// @ts-check

import cloudflare from '@astrojs/cloudflare';

export default {
  output: 'server',
  adapter: cloudflare({
    sessions: false,
  }),
}
