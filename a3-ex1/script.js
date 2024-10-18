src = "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js";
type = "text/javascript";

WebFont.load({
  google: {
    families: [
      "Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic",
      "Oswald:200,300,400,500,600,700",
      "Cormorant Garamond:regular,500,600",
    ],
  },
});

!(function (o, c) {
  var n = c.documentElement,
    t = " w-mod-";
  (n.className += t + "js"),
    ("ontouchstart" in o || (o.DocumentTouch && c instanceof DocumentTouch)) &&
      (n.className += t + "touch");
})(window, document);

// src =
//   "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=618289092e6f5b06430e43fe";
// type = "text/javascript";
// integrity = "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=";
// crossorigin = "anonymous";

// src =
//   "https://assets.website-files.com/618289092e6f5b06430e43fe/js/webflow.103fe75c4.js";
// type = "text/javascript";
