import { Link } from "react-router-dom";

const categories = [
  "Venture Capital",
  "Family Offices",
  "Private Equity",
  "Angel Investors",
];

export default function Index() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20 md:py-28">
        {/* Badge */}
        <div className="inline-flex items-center border border-primary rounded-full px-4 py-1.5 mb-10">
          <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[1.5px] text-primary">
            Next Generation Intelligence
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-[42px] sm:text-[56px] md:text-[72px] lg:text-[80px] font-normal leading-[1.1] tracking-[-5px] text-foreground max-w-3xl">
          Smart Solutions for
          <br />
          <span className="gradient-text font-normal">Modern Investors</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed max-w-md">
          Fact Finders Pro delivers secure, verified data nodes for enterprise
          leaders. Experience the standard in global intelligence operations.
        </p>

        {/* CTA Button */}
        <Link
          to="/get-started"
          className="mt-10 inline-flex items-center justify-center px-14 py-4 rounded-full gradient-brand text-primary-foreground text-[11px] font-bold uppercase tracking-[1.5px] shadow-xl hover:opacity-90 transition-opacity"
        >
          Get Started
        </Link>
      </section>

      {/* Categories Row */}
      <div className="border-t border-border py-8">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 px-6">
          {categories.map((cat) => (
            <span
              key={cat}
              className="text-[11px] font-bold uppercase tracking-[1.5px] text-muted-foreground"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
