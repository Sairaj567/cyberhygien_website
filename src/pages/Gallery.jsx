import { useState } from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import gallery from '../data/gallery.js';

function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="section-max space-y-16">
      <SectionHeading
        eyebrow="Highlights"
        title="Glimpses from recent Cyber Hygiene MUN editions"
        description="From opening plenaries to crisis simulations, relive the energy and collaboration that define the summit."
        alignment="left"
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((item) => (
          <motion.button
            key={item.id}
            type="button"
            className="group relative overflow-hidden rounded-3xl"
            onClick={() => setSelected(item)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-64 w-full object-cover transition group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent p-6 text-left text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">{item.category}</p>
              <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
            </div>
          </motion.button>
        ))}
      </div>

      <Dialog open={Boolean(selected)} onClose={() => setSelected(null)} className="relative z-50">
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-xl dark:bg-slate-900">
            {selected ? (
              <>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="absolute right-4 top-4 rounded-full bg-slate-900/80 p-2 text-white transition hover:bg-slate-900"
                  aria-label="Close gallery item"
                >
                  <X size={18} />
                </button>
                <img src={selected.image} alt={selected.title} className="h-96 w-full object-cover" />
                <div className="space-y-3 p-6 text-slate-700 dark:text-slate-200">
                  <DialogTitle className="text-2xl font-semibold text-slate-900 dark:text-white">{selected.title}</DialogTitle>
                  <p className="text-sm">{selected.description}</p>
                </div>
              </>
            ) : null}
          </DialogPanel>
        </div>
      </Dialog>
    </section>
  );
}

export default Gallery;
