---
title: Home
description: Guide for individuals who are interested in improving their digital security/privacy
---

# {{ site.title }}

This is a guide for individuals who are interested in improving their digital security/privacy. Only basic knowledge of how to use your computer and mobile device is required.

## Low-hanging fruit

_Everyone should do these._ You only need to set them up once, are high value for relatively low effort, and there is little/no downside. Instructions are linked, where possible. You can of course skip any that aren't relevant to you.

### Browser(s)

- [ ] **[Enable HTTPS-only mode](https://www.eff.org/https-everywhere/set-https-default-your-browser)** in all browsers you use regularly
  - ["Turn on Always use secure connections" in Chrome on Android](https://support.google.com/chrome/answer/10468685?co=GENIE.Platform=Android#zippy=%2Cturn-on-always-use-secure-connections)
- [ ] **Delete extensions you don't use.**
  - [Chrome](https://support.google.com/chrome_webstore/answer/2664769)
  - [Edge](https://support.microsoft.com/en-us/microsoft-edge/add-turn-off-or-remove-extensions-in-microsoft-edge-9c0ec68c-2fbc-2f2c-9ff0-bdc76f46b026)
  - [Firefox](https://support.mozilla.org/en-US/kb/extensions-button)
  - [Safari](https://support.apple.com/en-us/102343#uninstall)

### Devices

Do these for all of your computers, phones, tablets, etc.

- [ ] **Lock your device**, using fingerprint/PIN/passcode/whatever.
  - [Android](https://support.google.com/android/answer/9079129)
  - [iOS](https://support.apple.com/en-us/HT204060)
- [ ] **Set them to auto-lock** after a short period of time (less than five minutes).
  - [Android](https://support.google.com/android/answer/9079129)
  - [iOS](https://support.apple.com/guide/iphone/keep-the-iphone-display-on-longer-iph7117338a8/ios)
  - [Mac](https://support.apple.com/guide/mac-help/change-lock-screen-settings-on-mac-mh11784/mac)
  - [Windows](https://support.microsoft.com/en-us/windows/lock-your-windows-pc-automatically-when-you-step-away-from-it-d0a5f536-74ac-0859-820a-4140dac9fcaf)
- [ ] [**Enable automatic updates.**](https://www.nytimes.com/wirecutter/guides/online-security-enable-automatic-updates/) Update your operating systems and software early and often.
- [ ] **Enable automatic backups.**
  - [Android](https://support.google.com/android/answer/2819582)
  - [iOS](https://support.apple.com/guide/iphone/back-up-iphone-iph3ecf67d29/ios)
  - [Mac](https://support.apple.com/mac-backup)
  - [Windows](https://support.microsoft.com/en-us/windows/back-up-your-windows-pc-87a81f8a-78fa-456e-b521-ac0560e32338)
- [ ] **Delete apps you don't use.**
  - [Android](https://support.google.com/android/answer/13627979)
  - [iOS](https://www.theverge.com/23270473/iphone-ios-unused-app-clean-up-offload-how-to)

### Important accounts

Prioritize securing services that you frequently use for communication, or that have sensitive information like your contacts, financial, payment, or health information. In other words, which accounts do you have that, if hacked, would be a Big Deal? Examples of services that might be at the top of that list:

- Bank(s)
- Ecommerce
- Email
- Social media

We'll refer to this in subsequent sections.

#### Security Checkups

Some services have a built-in Security Checkup tools, walking you through various account settings. **Go through them for:**

- [ ] [**Google**](https://myaccount.google.com/intro/security-checkup)
  - [ ] [**Review My Google Activity.**](https://myactivity.google.com/) Are you ok with Google knowing all of that about you?
  - [ ] [**Remove the Results About You**](https://myactivity.google.com/results-about-you)
- [ ] [**Meta (Facebook, Instagram, etc.)**](https://accountscenter.facebook.com/password_and_security)

### Passwords

- [ ] **Set [strong passwords](https://support.microsoft.com/en-us/windows/create-and-use-strong-passwords-c5cebb49-8c53-4f5e-2bc4-fe357ca048eb)** on all of your [important accounts](#important-accounts) and [devices](#devices).
  - Otherwise, hackers can get into your account(s) extremely easily. Different services have different requirements around passwords.
  - This is easier if you [set up a password manager](#password-manager).

### [Multi-factor authentication](https://brainstation.io/cybersecurity/two-factor-auth)

- [ ] **Enable multi-factor authentication (MFA) on all of your [important accounts](#important-accounts).**

Also known as two-factor authentication, or 2FA. All major services offer MFA — see [this list](https://2fa.directory/).

When enabling MFA, using one or more of the following is recommended:

- An app to generate codes that synchronizes:
  - [1Password](https://support.1password.com/one-time-passwords/) - paid, but is a full-fledged [password manager](#password-manager)
  - [Authy](https://www.authy.com/) - free
  - [Google Authenticator](https://support.google.com/accounts/answer/1066447) - free
- The service's app, when it supports push notification for MFA. For example:
  - [Apple ID](https://support.apple.com/en-us/102660)
  - [Google](https://support.google.com/accounts/answer/7026266)
- Text messages (SMS)

---

## Next steps

These tips require a bit more commitment or technical comfort, but are worth the effort.

### Messaging

- [ ] **Use a messaging app with end-to-end encryption** (E2EE). Note that these do require the recipient to be using the same app.
  - [Android RCS chats](https://support.google.com/messages/answer/7189714)
  - [Apple iMessage](https://support.apple.com/guide/security/imessage-security-overview-secd9764312f/web) (versus normal SMS)
  - [Signal](https://signal.org/) — see whole page on [Why Signal](why-signal)
  - [WhatsApp](https://www.whatsapp.com/)
  - [More options](https://www.tomsguide.com/reference/best-encrypted-messaging-apps)

For more information, see the [Freedom of the Press Foundation's Secure Communication guide](https://freedom.press/training/secure-communication/).

### Accounts

- [ ] [**Google: Go through their Privacy Checkup.**](https://myaccount.google.com/intro/privacycheckup)
- **Meta (Facebook, Instagram, etc.):** Go through their:
  - [ ] [**Privacy Checkup**](https://www.facebook.com/privacy/checkup/)
  - [ ] [**Ad preferences**](https://accountscenter.facebook.com/ads)
- [ ] **Try [Privacy Party](https://www.blockpartyapp.com/privacy-party/).**

### Sensitive information

Examples of sensitive information:

- Credit card numbers
- Passwords
- Social security numbers
- Photos or messages you don't want other people to see

#### Who to share it with

**If someone contacts you via phone or email and asks for sensitive information, don't give it to them.** This often comes up as fake customer support or debt collectors. If this happens and you think it _might_ be legitimate, follow up via official channels (the customer service number on the back of your credit card, etc.)

#### How to send

**Don't share sensitive information in SMS or (unencrypted) email directly.** See more info for [Gmail](https://support.google.com/mail/answer/6330403) and [Outlook](https://support.microsoft.com/en-us/office/encrypt-email-messages-373339cb-bf1a-4509-b296-802a39d801dc). An easy alternative is putting the information in a file/document in Google Drive / Dropbox / etc. and sharing that.

### Personal information

[Your personal information is constantly being sold by data brokers.](https://privacy.com/blog/what-are-data-brokers)

- [ ] **Sign up for [a data removal service](https://restoreprivacy.com/data-removal/best-data-removal-services/)** to get your information automatically removed from people-search sites.

#### Leaks

Your personal/contact information, passwords, etc. may have become available to people that shouldn't have it.

- [ ] **Sign up for data breach alerts** through one of the following services:
  - [1Password Watchtower](https://watchtower.1password.com/)
  - [Have I Been Pwned](https://haveibeenpwned.com/) notifications
    - Can do a one-time check without signing up
  - [Mozilla Monitor](https://monitor.mozilla.org/)

### Passwords

- [ ] **Use different ([strong](#passwords)) passwords for every service.**
  - If you use the same password across services, one service getting hacked means your accounts with other services could be compromised. This happens [all the time](https://www.nytimes.com/interactive/2015/07/29/technology/personaltech/what-parts-of-your-information-have-been-exposed-to-hackers-quiz.html?_r=0).
  - The best way to do this is with a [password manager](#password-manager).

#### Password manager

- [ ] **Set up a password manager.**

A password manager solves a number of problems:

- You don't have to remember all of your different passwords for different services.
- Your list of passwords can't be stolen as easily as if they are written on paper, a Word document, or a spreadsheet.
- Most can generate a random, non-trivial password.
  - This often means you won't know your own password for a given service...which is not a bad thing!

It's worth paying for one of [**the top-recommended options**](https://www.nytimes.com/wirecutter/reviews/best-password-managers/), but if you're cost-conscious or want minimal hassle, you can use one that comes built into your browser:

- [Edge](https://support.microsoft.com/en-us/topic/edit-your-passwords-in-microsoft-edge-38ef988f-5a65-4c6a-9db8-937995d3ae31)
- [Firefox Password Manager](https://support.mozilla.org/en-US/kb/password-manager-remember-delete-change-and-import)
- [Google (Chrome) Password Manager](https://passwords.google/)
- [Safari](https://support.apple.com/en-us/105115)

### Devices

Do these for all of your computers, phones, tablets, etc.

- [ ] [**Go through the Wirecutter Secure Your Smartphone guide.**](https://www.nytimes.com/wirecutter/guides/online-security-secure-your-smartphone/)
- [ ] **Enable full disk encryption.**
  - Back up your system first
  - Computer
    - Windows: [BitLocker](https://support.microsoft.com/en-us/windows/turn-on-device-encryption-0c453637-bc88-5f74-5105-741561aae838)
    - Mac: [FileVault](https://support.apple.com/en-us/HT204837)
  - Phone
    - [Android](https://www.howtogeek.com/141953/how-to-encrypt-your-android-phone-and-why-you-might-want-to/)
    - iOS: just set a password
- [ ] [**iOS/Mac: Review your personalized ads setting.**](https://support.apple.com/en-us/105131)
- [ ] [**iOS: Go through the built-in privacy and security protections page.**](https://support.apple.com/guide/iphone/use-built-in-privacy-and-security-protections-iph6e7d349d1/ios)
  - [ ] [**iOS: Review app tracking permissions.**](https://support.apple.com/guide/iphone/control-app-tracking-permissions-iph4f4cbd242/ios)

### Payments

- **When paying in-person using a credit or debit card, use the chip or contactless/tap-to-pay** instead of swiping.
- **[Use disposable/one-time/virtual credit card numbers](https://www.doctorofcredit.com/list-of-banks-which-offer-virtual-account-numbers/) for payments**, especially if you are wary of the vendor.
- **Make online payments through PayPal or another trusted service** instead of entering your payment information into a third-party site directly.
- **Don't let vendors store your credit card details.**
  - Many will have an option like "save for later" — don't check that box.

### Credit

- [ ] **[Freeze your credit.](https://www.forbes.com/advisor/credit-score/pros-and-cons-of-freezing-credit/)**

### Networking

- [ ] **Make sure there is a password on your wifi network.** If you like having an open network, you can buy a router with a built-in public hotspot.
- [ ] **Set up [DNS over HTTPS](https://www.cloudflare.com/learning/dns/dns-over-tls/).**
  - This can cause issues when you're on some networks, like in a [corporate office](https://superuser.com/questions/721725/why-cant-i-use-custom-dns-server-addresses-in-a-network) or on [airplane WiFi](https://nullthoughts.com/tech/2019/08/09/inflight-wifi-not-working-due-to-custom-dns-servers/). You may need to disable now and then.
- [ ] [**Check for upgrades to your router firmware.**](https://www.wikihow.com/Update-Router-Firmware)

---

## Privacy vs. security

In short, security is like having bars on your windows: hackers can't get in, but they can see through. Privacy is like having blinds, where they can't see in, but they can reach their hand in and unlock the door. You'll need a combination of protections to address both.

## Glossary

- **Data breach**: TODO
- **Data broker**: TODO
- **Hack**: TODO
- **Multi-factor authentication (MFA)**: A service requiring more than just a password to log in.
- **Passphrase**: Synonym for `password`.
- **Personal health information (PHI)**: TODO
- **Personally identifiable information (PII)**: TODO
- **Privacy**: TODO
- [**Pwned**](https://cyberinsight.co/what-does-pwn-stand-for/)
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

- [A workshop version of this page as slides](https://docs.google.com/presentation/d/1JOz8X0cOL4Osn1nnFVRVmHfCRjg8hX6YtAw6oMFbtDo/edit)
- [Electronic Frontier Foundation (EFF)'s Surevillance Self-Defense Guide](https://ssd.eff.org/)
- [Wirecutter's Every Step to Simple Online Security](https://www.nytimes.com/wirecutter/guides/simple-online-security/)
- [Elana Hashman's Cryptoparty Workshop](https://hashman.ca/encryption-workshop/) at [Protect Yo'Self!](https://www.eventbrite.com/e/protect-yoself-a-day-of-workshops-on-security-and-online-privacy-tickets-31114213450)
  - The inspiration for this guide
- [Tech Solidarity's Security Guide](https://techsolidarity.org/resources/basic_security.html)
- [Windows Security From The Ground Up](https://decentsecurity.com/#/securing-your-computer/)
- [Mozilla's Privacy Not Included buying guide](https://foundation.mozilla.org/en/privacynotincluded/)
- [Freedom of the Press Foundation's Online Account Security guide](https://freedom.press/training/online-account-security/)
- [Brian Lovin's Security Checklist](https://brianlovin.com/security)
- [Smart Girl's Guide to Privacy](https://nostarch.com/smartgirlsguide) (book)
