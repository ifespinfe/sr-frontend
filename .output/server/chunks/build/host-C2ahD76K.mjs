import { aA as defineNuxtRouteMiddleware, b as useAuth, n as navigateTo } from './server.mjs';
import 'vue';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '../nitro/nitro.mjs';
import 'consola/core';
import 'ipx';
import 'unhead';
import 'vue-router';
import 'vue/server-renderer';
import 'lucide-vue-next';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';

const host = defineNuxtRouteMiddleware((to) => {
  var _a;
  const { auth_user } = useAuth();
  const role = (_a = auth_user.value) == null ? undefined : _a.role;
  if (role !== "host" && to.path !== "/") {
    return navigateTo("/");
  }
});

export { host as default };
//# sourceMappingURL=host-C2ahD76K.mjs.map
