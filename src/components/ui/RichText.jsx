/** Renders **bold** segments as bold, underlined phrases. */
export default function RichText({ text }) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 ? (
      <strong key={i} className="font-semibold underline decoration-fg/40 decoration-2 underline-offset-4">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}
