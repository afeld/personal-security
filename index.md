---
---

# {{ site.title }}

This is a guide for individuals who are interested in improving their digital security/privacy — no technical experience required.

## Super easy, one-time things

**Everyone should do these.** You only need to set them once, and there is little/no downside.

### Browser(s)

- Install the HTTPS Everywhere browser extension.

### Devices

_Computers, phones, tablets, etc._

- Enable password/fingerprint lock.
- Set them to auto-lock after a short period of time (less than five minutes).
- Enable full disk encryption.
  - Back up your system first
  - Computer
    - Windows: Bitlocker
    - Mac: FileVault
  - Phone
    - iOS: just set a password

## Next steps

These tips require a bit more commitment, but are worth the effort.

### Messaging

- Use a messaging application with end-to-end encryption (E2EE). Note that these do require the recipient to be using the same app.
  - Signal
  - WhatsApp
  - [More options](http://www.techtimes.com/articles/169154/20160709/9-messaging-apps-with-end-to-end-encryption-facebook-messenger-whatsapp-imessage-and-more.htm)

### Passwords

- Use different non-trivial passwords for every service.
  - If you use the same password across services, one service getting hacked means your accounts with other services could be compromised. This happens [all the time](https://www.nytimes.com/interactive/2015/07/29/technology/personaltech/what-parts-of-your-information-have-been-exposed-to-hackers-quiz.html?_r=0).
  - The best way to do this is with a [password manager](#password-manager).

#### Password manager

A password manager solves a number of problems:

* You don't have to remember all of your different passwords for different services.
* Your list of passwords can't be stolen as easily as if they are written on paper, a Word document, or a spreadsheet.
* Most can generate a random, non-trivial password.
  * This often means you won't know your own password for a given service...which is not a bad thing!

Use one of the following:

- 1Password
- KeePassX (free)
- LastPass
- One that comes built in to your browser
  - Chrome: https://support.google.com/chrome/answer/95606?co=GENIE.Platform%3DDesktop&hl=en
  - [Firefox Password Manager](https://support.mozilla.org/en-US/kb/password-manager-remember-delete-change-and-import)
  - Safari: Apple Keychain

#### Two-factor authentication

[A large number of sites](https://twofactorauth.org/) offer two-factor/multi-factor authentication (2FA/MFA). Using text messages (SMS) or Authy is recommended. Unlike the popular Google Authenticator, if you lose your phone, you won't be locked out of your accounts.

### Devices

- Back up your devices regularly.
  - When you see the option, make sure that the backups are encrypted.
- Update your operating systems and software early and often.
  - Enable automatic updates
    - [Mac](https://support.apple.com/kb/PH25371?locale=en_US)
    - [iOS](http://www.howtogeek.com/232426/how-to-enable-or-disable-automatic-updates-for-ios-apps/)

### Payments

- Pay with a credit card chip
- Use one-time credit card numbers for payments, especially if you are wary of the vendor
- Make online payments through PayPal, or another trusted service that guarantees payments

## Going even further

These tips are for people that are very serious about their personal privacy/security.

- Use Tor
  - The easiest way to do this (at least for visiting web sites) is by using the [Tor browser](https://www.torproject.org/projects/torbrowser.html.en).
- Use the [Brave](https://brave.com/) web browser.
- Use a camera cover.
- Use PGP for your email.
  - [Keybase](https://keybase.io/)
  - [How to encrypt your email in your browser](https://code.tutsplus.com/articles/its-time-to-encrypt-your-email-using-the-browser--cms-23358)

## Privacy vs. security

TODO

## Disclaimer

This guide makes no guarantees that, even with following all steps of this guide, that your digital security/privacy will not be compromised. If you are a high-value target for hackers, such as

* An activist
* A celebrity
* An executive
* A journalist
* A politician

this guide will not be enough. You should follow this guide, but _also_ consult a security professional.

## See also

* https://hashman.ca/encryption-workshop/
