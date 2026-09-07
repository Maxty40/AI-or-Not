import React from 'react';
import { BookOpen, X, CheckCircle, Lightbulb } from 'lucide-react';
import { sound } from '../utils/soundEffects';

interface CampusGuideModalProps {
  onClose: () => void;
}

export const CampusGuideModal: React.FC<CampusGuideModalProps> = ({ onClose }) => {
  const tips = [
    {
      title: '1. Refleksi Kornea & Gigi',
      desc: 'Pada foto asli manusia, pantulan cahaya (catchlight) di kedua mata selalu seragam mengikuti sumber cahaya nyata. AI sering kali membuat refleksi yang berbeda arah atau bentuk gigi yang terlalu rapi seperti tuts piano tanpa celah alami.',
    },
    {
      title: '2. Tekstur Kulit (Pori vs "Plastik")',
      desc: 'Kamera asli menangkap ketidaksempurnaan mikro: pori-pori kecil, kerutan tipis, dan bintik alami. Generator AI sering menghasilkan efek airbrushed atau smoothing yang tampak seperti lilin atau plastik jika diperbesar.',
    },
    {
      title: '3. Teks dan Huruf di Latar Belakang',
      desc: 'Jika ada papan reklame, kaos bertuliskan kata, atau kemasan toko di latar belakang, bacalah! Model difusi AI sering menghasilkan teks pseudolanguage (huruf mirip latin tapi tidak bermakna).',
    },
    {
      title: '4. Kumis, Rambut Liar, dan Aksesoris',
      desc: 'Perhatikan pertemuan anting dengan cuping telinga, tangkai kacamata, atau kumis kucing. AI sering "melelehkan" atau memutuskan garis objek tipis di tengah udara.',
    },
    {
      title: '5. Konsistensi Bayangan dan Cahaya',
      desc: 'Apakah bayangan di lantai cocok dengan posisi matahari atau lampu? Algoritma AI terkadang menghasilkan pencahayaan dramatis dari kanan, tetapi bayangan jatuh ke arah yang berlawanan.',
    },
  ];

  return (
    <div
      id="guide-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        id="guide-modal-card"
        className="w-full max-w-xl bg-slate-900 border border-slate-700/80 rounded-2xl p-5 sm:p-6 shadow-2xl relative flex flex-col max-h-[85vh]"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-white">
                Panduan Detektif AI (Tips Booth)
              </h3>
              <p className="text-xs text-slate-400">
                Catatan khusus dari Divisi AI & Multimedia Komunitas IT Kampus
              </p>
            </div>
          </div>

          <button
            id="btn-close-guide"
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto py-3 space-y-3 flex-1 pr-1">
          <div className="p-3 bg-indigo-950/40 border border-indigo-500/30 rounded-xl text-xs text-indigo-200 leading-relaxed">
            🎓 <strong className="text-white">Tips Panitia:</strong> Gunakan fitur <strong>"Kaca Pembesar"</strong> di atas gambar untuk memperbesar tekstur mikro sebelum menekan tombol tebakan!
          </div>

          {tips.map((tip, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-300">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{tip.title}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed pl-5">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-800 flex justify-end">
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-colors"
          >
            Mengerti, Siap Main!
          </button>
        </div>
      </div>
    </div>
  );
};
