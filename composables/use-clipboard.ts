import { useClipboard } from "@vueuse/core";

const source = ref("Hello");
const { text, copy, copied, isSupported } = useClipboard({ source });

export { text, copy, copied, isSupported };
