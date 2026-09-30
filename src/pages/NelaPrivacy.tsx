import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CONTACT_EMAIL } from "@/components/nela/theme";

// Fixed, not computed — the date only changes when the policy does.
const LAST_UPDATED = "30 September 2026";

const sections = [
  {
    title: "1. Who we are",
    content: `Nela is a period and cycle tracking app made by Delexity Ltd ("Delexity", "we", "our" or "us"). Delexity is the controller of the personal data described in this policy.

This policy covers the Nela iOS app, its widgets and notifications. Our website is covered separately by the Delexity Privacy Policy at delexity.com/privacy.`,
  },
  {
    title: "2. What you enter into Nela",
    content: `To predict your cycle and explain each phase, Nela stores what you give it:

— During setup: your first name, typical cycle and period length, the date your last period started, what you're using Nela for (tracking your cycle, trying to conceive, or avoiding pregnancy), your wellbeing goals, your birth control method and your lifestyle.

— Each day you log: period flow, moods, body and mind symptoms, energy level and any notes you write.

— Your settings: which reminders you've switched on and whether App Lock is enabled.

This is health information, and we treat it as the most sensitive kind of data we could hold.`,
  },
  {
    title: "3. Where your data is kept",
    content: `Everything in Section 2 is stored locally on your iPhone. Nela does not require an account, and your daily logs, notes and symptoms are never uploaded to Delexity.

Nela's widgets read the same on-device data to show your cycle day, phase and days until your next period. Widgets on your Lock Screen can be seen by anyone holding your phone, so only add them if you're comfortable with that.

If you back up your iPhone with iCloud Backup or to a computer, Apple includes app data such as Nela's in that backup. Those backups are controlled by you and Apple, not by us.`,
  },
  {
    title: "4. What leaves your device",
    content: `A small amount of information is shared with two service providers that run Nela's subscriptions. Neither receives any cycle or health information, including your daily logs, symptoms or notes.

Superwall (paywalls): Superwall shows Nela's subscription screen. It receives your first name and whether you're eligible for a free trial, along with technical information such as your device model, iOS version, language and region, app version, and how you interact with the subscription screen. Superwall does not receive any cycle, period, fertility or health information.

RevenueCat (subscriptions): RevenueCat manages your subscription status. It receives an anonymous app user ID, your purchase and subscription history from the App Store, and technical information such as device model, iOS version, region and IP address. We don't send RevenueCat any of your cycle or health information.

Apple: payments are processed by Apple through the App Store. We never see your card details. Apple's handling of your data is covered by Apple's own privacy policy.

Both Superwall and RevenueCat act on our behalf under agreements that limit how they can use the data.`,
  },
  {
    title: "5. How we use your information",
    content: `We use your information to:

— Predict your periods and fertile window, show which phase you're in, and give guidance for that phase.
— Show insights and patterns from your own logs.
— Send the reminders you've chosen.
— Show and manage your Nela Premium subscription, including whether a free trial is available to you.
— Answer you when you contact us.

We do not use your information for advertising, we do not build profiles of you for anyone else, and we do not sell or rent your data.`,
  },
  {
    title: "6. Our legal basis",
    content: `Under UK and EU data protection law (the UK GDPR and the EU GDPR), we rely on:

— Contract: to provide the app and your subscription.
— Explicit consent: for the health information you choose to enter. You can withdraw consent at any time by deleting your data in the app and contacting us, as described in Section 9.
— Legitimate interests: to keep the app secure, fix problems and reply to support messages.`,
  },
  {
    title: "7. Notifications, App Lock and Face ID",
    content: `Reminders are scheduled on your phone. They can mention an upcoming period or fertile window, and iOS may show them on your Lock Screen. You can turn each reminder off in Nela's settings, or hide notification previews in iOS Settings → Notifications.

App Lock uses Face ID, Touch ID or your passcode through iOS. Nela only receives a yes or no from iOS; your face, fingerprint and passcode never reach Nela or us.`,
  },
  {
    title: "8. Exporting and importing",
    content: `Settings → Export my data creates a file containing your setup details and logs. Where that file goes — Files, email, another app — is up to you, and once it leaves Nela it is protected by wherever you save or send it. Settings → Restore from backup reads a file like that on your device only.`,
  },
  {
    title: "9. Deleting your data",
    content: `Settings → Delete everything permanently erases your logs, setup details and scheduled reminders from Nela. Deleting the app also removes its data from your phone, though copies may remain in device backups you've made.

Because we don't hold your cycle logs, we can't recover them for you once they're deleted.

To have the information held by Superwall and RevenueCat deleted, email us at the address below and we'll arrange it with them. Cancelling your subscription is done through your Apple ID settings; deleting the app does not cancel it.`,
  },
  {
    title: "10. Keeping data and security",
    content: `Data on your device stays until you delete it. Information held by Superwall and RevenueCat is kept while you use Nela and for as long as those providers need it to handle subscriptions, refunds and legal requirements, or until you ask us to have it deleted. Support emails are kept for up to 24 months.

Data sent to our service providers is encrypted in transit. On your phone, Nela's data is protected by iOS's built-in encryption when your device is locked with a passcode, and you can add App Lock for an extra layer.`,
  },
  {
    title: "11. International transfers",
    content: `Superwall and RevenueCat are based in the United States, so the subscription and technical information described in Section 4 is processed there. Where this happens, we rely on appropriate safeguards recognised by UK and EU law, such as the UK–US data bridge or standard contractual clauses. No cycle or health information is sent to them.`,
  },
  {
    title: "12. Requests from authorities",
    content: `Your cycle logs, symptoms and notes are stored on your phone, not with us, so we cannot hand them over to anyone. If we receive a legal request for the limited information held by our service providers, we will only respond where the law requires it, and we will tell you where we're allowed to.`,
  },
  {
    title: "13. Your rights",
    content: `You have the right to access your data, correct it, delete it, restrict or object to how it's used, receive a copy in a portable format, and withdraw consent at any time. Most of this you can do directly in the app — your data is visible, editable, exportable and deletable in Nela. For anything held by our service providers, email us.

If you're unhappy with how we've handled your data, you can complain to the UK Information Commissioner's Office at ico.org.uk, or to the data protection authority where you live. We'd appreciate the chance to put it right first.`,
  },
  {
    title: "14. Children",
    content: `Nela is not intended for anyone under 13, and we don't knowingly collect data from children under 13. If you believe a child has provided data through Nela, contact us and we'll help remove it.`,
  },
  {
    title: "15. Changes to this policy",
    content: `If we change how Nela handles your data, we'll update this page and the date at the top. For significant changes — especially anything that sends more data off your device — we'll tell you in the app before it happens.`,
  },
];

