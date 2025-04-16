<template>
  <main class="debu-screens">
    <div
      class="fixed py-4 left-0 top-0 right-0 border-b bg-background/80 backdrop-blur-sm z-[100]"
    >
      <Navigation />
    </div>
    <div
      class="relative top-[72px] h-[calc(100vh-160px)] sm:h-[calc(100vh-80px)]"
    >
      <slot />
    </div>
  </main>
</template>
