import domtoimage from 'dom-to-image';
import { ref } from 'vue';

const useNodeToImage = (nodeSelector, onConversion, ignoredNodes = []) => {
  const converting = ref(false);
  const blob = ref();
  const convertNodeToImage = async () => {
    try {
      converting.value = true;
      const node = (void 0).querySelector(nodeSelector);
      const response = node ? await domtoimage.toBlob(node, {
        filter(node2) {
          return !(ignoredNodes == null ? void 0 : ignoredNodes.includes(node2 == null ? void 0 : node2.id));
        }
      }) : null;
      converting.value = false;
      if (response) {
        blob.value = response;
        onConversion == null ? void 0 : onConversion(response);
      }
    } catch (e) {
      converting.value = false;
      console.error("FAILED TO CONVERT NODE", e);
    }
  };
  return {
    blob,
    converting,
    convertNodeToImage
  };
};

export { useNodeToImage as u };
//# sourceMappingURL=useNodeToImage-Ci3SXweI.mjs.map
