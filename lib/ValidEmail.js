ValidEmail = Match.Where(function(x) {
    check(x, String);
    return x.length <= 254 && ValidEmail.regex.test(x);
});

ValidEmail.regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

ValidEmail.permissive = /^[^@]+@[^@]+$/;

