This package implements `ValidEmail` using `Match.Where`.  This means that you can use:

```javascript
check(email, ValidEmail);
```

and:

```javascript
if (Match.test(email, ValidEmail)) {
    // ...
}
```

For code clarity it also provides `IsValidEmail`:

```javascript
if (IsValidEmail(email)) {
    // ...
}
```

By default, a very basic regexp is used:

```javascript
ValidEmail.regex = /^[A-Z0-9\._%+-]+@[A-Z0-9\.-]+\.[A-Z]{2,}$/i;
```

But you can change the value of `ValidEmail.regex` to suit your needs.

Some extra regexps are provided:

```javascript
// /^[^@]+@[^@]+$/;
ValidEmail.regex = ValidEmail.permissive;
```

And if you wanted to follow the rfc you could do this:

```javascript
// from http://badsyntax.co/post/javascript-email-validation-rfc822
ValidEmail.regex = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/;
```

## License
MIT

