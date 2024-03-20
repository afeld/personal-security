---
title: Home
description: Guide for individuals who are interested in improving their digital security/privacy
---

# {{ site.title }}

This is a guide for individuals who are interested in improving their digital security/privacy. Only basic knowledge of how to use your computer and mobile device is required.

**_Also available as [slides](https://docs.google.com/presentation/d/1JOz8X0cOL4Osn1nnFVRVmHfCRjg8hX6YtAw6oMFbtDo/edit#slide=id.g1f850e06f9_0_214)._**

## Low-hanging fruit

_Everyone should do these._ You only need to set them up once, are high value for relatively low effort, and there is little/no downside.

### Browser(s)

- **[Enable HTTPS-only mode](https://www.eff.org/https-everywhere/set-https-default-your-browser)** in all browsers you use regularly
  - ["Turn on Always use secure connections" in Chrome on Android](https://support.google.com/chrome/answer/10468685?co=GENIE.Platform=Android#zippy=%2Cturn-on-always-use-secure-connections)

### Devices

_Computers, phones, tablets, etc._

- **Lock your device**, using fingerprint/PIN/passcode/whatever.
  - [Android](https://support.google.com/android/answer/9079129)
  - [iOS](https://support.apple.com/en-us/HT204060)
- **Set them to auto-lock after a short period of time (less than five minutes).**
- **Enable full disk encryption.**
  - Back up your system first
  - Computer
    - Windows: [BitLocker](https://support.microsoft.com/en-us/windows/turn-on-device-encryption-0c453637-bc88-5f74-5105-741561aae838)
    - Mac: [FileVault](https://support.apple.com/en-us/HT204837)
  - Phone
    - [Android](https://www.howtogeek.com/141953/how-to-encrypt-your-android-phone-and-why-you-might-want-to/)
    - iOS: just set a password
- **Install virus/malware scanning software.**
  - Phone - [NYC Secure](https://secure.nyc/index.html) app
  - For computer, probably worth paying rather than using a free one that might be questionable

### Important accounts

Prioritize services that you frequently use for communication, or that have sensitive information like your contacts, financial, payment, or health information. Examples of services that might be at the top of that list:

- Bank(s)
- Ecommerce
- Email
- Social media

We'll refer to this in subsequent sections.

### Passwords

Go through your [important accounts](#important-accounts) and devices and **set non-trivial passwords.** Make sure that your passwords:

- Incorporate letters, numbers, and symbols
- Are long (the longer the better)
- Are not common, such as
  - A word from the dictionary
  - `password`, or some variation thereof
- Are not something that can be easily guessed based on public records or social media, such as
  - Your birthday
  - Your child's/pet's name
  - etc.

Without following these guidelines, hackers can get into your account(s) extremely easily. Note that different services have different requirements around passwords.

## Next steps

These tips require a bit more commitment or technical comfort, but are worth the effort.

### Messaging

- **Use a messaging application with end-to-end encryption (E2EE).** Note that these do require the recipient to be using the same app.
  - Apple iMessage (versus normal SMS)
  - [Signal](https://signal.org/) — see whole page on [Why Signal](why-signal)
  - [WhatsApp](https://www.whatsapp.com/)
  - [More options](https://www.techtimes.com/articles/169154/20160709/9-messaging-apps-with-end-to-end-encryption-facebook-messenger-whatsapp-imessage-and-more.htm)

### Sensitive information

Examples of sensitive information:

- Credit card numbers
- Passwords
- Social security numbers
- Photos or messages you don't want other people to see

#### Who to share it with

**If someone contacts you via phone or email and asks for sensitive information, don't give it to them.** This often comes up as fake customer support or debt collectors. If this happens and you think it _might_ be legitimate, follow up via official channels (the number on the back of your credit card, etc.)

#### How to send

**Don't share sensitive information in SMS or (unencrypted) email directly.** See more info for [Gmail](https://support.google.com/mail/answer/6330403) and [Outlook](https://support.microsoft.com/en-us/office/encrypt-email-messages-373339cb-bf1a-4509-b296-802a39d801dc). An easy alternative is putting the information in a file/document in Google Drive / Dropbox / etc. and sharing that.

### Passwords

- **Use different ([non-trivial](#passwords)) passwords for every service.**
  - If you use the same password across services, one service getting hacked means your accounts with other services could be compromised. This happens [all the time](https://www.nytimes.com/interactive/2015/07/29/technology/personaltech/what-parts-of-your-information-have-been-exposed-to-hackers-quiz.html?_r=0).
  - The best way to do this is with a [password manager](#password-manager).

#### Password manager

**Use a password manager.** A password manager solves a number of problems:

- You don't have to remember all of your different passwords for different services.
- Your list of passwords can't be stolen as easily as if they are written on paper, a Word document, or a spreadsheet.
- Most can generate a random, non-trivial password.
  - This often means you won't know your own password for a given service...which is not a bad thing!

Try one of the following:

- [1Password](https://1password.com/)
- [Dashlane](https://www.dashlane.com/)
- [Keeper](https://www.keepersecurity.com/personal.html)
- [LastPass](https://www.lastpass.com/)
- One that comes built in to your browser
  - [Firefox Password Manager](https://support.mozilla.org/en-US/kb/password-manager-remember-delete-change-and-import)
  - [Google (Chrome) Password Manager](https://passwords.google/)
  - [Microsoft Edge](https://support.microsoft.com/en-us/topic/edit-your-passwords-in-microsoft-edge-38ef988f-5a65-4c6a-9db8-937995d3ae31)
  - [Safari](https://support.apple.com/en-us/105115)

#### [Multi-factor authentication](https://brainstation.io/cybersecurity/two-factor-auth)

**Enable multi-factor authentication (MFA) on all of your [important accounts](#important-accounts).** (Also known as two-factor authentication, or 2FA.) All major services offer MFA — see [this list](https://2fa.directory/).

When enabling MFA, using one or more of the following is recommended:

- An app to generate codes that synchronizes:
  - [1Password](https://support.1password.com/one-time-passwords/)
  - [Authy](https://www.authy.com/)
  - [Google Authenticator](https://support.google.com/accounts/answer/1066447)
- The service's app, when it supports push notification for MFA. For example:
  - [Apple ID](https://support.apple.com/en-us/102660)
- Text messages (SMS)

### Devices

- **Back up your devices regularly.**
  - When you see the option, make sure that the backups are encrypted.
- **Update your operating systems and software early and often.**
  - **Enable automatic updates.**
    - [iOS](https://www.howtogeek.com/232426/how-to-enable-or-disable-automatic-updates-for-ios-apps/)
    - [Mac](https://support.apple.com/kb/PH25371?locale=en_US)
    - [Windows](https://support.microsoft.com/en-us/help/12373/windows-update-faq)

### Payments

- **When paying in-person using a credit or debit card, use the chip or contactless/tap-to-pay** instead of swiping.
- **[Use disposable/one-time/virtual credit card numbers](https://www.doctorofcredit.com/list-of-banks-which-offer-virtual-account-numbers/) for payments**, especially if you are wary of the vendor.
- **Make online payments through PayPal or another trusted service** instead of entering your payment information into a third-party site directly.
- **Don't let vendors store your credit card details.**
  - Many will have an option like "save for later" — don't check that box.

### Wifi

- **Make sure there is a password on your wifi network.** If you like having an open network, you can buy a router with a built-in public hotspot.
- [**Check for upgrades to your router firmware.**](https://www.wikihow.com/Update-Router-Firmware)

## Privacy vs. security

In short, security is like having bars on your windows: hackers can't get in, but they can see through. Privacy is like having blinds, where they can't see in, but they can reach their hand in and unlock the door. You'll need a combination of protections to address both.

## Glossary

- **Multi-factor authentication (MFA)**: A service requiring more than just a password to log in.
- **Passphrase**: Synonym for `password`.
- **Privacy**: TODO
- **Security**: TODO
- **SMS**: Short Message Service, also known as "text messages".
- **Two-factor authentication (2FA):** See `multi-factor authentication`.

## Disclaimer

This guide makes no guarantees that, even with following all steps of this guide, that your digital security/privacy will not be compromised. If you are a high-value target for hackers, such as

- An activist
- A celebrity
- An executive
- A journalist
- A politician

this guide will not be enough. You should follow this guide, but also consult a security professional.

## See also

- [Electronic Frontier Foundation (EFF)'s Surevillance Self-Defense Guide](https://ssd.eff.org/)
- [Wirecutter's Every Step to Simple Online Security](https://www.nytimes.com/wirecutter/guides/simple-online-security/)
- [Elana Hashman's Cryptoparty Workshop](https://hashman.ca/encryption-workshop/) at [Protect Yo'Self!](https://www.eventbrite.com/e/protect-yoself-a-day-of-workshops-on-security-and-online-privacy-tickets-31114213450)
  - The inspiration for this guide
- [Tech Solidarity's Security Guide](https://techsolidarity.org/resources/basic_security.html)
- [Windows Security From The Ground Up](https://decentsecurity.com/#/securing-your-computer/)
- [Mozilla's Privacy Not Included buying guide](https://foundation.mozilla.org/en/privacynotincluded/)
