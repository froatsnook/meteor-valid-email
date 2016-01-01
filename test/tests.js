Tinytest.add("typeof ValidEmail === \"object\"", function(test) {
    test.equal(typeof ValidEmail, "object");
});

Tinytest.add("typeof IsValidEmail === \"function\"", function(test) {
    test.equal(typeof IsValidEmail, "function");
});

var valid = [
    "email@example.com",
    "firstname.lastname@example.com",
    "email@subdomain.example.com",
    "firstname+lastname@example.com",
    "email@123.123.123.123",
    "email@[123.123.123.123]",
    "“email”@example.com",
    "1234567890@example.com",
    "email@example-one.com",
    "_______@example.com",
    "email@example.name",
    "email@example.museum",
    "email@example.co.jp",
    "firstname-lastname@example.com",
    "email@example",
];

valid.forEach(function(email) {
    Tinytest.add("valid: " + email, function(test) {
        test.equal(IsValidEmail(email), true);
        check(email, ValidEmail);
    });
});

var invalid = [
    "plainaddress",
    "#@%^%#$@#$@#.com",
    "@example.com",
    "Joe Smith <email@example.com>",
    "email.example.com",
    "email@example@example.com",
    ".email@example.com",
    "email.@example.com",
    "email..email@example.com",
    "あいうえお@example.com",
    "email@example.com (Joe Smith)",
    "email@-example.com",
    "email@111.222.333.44444",
    "email@example..com",
    "Abc..123@example.com",
    "\"(),:;<>[\\]@example.com",
    "just\"not\"right@example.com",
    "this\\ is\"really\"not\\allowed@example.com",
];

invalid.forEach(function(email) {
    Tinytest.add("invalid: " + email, function(test) {
        test.equal(IsValidEmail(email), false);
        test.throws(function() {
            check(email, ValidEmail);
        });
    });
});

