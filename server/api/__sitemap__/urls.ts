import type { SitemapUrlInput } from "#sitemap/types";

export default defineSitemapEventHandler(async () => {
  const response = await $fetch<{ data: { hosts: { slug: string }[] } }>(
    "https://api.spinrequest.com/api/v1/user/fetch-host",
    {
      headers: {
        Authorization:
          "Bearer 351|4Hb7xQbqh5D0XoNRHF2Ay1ALbThqbpX8rtgKGAncce5315b2",
      },
    }
  );
  return response.data?.hosts?.length
    ? response.data?.hosts?.map((host) => ({
        loc: `/${host.slug}`,
        _sitemap: "pages",
      }))
    : ([] satisfies SitemapUrlInput[]);
});
