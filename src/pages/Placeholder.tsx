interface PlaceholderProps {
  title: string;
}

export default function Placeholder({ title }: PlaceholderProps) {
  return (
    <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-32">
      <div className="inline-flex items-center border border-primary rounded-full px-4 py-1.5 mb-8">
        <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-primary">
          Coming Soon
        </span>
      </div>
      <h1 className="text-4xl md:text-5xl font-normal text-foreground mb-4">
        {title}
      </h1>
      <p className="text-muted-foreground text-base md:text-lg max-w-md leading-relaxed">
        This page is being built. Continue prompting to fill in the content for
        this section.
      </p>
    </main>
  );
}
