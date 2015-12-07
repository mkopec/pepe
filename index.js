// Import the page-mod API
var pageMod = require("sdk/page-mod");
var self = require('sdk/self');

pageMod.PageMod({
  include: "https://pe.szczecin.pl/*",
  contentScriptFile: [self.data.url("jquery-2.1.4.min.js"), self.data.url("pepe.js")]
});
