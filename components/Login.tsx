import React from 'react';
import { UserRole } from '../types';
import { Shield, User, ArrowLeft } from 'lucide-react';

interface LoginProps {
  onLogin: (role: UserRole) => void;
  onBack: () => void;
}

const logoBase64 = 'data:image/png;base64,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';

export const Login: React.FC<LoginProps> = ({ onLogin, onBack }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 bg-cover bg-center" style={{backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8/wcAAscBA/2642wAAAAASUVORK5CYII=')"}}>
      <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"></div>
      <div className="relative w-full max-w-sm p-8 space-y-8 bg-gray-800/80 border border-gray-700 rounded-lg shadow-2xl">
        <div className="flex justify-center">
            <img src={logoBase64} alt="Relluarte Logo" className="h-auto w-full max-w-[220px] object-contain" />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white">Acesso ao Sistema</h1>
          <p className="text-gray-400">Selecione seu perfil para continuar.</p>
        </div>
        <div className="space-y-4">
          <button
            onClick={() => onLogin('admin')}
            className="w-full flex items-center justify-center px-4 py-3 font-semibold text-gray-900 bg-yellow-500 rounded-md hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 focus:ring-offset-gray-800 transition-colors"
          >
            <Shield className="w-5 h-5 mr-2" />
            Acessar como Administrador
          </button>
          <button
            onClick={() => onLogin('vendedor')}
            className="w-full flex items-center justify-center px-4 py-3 font-semibold text-white bg-gray-600 rounded-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:ring-offset-gray-800 transition-colors"
          >
            <User className="w-5 h-5 mr-2" />
            Acessar como Vendedor
          </button>
        </div>
         <div className="text-center">
            <button onClick={onBack} className="text-sm text-gray-400 hover:text-yellow-500 transition-colors flex items-center justify-center w-full">
                <ArrowLeft size={14} className="mr-1" />
                Voltar ao site
            </button>
        </div>
      </div>
    </div>
  );
};