Package.describe({
    name: "froatsnook:valid-email",
    summary: "Validate email addresses.",
    version: "1.0.0",
    git: "https://github.com/froatsnook/meteor-valid-email"
});

Package.onUse(function(api) {
    api.versionsFrom("0.9.2");
    api.use("check");
    api.addFiles("lib/ValidEmail.js", ["client", "server"]);
    api.addFiles("lib/IsValidEmail.js", ["client", "server"]);

    api.export("ValidEmail", ["client", "server"]);
    api.export("IsValidEmail", ["client", "server"]);
});

Package.onTest(function(api) {
    api.use("check");
    api.use("tinytest");
    api.use("froatsnook:valid-email");

    api.addFiles("test/tests.js");
});

