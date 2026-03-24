import SectionTitle from "@/components/SectionTitle";
import TerminalContact from "@/components/TerminalContact";
import SquircleSocials from "@/components/SquircleSocials";

export const metadata = {
  title: "Contact | Mohamed Arshad",
  description: "Send your project requirements and get a quick response within 24 hours.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-14 md:px-6">
      <SectionTitle
        eyebrow="Contact"
        title="Let us build your website"
        description="Share your project details. You will get a response within 24 hours."
      />

      <section className="mt-8">
        <TerminalContact />
        <div className="flex flex-col items-center gap-6 mt-16">
          <h4 className="text-xl font-medium text-slate-300">Connect with me on Socials</h4>
          <SquircleSocials />
        </div>
      </section>
    </main>
  );
}