export default function NelaPrivacy() {
  useEffect(() => {
    document.title = "Nela Privacy Policy";
  }, []);

  return (
    <div style={{ background: "#FFFFFF", color: "#000000", minHeight: "100vh" }}>
      <main
        className="max-w-2xl mx-auto px-4 py-10"
        style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 14, lineHeight: 1.6 }}
      >
        <h1 style={{ fontSize: 20, fontWeight: "bold", marginBottom: 4 }}>
          Nela Privacy Policy
        </h1>
        <p style={{ marginBottom: 24 }}>Last updated: {LAST_UPDATED}</p>

        {sections.map((section) => (
          <div key={section.title} style={{ marginBottom: 20 }}>
            <h2 style={{ fontSize: 14, fontWeight: "bold", marginBottom: 6 }}>
              {section.title}
            </h2>
            {section.content.split("\n\n").map((para, i) => (
              <p key={i} style={{ marginBottom: 8 }}>
                {para}
              </p>
            ))}
          </div>
        ))}

        <div style={{ marginBottom: 20 }}>
          <h2 style={{ fontSize: 14, fontWeight: "bold", marginBottom: 6 }}>
            16. Contact
          </h2>
          <p style={{ marginBottom: 8 }}>
            Questions about this policy, or requests to exercise your rights,
            can be sent to Delexity Ltd at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} style={{ textDecoration: "underline" }}>
              {CONTACT_EMAIL}
            </a>
            . See also{" "}
            <Link to="/nela-support" style={{ textDecoration: "underline" }}>
              Nela Support
            </Link>
            .
          </p>
        </div>
      </main>
    </div>
  );
}
