import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import AnimatedBackground from "../components/AnimatedBackground";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaPhone } from "react-icons/fa";
import emailjs from 'emailjs-com';

/**
 * Página de contato com formulário e informações
 * @returns {JSX.Element} Página com formulário de contato e links
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  useEffect(() => {
    emailjs.init('wFd2OI1EQzCgf89qt');
  }, []);

  /**
   * Atualiza os dados do formulário
   * @param {Event} e - Evento de mudança do input
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  /**
   * Envia o formulário de contato
   * @param {Event} e - Evento de submit do formulário
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Enviando...');
    
    const serviceID = 'service_m5r2d6i'; 
    const templateID = 'template_wp3zqlq'; 

    // sendForm envia os dados do formulário
    emailjs.sendForm(serviceID, templateID, e.target)
      .then((result) => {
        console.log(result.text);
        setStatus('Mensagem enviada com sucesso!');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }, (error) => {
        console.log(error.text);
        setStatus('Erro ao enviar mensagem.');
      });
  };

  return (
    <div className="min-h-screen bg-black relative">
      <AnimatedBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header activePage="contato" />
        <main className="flex-1 flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-4xl bg-gradient-to-br from-[#000000] via-[#080c09] to-[#012d1a] rounded-2xl border-2 border-green-400 shadow-[0_0_24px_4px_rgba(1,173,93,0.7)] p-8 sm:p-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">Entre em <span className="text-green-400">Contato</span></h2>
            <div className="flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-16 items-start">
              <div className="flex-1 flex flex-col justify-start text-center md:text-left py-4 md:py-0 mt-2">
                <p className="text-xl font-bold text-white mb-4 md:mb-6">Se preferir, entrar em contato manualmente</p>
                <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
                  <FaPhone className="text-green-400" />
                  <p className="text-white text-lg font-semibold">54 99954-0974</p>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <FaEnvelope className="text-green-400" />
                  <p className="text-white text-lg font-semibold">matheuswastchuk@gmail.com</p>
                </div>
                 <div className="flex items-center gap-2 mb-2 justify-center md:justify-start mt-2">
                  <FaWhatsapp className="text-green-400" />
                  <a href="https://wa.me/+5554999540974" target="_blank" rel="noopener noreferrer" className="text-white text-lg font-semibold hover:underline">+55 54 99954-0974</a>
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-6">ALGUM PROJETO?</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">NOME</label>
                    <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 bg-gray-900 border border-green-400 rounded-md text-gray-200 shadow-sm focus:outline-none focus:ring-green-400 focus:border-green-400 sm:text-sm placeholder-gray-500" placeholder="Seu nome" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">EMAIL</label>
                    <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 bg-gray-900 border border-green-400 rounded-md text-gray-200 shadow-sm focus:outline-none focus:ring-green-400 focus:border-green-400 sm:text-sm placeholder-gray-500" placeholder="seu@email.com" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">MENSAGEM</label>
                    <textarea id="message" name="message" rows="4" className="mt-1 block w-full px-3 py-2 bg-gray-900 border border-green-400 rounded-md text-gray-200 shadow-sm focus:outline-none focus:ring-green-400 focus:border-green-400 sm:text-sm placeholder-gray-500" placeholder="Sua mensagem" value={formData.message} onChange={handleChange} required></textarea>
                  </div>
                  <button type="submit" className="mt-4 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 transition-colors shadow-[0_0_8px_#01AD5D]">
                    ENVIAR
                  </button>
                  {status && <p className="text-center text-sm mt-4 text-green-400">{status}</p>}
                </form>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-8 mt-12">
            <a href="mailto:matheuswastchuk@gmail.com" className="text-gray-400 hover:text-white text-3xl transition-colors" aria-label="Enviar email">
              <FaEnvelope />
            </a>
            <a href="https://github.com/MatheusWastchukk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-3xl transition-colors" aria-label="Perfil do GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/matheuswastchuk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-3xl transition-colors" aria-label="Perfil do LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://wa.me/+5554999540974" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-3xl transition-colors" aria-label="Enviar mensagem via WhatsApp">
              <FaWhatsapp />
            </a>
          </div>

        </main>
      </div>
    </div>
  );
} 