interface SectionHeadingProps {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  id,
  index,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="section-heading" data-reveal>
      <p className="eyebrow"><span>{index}</span>{eyebrow}</p>
      <div className="section-heading__content">
        <h2 id={id}>{title}</h2>
        {description && <p className="section-heading__description">{description}</p>}
      </div>
    </div>
  );
}
