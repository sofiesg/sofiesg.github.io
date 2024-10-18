src = "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js";
type = "text/javascript";

WebFont.load({
  google: { families: ["PT Serif:400,400italic,700,700italic"] },
});

!(function (o, c) {
  var n = c.documentElement,
    t = " w-mod-";
  (n.className += t + "js"),
    ("ontouchstart" in o || (o.DocumentTouch && c instanceof DocumentTouch)) &&
      (n.className += t + "touch");
})(window, document);
