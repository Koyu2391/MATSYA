import { useEffect } from "react";

interface SeoProps {
  title: string;
  description?: string;
  canonical?: string;
  jsonLd?: Record<string, any>;
}

const setMeta = (name: string, content: string) => {
  let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const setOg = (property: string, content: string) => {
  let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

export function Seo({ title, description, canonical, jsonLd }: SeoProps) {
  useEffect(() => {
    document.title = title;
    if (description) {
      setMeta("description", description);
      setOg("og:description", description);
    }
    setOg("og:title", title);
    if (canonical) {
      let link = document.querySelector("link[rel=canonical]") as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    }
    if (jsonLd) {
      let script = document.getElementById("page-jsonld") as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = "page-jsonld";
        document.head.appendChild(script);
      }
      script.text = JSON.stringify(jsonLd);
    }
  }, [title, description, canonical, jsonLd]);
  return null;
}

export default Seo;
