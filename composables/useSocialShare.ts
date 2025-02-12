import { promiseTimeout } from "@vueuse/core";

export const useSocialShare = (
  link: MaybeRef<string>,
  _title?: MaybeRef<string>
) => {
  const url = decodeURIComponent(unref(link));
  const title = unref(_title);
  const copied = ref(false);
  const shareToFacebook = () => {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    window.open(facebookShareUrl, "_blank", "width=600,height=400");
  };

  const twitterShareLink = `https://x.com/intent/post?url=${url}&feature=shared&text=${
    title ?? ""
  }&via=spinrequest`;
  const whatsappShareLink = `https://api.whatsapp.com/send?text=${title}%20${url}&feature=shared&type=custom_url&app_absent=0`;

  const emailShareLink = `mailto:?subject=${title}&body=${url}`;
  const tiktokShareLink = `https://www.tiktok.com/share?url=${url}`;

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    copied.value = true;
    await promiseTimeout(1200);
    copied.value = false;
  };

  const externalNavigate = (link: string) => {
    return navigateTo(link, { external: true, open: { target: "_blank" } });
  };

  return {
    shareToFacebook,
    copyLink,
    externalNavigate,
    twitterShareLink,
    whatsappShareLink,
    emailShareLink,
    tiktokShareLink,
    copied,
  };
};
