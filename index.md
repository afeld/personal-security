---
---

# {{ site.title }}

This is a guide for individuals who are interested in improving their digital security/privacy. Only basic knowledge of how to use your computer and mobile device is required.

## Low-hanging fruit

_Everyone should do these._ You only need to set them up once, are high value for relatively low effort, and there is little/no downside.

### Browser(s)

- **Install the [HTTPS Everywhere](https://www.eff.org/https-everywhere%20) browser extension.**

### Devices

_Computers, phones, tablets, etc._

- **Enable password/fingerprint lock.**
- **Set them to auto-lock after a short period of time (less than five minutes).**
- **Enable full disk encryption.**
  - Back up your system first
  - Computer
    - Windows: [BitLocker](https://support.microsoft.com/en-us/instantanswers/e7d75dd2-29c2-16ac-f03d-20cfdf54202f/turn-on-device-encryption)
    - Mac: [FileVault](https://support.apple.com/en-us/HT204837)
  - Phone
    - [Android](https://www.howtogeek.com/141953/how-to-encrypt-your-android-phone-and-why-you-might-want-to/)
    - iOS: just set a password

### Passwords

**Use non-trivial passwords.** Make sure that your passwords:

* Incorporate letters, numbers, and symbols
* Are long (the longer the better)
* Are not common, such as
  * A word from the dictionary
  * `password`, or some variation thereof
* Are not something that can be easily guessed based on public records or social media, such as
  * Your birthday
  * Your child's/pet's name
  * etc.

Without following these guidelines, hackers can get into your account(s) extremely easily. Note that different services have different requirements around passwords.

## Next steps

These tips require a bit more commitment or technical comfort, but are worth the effort.

### Messaging

- **Use a messaging application with end-to-end encryption (E2EE).** Note that these do require the recipient to be using the same app.
  - [Signal](https://whispersystems.org/)
  - [WhatsApp](https://www.whatsapp.com/)
  - [More options](http://www.techtimes.com/articles/169154/20160709/9-messaging-apps-with-end-to-end-encryption-facebook-messenger-whatsapp-imessage-and-more.htm)

### Sensitive information

Examples of sensitive information:

* Credit card numbers
* Passwords

#### Who to share it with

**If someone contacts you via phone or email and asks for sensitive information, don't give it to them.** This often comes up as fake customer support or debt collectors. If this happens and you think it _might_ be legitimate, follow up via official channels (the number on the back of your credit card, etc.)

#### How to send

**Don't share sensitive information in SMS or (unencrypted) email directly.** Instead, use [Fugacious](https://fugacio.us/) and send the link.

### Passwords

- **Use different ([non-trivial](#passwords)) passwords for every service.**
  - If you use the same password across services, one service getting hacked means your accounts with other services could be compromised. This happens [all the time](https://www.nytimes.com/interactive/2015/07/29/technology/personaltech/what-parts-of-your-information-have-been-exposed-to-hackers-quiz.html?_r=0).
  - The best way to do this is with a [password manager](#password-manager).

#### Password manager

**Use a password manager.** A password manager solves a number of problems:

* You don't have to remember all of your different passwords for different services.
* Your list of passwords can't be stolen as easily as if they are written on paper, a Word document, or a spreadsheet.
* Most can generate a random, non-trivial password.
  * This often means you won't know your own password for a given service...which is not a bad thing!

Try one of the following:

- Apple iMessage (versus normal SMS)
- [1Password](https://1password.com/)
- [KeePassX](https://www.keepassx.org/) (free and open source)
- [LastPass](https://www.lastpass.com/)
- One that comes built in to your browser
  - Chrome: [Google Smart Lock](https://support.google.com/chrome/answer/95606?co=GENIE.Platform%3DDesktop&hl=en)
  - [Firefox Password Manager](https://support.mozilla.org/en-US/kb/password-manager-remember-delete-change-and-import)
  - Safari: [Apple Keychain](https://www.macobserver.com/tmo/article/getting-started-with-apples-keychain-password-manager)

#### Multi-factor authentication

**Enable multi-factor authentication (MFA) on every service that you can.** MFA means that a service requires more than just a password to log in. This means that even if a hacker is able to steal/guess your password, they still won't be able to log in. A large number of services offer MFA — see [this list](https://twofactorauth.org/).

When enabling MFA, using text messages (SMS) or [Authy](https://www.authy.com/) is recommended. Unlike the popular [Google Authenticator](https://support.google.com/accounts/answer/1066447?hl=en), if you lose your phone, you won't be locked out of your accounts.

### Devices

- **Back up your devices regularly.**
  - When you see the option, make sure that the backups are encrypted.
- **Update your operating systems and software early and often.**
  - **Enable automatic updates.**
    - [Mac](https://support.apple.com/kb/PH25371?locale=en_US)
    - [iOS](http://www.howtogeek.com/232426/how-to-enable-or-disable-automatic-updates-for-ios-apps/)

### Payments

- **Pay with a credit card chip.**
- **Use disposable/one-time/virtual credit card numbers for payments, especially if you are wary of the vendor.** Not all banks offer this. Examples:
  - [Bank of America ShopSafe](https://www.bankofamerica.com/privacy/accounts-cards/shopsafe.go)
  - [Citi Bank Virtual Account
Numbers](https://www.cardbenefits.citi.com/Products/Virtual-Account-Numbers)
- **Make online payments through PayPal, or another trusted service that guarantees payments.**
- **Don't let vendors store your credit card details.**
  - Many will have an option like "save for later" — don't check that box.

### Wifi

**Make sure there is a password on your wifi network.** If you like having an open network, you can buy a router with a built-in public hotspot.

## Privacy vs. security

In short, security is like having bars on your windows: hackers can't get in, but they can see through. Privacy is like having blinds, where they can't see in, but they can reach their hand in and unlock the door. You'll need a combination of protections to address both.

## Glossary

* **Multi-factor authentication (MFA)**: A service requiring more than just a password to log in.
* **Passphrase**: Synonym for `password`.
* **Privacy**: TODO
* **Security**: TODO
* **SMS**: Short Message Service, also known as "text messages".
* **Two-factor authentication (2FA):** See `multi-factor authentication`.

## Disclaimer

This guide makes no guarantees that, even with following all steps of this guide, that your digital security/privacy will not be compromised. If you are a high-value target for hackers, such as

* An activist
* A celebrity
* An executive
* A journalist
* A politician

this guide will not be enough. You should follow this guide, but also consult a security professional.

## See also

* [Elana Hashman's Cryptoparty Workshop](https://hashman.ca/encryption-workshop/) at [Protect Yo'Self!](https://www.eventbrite.com/e/protect-yoself-a-day-of-workshops-on-security-and-online-privacy-tickets-31114213450#)
    * The inspiration for this guide
* [Tech Solidarity's Security Guide](https://techsolidarity.org/resources/basic_security.htm)
* [Crash Override's Automated Cybersecurity Helper (C.O.A.C.H)](http://www.crashoverridenetwork.com/coach.html)
    * A resource "for people who are experiencing online abuse"
