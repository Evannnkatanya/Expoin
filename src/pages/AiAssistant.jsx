import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Send, Sparkles, User, MessageSquare, Map, Calculator, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AiAssistant = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: 'Halo! Saya Export Assistant. Ada yang bisa saya bantu hari ini? 😊'
    },
    {
      id: 2,
      sender: 'user',
      text: 'Saya ingin ekspor gula semut ke Belanda.'
    },
    {
      id: 3,
      sender: 'ai',
      text: 'Berikut analisis awal ekspor gula semut (coconut sugar) ke Belanda:\n\n' +
            '📈 **Peluang Pasar:** Tinggi. Kesadaran kesehatan yang tinggi di Eropa mendorong permintaan alternatif gula sehat.\n' +
            '🇪🇺 **Tarif Import:** 0% (Bebas Bea Masuk di bawah skema GSP/FTA Indonesia - Uni Eropa).\n' +
            '📜 **Sertifikasi yang Dibutuhkan:**\n' +
            '• Sertifikasi Organik (EU Organic - sangat direkomendasikan untuk harga premium)\n' +
            '• HACCP / FSSC 22000 (Keamanan pangan dasar)\n' +
            '• Phytosanitary Certificate (Karantina Pertanian)\n\n' +
            '📦 **Dokumen Ekspor Utama:**\n' +
            '• Commercial Invoice & Packing List\n' +
            '• Bill of Lading (B/L)\n' +
            '• Certificate of Origin (COO / SKA Form A)\n\n' +
            '💰 **Estimasi Margin Keuntungan:** 18% - 25%.'
    }
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      let replyText = 'Terima kasih atas pertanyaannya. Saya sedang menganalisis database komoditas ekspor kami. ';
      
      const query = input.toLowerCase();
      if (query.includes('kopi') || query.includes('robusta')) {
        replyText = 'Untuk kopi Robusta, pasar utama saat ini adalah Jepang, Jerman, dan AS. Anda bisa melihat simulasi biaya pengapalan kopi melalui menu **Simulasi Biaya** atau melihat progres penyiapan dokumen Anda di **Roadmap Ekspor**.';
      } else if (query.includes('buyer') || query.includes('pembeli')) {
        replyText = 'Saya dapat membantu Anda menyusun draf email penawaran ekspor (introduction letter) ke buyer. Silakan gunakan template email berikut: \n\n"Dear purchasing manager, We are an Indonesian coconut sugar supplier..."';
      } else {
        replyText += 'Untuk info spesifik regulasi produk tersebut, pastikan Anda telah melengkapi dokumen dasar ekspor di tab **Dokumen**. Ada lagi dokumen spesifik yang ingin Anda tanyakan?';
      }

      setMessages(prev => [...prev, {
        id: prev.length + 1,
        sender: 'ai',
        text: replyText
      }]);
    }, 1200);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col h-[85vh] md:h-[80vh] pb-16 md:pb-0">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center gap-3 mb-4 shrink-0">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-slate-100 transition-colors">
          <ArrowLeft size={20} className="text-slate-700" />
        </button>
        <h1 className="text-lg font-bold text-slate-800 flex items-center gap-1.5">
          <Sparkles className="text-blue-600 fill-blue-550" size={18} />
          AI Export Assistant
        </h1>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:block mb-4 shrink-0">
        <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
          <Sparkles className="text-blue-600" size={24} />
          AI Export Assistant
        </h1>
        <p className="text-slate-500">Konsultasikan regulasi, surat penawaran, dan peluang ekspor Anda</p>
      </div>

      {/* Chat Messages Area */}
      <div className="flex-1 overflow-y-auto bg-slate-50 rounded-2xl border border-slate-100 p-4 space-y-4 mb-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
            {/* Avatar */}
            <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 shadow-sm ${
              msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-white'
            }`}>
              {msg.sender === 'user' ? <User size={16} /> : <Sparkles size={16} />}
            </div>

            {/* Bubble */}
            <div className={`max-w-[75%] p-3.5 rounded-2xl text-xs leading-relaxed whitespace-pre-line shadow-sm border ${
              msg.sender === 'user' 
                ? 'bg-blue-600 text-white border-blue-500 rounded-tr-none' 
                : 'bg-white text-slate-800 border-slate-100 rounded-tl-none'
            }`}>
              {msg.text}

              {/* Action Chips for specific pre-loaded AI response */}
              {msg.id === 3 && (
                <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-slate-100">
                  <button 
                    onClick={() => navigate('/roadmap')}
                    className="flex items-center gap-1.5 bg-blue-550 border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                  >
                    <Map size={12} className="text-blue-600" />
                    Lihat Roadmap Ekspor
                  </button>
                  <button 
                    onClick={() => navigate('/simulasi')}
                    className="flex items-center gap-1.5 bg-blue-550 border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                  >
                    <Calculator size={12} className="text-emerald-600" />
                    Simulasi Biaya
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Input Message box */}
      <form onSubmit={handleSend} className="bg-white rounded-2xl border border-slate-150 p-2 shadow-sm shrink-0 flex gap-2">
        <input 
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ketik pertanyaan..."
          className="flex-1 pl-3 bg-transparent text-sm text-slate-800 outline-none placeholder-slate-400"
        />
        <button 
          type="submit"
          className="w-10 h-10 rounded-xl bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg shadow-blue-500/25 transition-all active:scale-95"
        >
          <Send size={16} />
        </button>
      </form>
    </div>
  );
};

export default AiAssistant;
