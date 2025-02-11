import type { SitemapUrlInput } from "#sitemap/types";

export default defineSitemapEventHandler(async () => {
  const {
    public: { API_BASE_URL },
  } = useRuntimeConfig();

  const response = await $fetch<{ data: { hosts: { slug: string }[] } }>(
    `${API_BASE_URL}/user/fetch-host`,
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
