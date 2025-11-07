import SectionHeading from '../components/SectionHeading.jsx';
function Gallery() {
  return (
    <section className="section-max space-y-12">
      <SectionHeading
        eyebrow="Highlights"
        title="Gallery will be updated shortly"
        description="We are curating event highlights and behind-the-scenes captures. Check back soon for a visual journey through Cyber Hygiene MUN 2025."
        alignment="left"
      />
      <div className="glass-card flex flex-col items-start gap-4 p-8 text-sm text-slate-600 dark:text-slate-300">
        <p>
          Delegate photos, committee snapshots, and press coverage are being compiled. Subscribe to our updates or follow us on social media to be the first to know when the gallery goes live.
        </p>
        <a
          href="https://www.instagram.com/acpceofficial"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-secondary px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-secondary/90"
        >
          Follow updates on Instagram
        </a>
      </div>
    </section>
  );
}

export default Gallery;
