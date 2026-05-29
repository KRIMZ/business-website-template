import React, { useState } from "react";
import styles from "../style";

const Contact = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('🚀 Formulario enviado con datos:', formData);
    setIsLoading(true);
    setStatus(null);

    try {
      // Usar la URL del backend (default: localhost:5000)
      const backendUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      console.log('📡 Enviando petición a ' + backendUrl + '/api/contact');
      const response = await fetch(backendUrl + '/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      console.log('📨 Respuesta del servidor:', response.status, response.statusText);
      const data = await response.json();
      console.log('📄 Datos de respuesta:', data);

      if (response.ok) {
        console.log('✅ Mensaje enviado exitosamente');
        setStatus({ type: 'success', message: '✅ ¡Mensaje enviado exitosamente! Cerrando...' });
        setFormData({ name: "", email: "", subject: "", message: "" });
        // Cerrar modal después de 1.5 segundos
        setTimeout(() => {
          if (onClose) onClose();
        }, 1500);
      } else {
        console.log('❌ Error en la respuesta:', data.error);
        setStatus({ type: 'error', message: data.error || 'Error al enviar el mensaje' });
      }
    } catch (error) {
      console.error('💥 Error de conexión:', error);
      setStatus({ type: 'error', message: 'Error de conexión. Inténtalo de nuevo.' });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section
      id="contact"
      className={`${styles.paddingY} ${styles.flexCenter} px-6`}
    >
      <div className="w-full max-w-[900px] relative overflow-hidden rounded-[28px] border border-white/10 bg-[#111111] p-8 sm:p-10 shadow-[0px_20px_80px_rgba(204,0,0,0.12)]">
        
        <div className="absolute top-0 right-0 w-[220px] h-[220px] bg-red-700/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[180px] h-[180px] bg-red-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-[1]">
          <div className="mb-8 text-center sm:text-left">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-[14px] uppercase tracking-[3px] text-red-400 font-medium mb-3">
                  Successys
                </p>

                <h2 className="font-poppins font-semibold text-white xs:text-[48px] text-[34px] xs:leading-[60px] leading-[46px]">
                  Hablemos de tu próximo proyecto TI
                </h2>
              </div>
              <button
                type='button'
                onClick={onClose}
                className='ml-4 text-white text-[24px] bg-white/10 rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 flex-shrink-0'
              >
                ×
              </button>
            </div>

            <p className="mt-4 text-[16px] leading-[28px] text-white/70 max-w-[650px]">
              Cuéntanos lo que necesitas y te ayudaremos a encontrar una solución
              tecnológica clara, eficiente y alineada con tu empresa.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full grid grid-cols-1 gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Nombre completo"
                required
                className="w-full rounded-[16px] border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/40 outline-none transition-all duration-300 focus:border-red-500 focus:bg-white/10 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.15)]"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Correo electrónico"
                required
                className="w-full rounded-[16px] border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/40 outline-none transition-all duration-300 focus:border-red-500 focus:bg-white/10 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.15)]"
              />
            </div>

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Asunto"
              required
              className="w-full rounded-[16px] border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/40 outline-none transition-all duration-300 focus:border-red-500 focus:bg-white/10 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.15)]"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="6"
              placeholder="Cuéntanos sobre tu requerimiento"
              required
              className="w-full resize-none rounded-[16px] border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/40 outline-none transition-all duration-300 focus:border-red-500 focus:bg-white/10 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.15)]"
            />

            {status && (
              <div className={`p-4 rounded-[16px] ${
                status.type === 'success'
                  ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                  : 'bg-red-500/10 border border-red-500/20 text-red-400'
              }`}>
                {status.message}
              </div>
            )}

            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full sm:w-auto min-w-[220px] rounded-[14px] bg-gradient-to-r from-red-600 via-red-700 to-red-900 px-8 py-4 font-poppins text-[16px] font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0px_15px_35px_rgba(204,0,0,0.35)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isLoading ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;