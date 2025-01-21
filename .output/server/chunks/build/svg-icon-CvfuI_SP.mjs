import { useSSRContext, defineComponent, computed, defineAsyncComponent, unref, createVNode, resolveDynamicComponent } from 'vue';
import { ssrRenderVNode } from 'vue/server-renderer';

const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};
const FALLBACK_SVG = "empty";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "svg-icon",
  __ssrInlineRender: true,
  props: {
    name: { default: "spin-logo" }
  },
  setup(__props) {
    const props = __props;
    const icon = computed(() => {
      try {
        const comp = __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../assets/svgs/Vector (2).svg": () => import('./Vector (2)-Q0NybO0p.mjs'), "../assets/svgs/account_circle.svg": () => import('./account_circle-DorSTVxG.mjs'), "../assets/svgs/arrow_forward.svg": () => import('./arrow_forward-C_Mh_Js2.mjs'), "../assets/svgs/arrow_right_alt.svg": () => import('./arrow_right_alt-BWk_s7ET.mjs'), "../assets/svgs/badge.svg": () => import('./badge-pGpjmwg0.mjs'), "../assets/svgs/bell.svg": () => import('./bell-Usz4aYj9.mjs'), "../assets/svgs/bubble-dollar.svg": () => import('./bubble-dollar-DlqDTdUP.mjs'), "../assets/svgs/bubble-play.svg": () => import('./bubble-play-U6dlCSGD.mjs'), "../assets/svgs/bubble-question-mark.svg": () => import('./bubble-question-mark-CzHuPARu.mjs'), "../assets/svgs/bubble-search.svg": () => import('./bubble-search-DzcmqvES.mjs'), "../assets/svgs/celebration.svg": () => import('./celebration-CeJGqA7T.mjs'), "../assets/svgs/dotted-arrow-down.svg": () => import('./dotted-arrow-down-mYo1L2e6.mjs'), "../assets/svgs/dotted-arrow-up.svg": () => import('./dotted-arrow-up-BUwOJs8e.mjs'), "../assets/svgs/empty.svg": () => import('./empty-CtqgoNfH.mjs'), "../assets/svgs/facebook.svg": () => import('./facebook-BOT7N_pq.mjs'), "../assets/svgs/genres (1).svg": () => import('./genres (1)-xf8AlGJ_.mjs'), "../assets/svgs/genres.svg": () => import('./genres-Blf1M0Ma.mjs'), "../assets/svgs/history.svg": () => import('./history-Cxz39ZRg.mjs'), "../assets/svgs/instagram.svg": () => import('./instagram-DfyPvSah.mjs'), "../assets/svgs/linkedin.svg": () => import('./linkedin-DoDcyWSP.mjs'), "../assets/svgs/location.svg": () => import('./location-BH9w-mNC.mjs'), "../assets/svgs/mic.svg": () => import('./mic-Bx8n8xSW.mjs'), "../assets/svgs/money-mouth.svg": () => import('./money-mouth-D0ok97WN.mjs'), "../assets/svgs/money.svg": () => import('./money-3jNNvft3.mjs'), "../assets/svgs/music.svg": () => import('./music-BrmQwmKH.mjs'), "../assets/svgs/pink-heart.svg": () => import('./pink-heart-C4UlNH2u.mjs'), "../assets/svgs/right-caret.svg": () => import('./right-caret-8yLb4Afo.mjs'), "../assets/svgs/sad.svg": () => import('./sad-3HyN0gYJ.mjs'), "../assets/svgs/share.svg": () => import('./share-CYhuNQUy.mjs'), "../assets/svgs/spin-logo.svg": () => import('./spin-logo-BnJSmElt.mjs'), "../assets/svgs/spin-request.svg": () => import('./spin-request-Ckha8_3M.mjs'), "../assets/svgs/star.svg": () => import('./star-BP7o1-E9.mjs'), "../assets/svgs/tiktok.svg": () => import('./tiktok-DKkJVOPN.mjs'), "../assets/svgs/trophy.svg": () => import('./trophy-CqQJYFku.mjs'), "../assets/svgs/twitter.svg": () => import('./twitter-BTfaP38x.mjs'), "../assets/svgs/wallet.svg": () => import('./wallet-DPnXeIDz.mjs'), "../assets/svgs/whatsapp.svg": () => import('./whatsapp-CxoY_cje.mjs'), "../assets/svgs/woman-dancing.svg": () => import('./woman-dancing-B5ODlXbO.mjs'), "../assets/svgs/x.svg": () => import('./x-BDkOuIFV.mjs'), "../assets/svgs/youtube.svg": () => import('./youtube-BqY7Agva.mjs') }), `../assets/svgs/${props.name}.svg`, 4);
        return defineAsyncComponent(() => comp);
      } catch {
        const comp = __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../assets/svgs/Vector (2).svg": () => import('./Vector (2)-Q0NybO0p.mjs'), "../assets/svgs/account_circle.svg": () => import('./account_circle-DorSTVxG.mjs'), "../assets/svgs/arrow_forward.svg": () => import('./arrow_forward-C_Mh_Js2.mjs'), "../assets/svgs/arrow_right_alt.svg": () => import('./arrow_right_alt-BWk_s7ET.mjs'), "../assets/svgs/badge.svg": () => import('./badge-pGpjmwg0.mjs'), "../assets/svgs/bell.svg": () => import('./bell-Usz4aYj9.mjs'), "../assets/svgs/bubble-dollar.svg": () => import('./bubble-dollar-DlqDTdUP.mjs'), "../assets/svgs/bubble-play.svg": () => import('./bubble-play-U6dlCSGD.mjs'), "../assets/svgs/bubble-question-mark.svg": () => import('./bubble-question-mark-CzHuPARu.mjs'), "../assets/svgs/bubble-search.svg": () => import('./bubble-search-DzcmqvES.mjs'), "../assets/svgs/celebration.svg": () => import('./celebration-CeJGqA7T.mjs'), "../assets/svgs/dotted-arrow-down.svg": () => import('./dotted-arrow-down-mYo1L2e6.mjs'), "../assets/svgs/dotted-arrow-up.svg": () => import('./dotted-arrow-up-BUwOJs8e.mjs'), "../assets/svgs/empty.svg": () => import('./empty-CtqgoNfH.mjs'), "../assets/svgs/facebook.svg": () => import('./facebook-BOT7N_pq.mjs'), "../assets/svgs/genres (1).svg": () => import('./genres (1)-xf8AlGJ_.mjs'), "../assets/svgs/genres.svg": () => import('./genres-Blf1M0Ma.mjs'), "../assets/svgs/history.svg": () => import('./history-Cxz39ZRg.mjs'), "../assets/svgs/instagram.svg": () => import('./instagram-DfyPvSah.mjs'), "../assets/svgs/linkedin.svg": () => import('./linkedin-DoDcyWSP.mjs'), "../assets/svgs/location.svg": () => import('./location-BH9w-mNC.mjs'), "../assets/svgs/mic.svg": () => import('./mic-Bx8n8xSW.mjs'), "../assets/svgs/money-mouth.svg": () => import('./money-mouth-D0ok97WN.mjs'), "../assets/svgs/money.svg": () => import('./money-3jNNvft3.mjs'), "../assets/svgs/music.svg": () => import('./music-BrmQwmKH.mjs'), "../assets/svgs/pink-heart.svg": () => import('./pink-heart-C4UlNH2u.mjs'), "../assets/svgs/right-caret.svg": () => import('./right-caret-8yLb4Afo.mjs'), "../assets/svgs/sad.svg": () => import('./sad-3HyN0gYJ.mjs'), "../assets/svgs/share.svg": () => import('./share-CYhuNQUy.mjs'), "../assets/svgs/spin-logo.svg": () => import('./spin-logo-BnJSmElt.mjs'), "../assets/svgs/spin-request.svg": () => import('./spin-request-Ckha8_3M.mjs'), "../assets/svgs/star.svg": () => import('./star-BP7o1-E9.mjs'), "../assets/svgs/tiktok.svg": () => import('./tiktok-DKkJVOPN.mjs'), "../assets/svgs/trophy.svg": () => import('./trophy-CqQJYFku.mjs'), "../assets/svgs/twitter.svg": () => import('./twitter-BTfaP38x.mjs'), "../assets/svgs/wallet.svg": () => import('./wallet-DPnXeIDz.mjs'), "../assets/svgs/whatsapp.svg": () => import('./whatsapp-CxoY_cje.mjs'), "../assets/svgs/woman-dancing.svg": () => import('./woman-dancing-B5ODlXbO.mjs'), "../assets/svgs/x.svg": () => import('./x-BDkOuIFV.mjs'), "../assets/svgs/youtube.svg": () => import('./youtube-BqY7Agva.mjs') }), `../assets/svgs/${FALLBACK_SVG}.svg`, 4);
        return defineAsyncComponent(() => comp);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(icon)) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(icon)), _attrs, null), _parent);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/svg-icon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as _ };
//# sourceMappingURL=svg-icon-CvfuI_SP.mjs.map
