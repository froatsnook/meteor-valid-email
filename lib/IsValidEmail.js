IsValidEmail = function(email) {
    return Match.test(email, ValidEmail);
};

