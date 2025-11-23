export default defineNuxtPlugin(() => {
    if (import.meta.client) {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://embed.tawk.to/69234c9ecd70fb195fa05da2/1jaou6jae";
      script.charset = "UTF-8";
      script.setAttribute("crossorigin", "*");
  
      document.head.appendChild(script);
    }
  });
  