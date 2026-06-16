export function SectionHeading({
  overline,
  lead,
  accent,
  className = "",
}: {
  overline?: string;
  lead: string;
  accent?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      {overline ? <p className="overline mb-4">{overline}</p> : null}
      <h2 className="max-w-3xl text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl">
        {lead}{" "}
        {accent ? (
          <span className="font-serif italic font-normal text-accent">
            {accent}
          </span>
        ) : null}
      </h2>
    </div>
  );
}
