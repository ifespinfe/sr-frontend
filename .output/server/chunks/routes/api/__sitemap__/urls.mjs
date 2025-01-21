import { d as defineSitemapEventHandler } from '../../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'vue';
import 'consola/core';
import 'node:url';
import 'ipx';

const urls = defineSitemapEventHandler(async () => {
  var _a, _b, _c, _d;
  const response = await $fetch(
    "https://api.spinrequest.com/api/v1/user/fetch-host",
    {
      headers: {
        Authorization: "Bearer 351|4Hb7xQbqh5D0XoNRHF2Ay1ALbThqbpX8rtgKGAncce5315b2"
      }
    }
  );
  return ((_b = (_a = response.data) == null ? undefined : _a.hosts) == null ? undefined : _b.length) ? (_d = (_c = response.data) == null ? undefined : _c.hosts) == null ? undefined : _d.map((host) => ({
    loc: `/${host.slug}`,
    _sitemap: "pages"
  })) : [];
});

export { urls as default };
//# sourceMappingURL=urls.mjs.map
