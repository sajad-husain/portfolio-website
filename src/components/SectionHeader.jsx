export default function SectionHeader({ index, id, title, subtitle }) {
    return (
        <div className="text-center mb-14">
            <p className="font-mono text-sm text-accent-soft mb-2">
                {index}. {id}
            </p>
            <h2 className="text-section-title font-bold text-ink-primary inline-block relative pb-3">
                {title}
                <span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-16 rounded-full bg-accent"
                    aria-hidden="true"
                ></span>
            </h2>
            {subtitle && (
                <p className="mt-4 text-ink-muted max-w-xl mx-auto">{subtitle}</p>
            )}
        </div>
    );
}
