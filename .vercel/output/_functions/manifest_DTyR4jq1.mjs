import 'piccolore';
import { k as decodeKey } from './chunks/astro/server__V4Ulgxo.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Bh4Sl17F.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/user/huhugerman-landing-page/","cacheDir":"file:///home/user/huhugerman-landing-page/node_modules/.astro/","outDir":"file:///home/user/huhugerman-landing-page/dist/","srcDir":"file:///home/user/huhugerman-landing-page/src/","publicDir":"file:///home/user/huhugerman-landing-page/public/","buildClientDir":"file:///home/user/huhugerman-landing-page/dist/client/","buildServerDir":"file:///home/user/huhugerman-landing-page/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"el-viaje-de-emilio/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/el-viaje-de-emilio","isIndex":false,"type":"page","pattern":"^\\/el-viaje-de-emilio\\/?$","segments":[[{"content":"el-viaje-de-emilio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/el-viaje-de-emilio.astro","pathname":"/el-viaje-de-emilio","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"escenas/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/escenas","isIndex":false,"type":"page","pattern":"^\\/escenas\\/?$","segments":[[{"content":"escenas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/escenas.astro","pathname":"/escenas","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"investigacion/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/investigacion","isIndex":false,"type":"page","pattern":"^\\/investigacion\\/?$","segments":[[{"content":"investigacion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/investigacion.astro","pathname":"/investigacion","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"metodo/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/metodo","isIndex":false,"type":"page","pattern":"^\\/metodo\\/?$","segments":[[{"content":"metodo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/metodo.astro","pathname":"/metodo","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"riesgo/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/riesgo","isIndex":false,"type":"page","pattern":"^\\/riesgo\\/?$","segments":[[{"content":"riesgo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/riesgo.astro","pathname":"/riesgo","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"servicios/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/servicios","isIndex":false,"type":"page","pattern":"^\\/servicios\\/?$","segments":[[{"content":"servicios","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/servicios.astro","pathname":"/servicios","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/intake","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/intake\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"intake","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/intake.ts","pathname":"/api/intake","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/user/huhugerman-landing-page/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/user/huhugerman-landing-page/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/user/huhugerman-landing-page/src/pages/el-viaje-de-emilio.astro",{"propagation":"none","containsHead":true}],["/home/user/huhugerman-landing-page/src/pages/escenas.astro",{"propagation":"none","containsHead":true}],["/home/user/huhugerman-landing-page/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/user/huhugerman-landing-page/src/pages/investigacion.astro",{"propagation":"none","containsHead":true}],["/home/user/huhugerman-landing-page/src/pages/metodo.astro",{"propagation":"none","containsHead":true}],["/home/user/huhugerman-landing-page/src/pages/riesgo.astro",{"propagation":"none","containsHead":true}],["/home/user/huhugerman-landing-page/src/pages/servicios.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/api/intake@_@ts":"pages/api/intake.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/el-viaje-de-emilio@_@astro":"pages/el-viaje-de-emilio.astro.mjs","\u0000@astro-page:src/pages/escenas@_@astro":"pages/escenas.astro.mjs","\u0000@astro-page:src/pages/investigacion@_@astro":"pages/investigacion.astro.mjs","\u0000@astro-page:src/pages/metodo@_@astro":"pages/metodo.astro.mjs","\u0000@astro-page:src/pages/riesgo@_@astro":"pages/riesgo.astro.mjs","\u0000@astro-page:src/pages/servicios@_@astro":"pages/servicios.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DTyR4jq1.mjs","/home/user/huhugerman-landing-page/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_a7YCt5KD.mjs","/home/user/huhugerman-landing-page/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/home/user/huhugerman-landing-page/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_B5nLO0SI.mjs","/home/user/huhugerman-landing-page/src/pages/blog/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.DXL5ypuv.js","/home/user/huhugerman-landing-page/src/pages/escenas.astro?astro&type=script&index=0&lang.ts":"_astro/escenas.astro_astro_type_script_index_0_lang.BvfVGHhz.js","/home/user/huhugerman-landing-page/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.Ccd9thft.js","/home/user/huhugerman-landing-page/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.CQ3OD96y.js","/home/user/huhugerman-landing-page/src/components/IntakeModal.astro?astro&type=script&index=0&lang.ts":"_astro/IntakeModal.astro_astro_type_script_index_0_lang.CInygeme.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/user/huhugerman-landing-page/src/pages/blog/index.astro?astro&type=script&index=0&lang.ts","const l=document.getElementById(\"blogSearch\"),o=document.querySelectorAll(\".filter-btn\"),u=document.querySelectorAll(\".post-card\"),h=document.getElementById(\"resultsCount\"),m=document.getElementById(\"noResults\");let c=\"all\",s=\"\";function n(){let t=0;u.forEach(e=>{const r=e.dataset.title??\"\",i=e.dataset.tags??\"\",d=e.dataset.category??\"\",a=(!s||r.includes(s)||i.includes(s))&&(c===\"all\"||d===c);e.hidden=!a,a&&t++}),h.textContent=`${t} artículo${t!==1?\"s\":\"\"}`,m.hidden=t>0}l.addEventListener(\"input\",()=>{s=l.value.trim().toLowerCase(),n()});o.forEach(t=>{t.addEventListener(\"click\",()=>{o.forEach(e=>e.classList.remove(\"active\")),t.classList.add(\"active\"),c=t.dataset.filter??\"all\",n()})});"],["/home/user/huhugerman-landing-page/src/pages/escenas.astro?astro&type=script&index=0&lang.ts","var s=Array.from(document.querySelectorAll(\".stack-card\")),r=document.getElementById(\"stackReset\"),c=document.getElementById(\"resetStack\");function t(){return s.filter(function(e){return!e.classList.contains(\"discarded\")})}function i(){var e=t()[0];e&&(e.classList.add(\"discarded\"),t().length===0&&(r.style.display=\"block\"))}s.forEach(function(e){e.addEventListener(\"click\",function(){t()[0]===e&&i()}),e.addEventListener(\"keydown\",function(n){(n.key===\"Enter\"||n.key===\" \")&&(n.preventDefault(),t()[0]===e&&i())})});c.addEventListener(\"click\",function(){s.forEach(function(e){e.classList.remove(\"discarded\")}),r.style.display=\"none\"});"],["/home/user/huhugerman-landing-page/src/pages/index.astro?astro&type=script&index=0&lang.ts","window.addEventListener(\"load\",function(){setTimeout(function(){document.getElementById(\"loader\").classList.add(\"hidden\")},2100)});document.querySelectorAll('a[href^=\"#\"]').forEach(function(t){t.addEventListener(\"click\",function(n){var e=document.querySelector(this.getAttribute(\"href\"));e&&(n.preventDefault(),e.scrollIntoView({behavior:\"smooth\",block:\"start\"}))})});"],["/home/user/huhugerman-landing-page/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","(function(){var n=document.getElementById(\"siteNavToggle\"),t=document.getElementById(\"siteNavLinks\");if(!n||!t)return;function i(){t.classList.add(\"open\"),n.setAttribute(\"aria-expanded\",\"true\"),document.body.classList.add(\"nav-open\");var e=t.querySelector(\"a\");e&&e.focus()}function a(){t.classList.remove(\"open\"),n.setAttribute(\"aria-expanded\",\"false\"),document.body.classList.remove(\"nav-open\")}n.addEventListener(\"click\",function(){t.classList.contains(\"open\")?a():i()}),document.addEventListener(\"keydown\",function(e){e.key===\"Escape\"&&a()}),document.addEventListener(\"click\",function(e){!n.contains(e.target)&&!t.contains(e.target)&&a()}),t.querySelectorAll(\"a\").forEach(function(e){e.addEventListener(\"click\",a)})})();"],["/home/user/huhugerman-landing-page/src/components/IntakeModal.astro?astro&type=script&index=0&lang.ts","(function(){var d=document.getElementById(\"huhu-overlay\");function o(e){[\"cover\",\"q1\",\"q2\",\"q3\",\"done\"].forEach(function(t){var n=document.getElementById(\"screen-\"+t);n&&(n.hidden=t!==e)})}function a(){d.hidden=!1,document.body.style.overflow=\"hidden\",o(\"cover\")}function i(){d.hidden=!0,document.body.style.overflow=\"\"}window.openHuhuIntake=a,d.addEventListener(\"click\",function(e){e.target===d&&i()}),document.addEventListener(\"keydown\",function(e){e.key===\"Escape\"&&!d.hidden&&i()}),[\"huhu-x\",\"cover-close\",\"q1-close\",\"q2-close\",\"q3-close\",\"done-close\"].forEach(function(e){var t=document.getElementById(e);t&&t.addEventListener(\"click\",i)}),document.getElementById(\"cover-next\").addEventListener(\"click\",function(){o(\"q1\")});function r(e,t){var n=document.getElementById(e),l=document.getElementById(t),c=n.value.trim().length>=20;return l.hidden=c,n.classList.toggle(\"err\",!c),c}[\"situacion\",\"riesgo\",\"realidad\"].forEach(function(e){var t=document.getElementById(\"f-\"+e),n=document.getElementById(\"cnt-\"+e);t.addEventListener(\"input\",function(){n.textContent=t.value.length})}),document.getElementById(\"q1-next\").addEventListener(\"click\",function(){r(\"f-situacion\",\"err-situacion\")&&o(\"q2\")}),document.getElementById(\"q2-next\").addEventListener(\"click\",function(){r(\"f-riesgo\",\"err-riesgo\")&&o(\"q3\")}),document.getElementById(\"q3-submit\").addEventListener(\"click\",function(){if(r(\"f-realidad\",\"err-realidad\")){var e=document.getElementById(\"q3-submit\");e.disabled=!0,e.textContent=\"Enviando…\",fetch(\"/api/intake\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({situacion:document.getElementById(\"f-situacion\").value.trim(),riesgo:document.getElementById(\"f-riesgo\").value.trim(),realidad:document.getElementById(\"f-realidad\").value.trim(),website:document.getElementById(\"f-website\").value})}).then(function(t){return t.json()}).then(function(t){t.ok?o(\"done\"):(e.disabled=!1,e.textContent=\"Enviar caso\",t.errors&&[\"situacion\",\"riesgo\",\"realidad\"].forEach(function(n){t.errors[n]&&(document.getElementById(\"err-\"+n).hidden=!1,document.getElementById(\"f-\"+n).classList.add(\"err\"))}))}).catch(function(){e.disabled=!1,e.textContent=\"Enviar caso\";var t=document.getElementById(\"err-realidad\");t.textContent=\"Error de red. Intenta de nuevo.\",t.hidden=!1})}})})();"]],"assets":["/_astro/_slug_.Cdq-1A-F.css","/_astro/index.CCNIRxPe.css","/_astro/el-viaje-de-emilio.p8yCH2f8.css","/_astro/escenas.BA1K9S49.css","/_astro/investigacion.sZk0faQc.css","/_astro/metodo.ZPvPAAcb.css","/_astro/servicios.CmaVgktP.css","/_astro/index.B1a21CvQ.css","/favicon.ico","/favicon.svg","/robots.txt","/sitemap-index.xml","/sitemap.xml","/blog/index.html","/el-viaje-de-emilio/index.html","/escenas/index.html","/investigacion/index.html","/metodo/index.html","/riesgo/index.html","/servicios/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"XMXI6v/svSJU4lLfE6YqKnqgMJ4CwXr2xSCsiSzLfI0="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
