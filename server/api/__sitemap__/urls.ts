import type { SitemapUrlInput } from "#sitemap/types";

export default defineSitemapEventHandler(async () => {
  const {
    public: { API_BASE_URL },
  } = useRuntimeConfig();

  const response = await $fetch<{ data: { hosts: { slug: string }[] } }>(
    `${API_BASE_URL}/user/fetch-host`
  );
  return response.data?.hosts?.length
    ? response.data?.hosts?.map((host) => ({
        loc: `/${host.slug}`,
        _sitemap: "pages",
      }))
    : ([] satisfies SitemapUrlInput[]);
});
