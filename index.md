---
title: Home
description: Guide for individuals who are interested in improving their digital security/privacy
---

# {{ site.title }}

This is a guide for individuals who are interested in improving their digital security/privacy. Only basic knowledge of how to use your computer and mobile device is required.

## Low-hanging fruit

_Everyone should do these._ You only need to set them up once, are high value for relatively low effort, and there is little/no downside. Instructions are linked, where possible. You can of course skip any that aren't relevant to you.

### Browser(s)

This goes for desktop and mobile.

- [ ] **Enable HTTPS-only mode** in all browsers you use regularly.
  - [Chrome](https://support.google.com/chrome/answer/10468685) - see "Always use secure connections"
  - [Firefox](https://support.mozilla.org/en-US/kb/https-only-prefs)
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
- [ ] **Review your apps' permissions**, and revoke anything an app doesn't need, like location, contacts, or microphone access.
  - [Android](https://support.google.com/android/answer/6270602)
  - [iOS](https://support.apple.com/guide/iphone/control-access-to-information-in-apps-iph251e92810/ios)
- [ ] **Turn on "find my device"**, so you can locate, lock, or erase a lost or stolen one.
  - [Android](https://support.google.com/android/answer/3265955)
  - [iOS/Mac](https://support.apple.com/en-us/104978)
- [ ] **Lock your SIM card.** The instructions will be specific to your provider.
  - [AT&T](https://www.att.com/support/article/wireless/KM1000485/)
  - [Google Fi](https://support.google.com/fi/answer/15147412)
  - [T-Mobile](https://www.t-mobile.com/support/plans-features/help-with-t-mobile-account-fraud#SIM)
  - [Verizon](https://www.verizon.com/support/knowledge-base-309293/)

### Messaging

- [ ] **iPhone: Enable RCS** on the devices you use the Messages app from.
  - [ ] [iOS](https://support.apple.com/en-us/104972)
  - [ ] [Mac](https://support.apple.com/guide/messages/get-sms-mms-and-rcs-texts-from-iphone-icht8a28bb9a/mac)

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

#### Account recovery

Attackers often get into an account through its recovery options, not its password. For each of your [important accounts](#important-accounts), especially email:

- [ ] **Make sure the recovery email address and phone number are yours and current.** Remove old ones.
  - [Google](https://support.google.com/accounts/answer/183723)
- [ ] **Review the devices that are signed in**, and sign out any you don't recognize or use.
  - [Google](https://support.google.com/accounts/answer/3067630)

### Passwords

- [ ] **Set [strong passwords](https://support.microsoft.com/en-us/windows/create-and-use-strong-passwords-c5cebb49-8c53-4f5e-2bc4-fe357ca048eb)** on all of your [important accounts](#important-accounts) and [devices](#devices).
  - Otherwise, hackers can get into your account(s) extremely easily. Different services have different requirements around passwords.
  - This is easier if you [set up a password manager](next-steps/#password-manager).
- [ ] **Use [passkeys](https://fidoalliance.org/passkeys/) instead of passwords** wherever a service offers them. They can't be phished or reused, and you sign in with your fingerprint, face, or device PIN.
  - [Apple](https://support.apple.com/en-us/102195)
  - [Google](https://support.google.com/accounts/answer/13548313)

### [Multi-factor authentication](https://brainstation.io/cybersecurity/two-factor-auth)

- [ ] **Enable multi-factor authentication (MFA) on all of your [important accounts](#important-accounts).**

Also known as two-factor authentication (2FA). [All major services offer MFA.](https://2fa.directory/)

When enabling MFA, using one or more of the following is recommended. Passkeys and security keys are the strongest, since they can't be tricked by a fake login page. Text messages are the weakest, since they can be intercepted or redirected through a SIM swap.

- [Passkeys](#passwords) or physical security keys
- Biometrics ([Apple Face ID](https://support.apple.com/en-us/108411), fingerprint, etc.)
- An app to generate codes that synchronizes:
  - [1Password](https://support.1password.com/one-time-passwords/) - paid, but is a full-fledged [password manager](next-steps/#password-manager)
  - [Authy](https://www.authy.com/) - free
  - [Google Authenticator](https://support.google.com/accounts/answer/1066447) - free
- The service's app, when it supports push notification for MFA. For example:
  - [Apple ID](https://support.apple.com/en-us/102660)
  - [Google](https://support.google.com/accounts/answer/7026266)
- Text messages (SMS)

## Ongoing habits

Unlike the above, these can't be checked off. They're things to keep doing, since scammers pretend to be a company or someone you know, and better security settings don't help if you're talked into giving access away.

- **Don't act on unexpected, urgent messages** that ask for a login, code, or payment. Instead of using the link or contact info in them, [go to the company's site or app yourself](https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams), or call a number you know is real.
- **Never share an MFA code with anyone who contacts you.** Legitimate companies don't ask for them.
- **If a family member calls in an emergency asking for money, hang up and call them back** on their usual number. Scammers can [clone a voice from a short clip](https://consumer.ftc.gov/consumer-alerts/2023/03/scammers-use-ai-enhance-their-family-emergency-schemes). Agreeing on a code word with your family ahead of time also helps.
- **Repeat the [app permissions review](#devices) every six months.** You'll have installed new apps since, and may have granted more access along the way.
- **Act on data breach alerts.** If you [signed up for them](next-steps/#leaks) and one says your information was exposed, change that account's password right away, and the password on any other account where you reused it.

## Next steps

Great work! Your personal security and privacy are now _waaaay_ above average.

Eager/willing to do more?

<a class="btn btn-primary" href="next-steps.html" role="button">Keep going</a>

## Privacy vs. security

In short, security is like having bars on your windows: hackers can't get in, but they can see through. Privacy is like having blinds, where they can't see in, but they can reach their hand in and unlock the door. You'll need a combination of protections to address both.

## Glossary

- **Data breach**: When a company or organization's systems are accessed without permission, exposing the information it holds about its customers or users, such as email addresses, passwords, or payment details.
- **Data broker**: A company that collects personal information about people from public records, apps, and other sources, then sells or licenses it to others, typically for advertising, marketing, or background checks.
- **Hack**: To get into a device, account, or system without permission, or to make it do something its owner didn't intend. Someone who does this is a hacker.
- **Multi-factor authentication (MFA)**: A service requiring more than just a password to log in.
- **Passphrase**: Synonym for `password`.
- **Personal health information (PHI)**: Information about your health, such as diagnoses, medications, and medical or insurance records. Healthcare providers and insurers in the US are legally required to protect it, but apps and websites often aren't.
- **Personally identifiable information (PII)**: Details that can be used to identify you, such as your name, address, phone number, date of birth, or Social Security number. Scammers use it to impersonate you.
- **Privacy**: Controlling who can see information about you and what you do. See [Privacy vs. security](#privacy-vs-security).
- [**Pwned**](https://cyberinsight.co/what-does-pwn-stand-for/): Slang for an account or device that has been compromised, or whose password has appeared in a data breach.
- **Security**: Protecting your devices and accounts from being accessed by anyone who shouldn't. See [Privacy vs. security](#privacy-vs-security).
- **SMS**: Short Message Service, also known as "text messages".
- **Two-factor authentication (2FA):** See `multi-factor authentication`.

## Disclaimer

This guide makes no guarantees that, even with following all steps of this guide, that your digital security/privacy will not be compromised. If you think you might be of particular interest to hackers, law enforcement, or nation-states, because you're:

- An activist
- A celebrity
- An executive
- A journalist
- A politician
- A system administrator

…then you should do everything in this guide, but it won't be enough. See the [additional resources](next-steps/#see-also).

If you're a high-profile target, consult a security professional for additional actions.
