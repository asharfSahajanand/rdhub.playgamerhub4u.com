(async function () {
  const domain = location.hostname.replace("www.", "");

  const site = {
        "d1": "/23330730517/playgamershub4u.com_d1",
        "d2": "/23330730517/playgamershub4u.com_d2",
        "d3": "/23330730517/playgamershub4u.com_d3",
        "reward": "/23330730517/playgamershub4u.com_reward",
        "inter": "/23330730517/playgamershub4u.com_inter",
        "gtag": "G-4R2W0RNNG5",
        "conversion": "AW-18079014570/upnmCNrBq5kcEKq936xD",
        "gam": "AW-18079014570"
    };

  window.AD_CONFIG = site;

  /* ---------------- gtag setup (shared) ---------------- */
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;

  /* ---------------- Load GTM script once (primary ID) ---------------- */
  const gaScript = document.createElement("script");
  gaScript.async = true;
  gaScript.src = "https://www.googletagmanager.com/gtag/js?id=" + site.gam;
  document.head.appendChild(gaScript);

  /* ---------------- Configure both IDs ---------------- */
  gtag("js", new Date());
  gtag("config", site.gam);   // Google Ads
  gtag("config", site.gtag);  // GA4
})();