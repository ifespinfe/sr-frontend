import { unref, ref } from 'vue';
import { n as navigateTo } from './server.mjs';
import { p as promiseTimeout } from './index-twTXuIJ-.mjs';

const useSocialShare = (link, _title) => {
  const url = decodeURIComponent(unref(link));
  const title = unref(_title);
  const copied = ref(false);
  const shareToFacebook = () => {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    (undefined).open(facebookShareUrl, "_blank", "width=600,height=400");
  };
  const twitterShareLink = `https://x.com/intent/post?url=${url}&feature=shared&text=${title != null ? title : ""}&via=spinrequest`;
  const whatsappShareLink = `https://api.whatsapp.com/send?text=${title}%20${url}&feature=shared&type=custom_url&app_absent=0`;
  const emailShareLink = `mailto:?subject=${title}&body=${url}`;
  const copyLink = async () => {
    await (undefined).clipboard.writeText(url);
    copied.value = true;
    await promiseTimeout(1200);
    copied.value = false;
  };
  const externalNavigate = (link2) => {
    return navigateTo(link2, { external: true, open: { target: "_blank" } });
  };
  return {
    shareToFacebook,
    copyLink,
    externalNavigate,
    twitterShareLink,
    whatsappShareLink,
    emailShareLink,
    copied
  };
};

export { useSocialShare as u };
//# sourceMappingURL=useSocialShare-ZpPVAG52.mjs.map
