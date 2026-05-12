'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SimulatorProps {
  dict: any;
  lang: string;
}

export function InteractiveSimulator({ dict, lang }: SimulatorProps) {
  const [step, setStep] = useState<0 | 1 | 2>(0);
  const [isVerifying, setIsVerifying] = useState(false);

  // Translations or fallbacks
  const t = {
    title: lang === 'pt' ? 'Simulador de Verificação' : 'Verification Simulator',
    subtitle: lang === 'pt' ? 'Arraste ou clique para verificar o diploma' : 'Drag or click to verify the diploma',
    verifyBtn: lang === 'pt' ? 'Verificar Credencial' : 'Verify Credential',
    verifying: lang === 'pt' ? 'A verificar blockchain...' : 'Verifying blockchain...',
    successTitle: lang === 'pt' ? 'Diploma Válido' : 'Valid Diploma',
    successText: lang === 'pt' ? 'A credencial foi verificada com sucesso na rede EBSI.' : 'The credential was successfully verified on the EBSI network.',
    resetBtn: lang === 'pt' ? 'Tentar Novamente' : 'Try Again',
    student: lang === 'pt' ? 'João Silva' : 'John Doe',
    degree: lang === 'pt' ? 'Mestrado em Engenharia' : 'Master in Engineering',
    issuer: 'Universidade do Minho'
  };

  const handleVerify = () => {
    setStep(1);
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setStep(2);
    }, 2000);
  };

  const handleReset = () => {
    setStep(0);
  };

  return (
    <div className="simulator-container" style={{
      width: '100%',
      maxWidth: '600px',
      margin: '0 auto',
      background: 'rgba(255, 255, 255, 0.03)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '24px',
      padding: '32px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '-50%', left: '-50%',
        width: '200%', height: '200%',
        background: 'radial-gradient(circle at center, rgba(0,108,75,0.08) 0%, transparent 50%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '8px' }}>{t.title}</h3>
        <p style={{ color: 'var(--color-muted)', marginBottom: '32px' }}>{t.subtitle}</p>

        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onClick={handleVerify}
              style={{
                cursor: 'pointer',
                background: 'linear-gradient(135deg, rgba(0,108,75,0.1) 0%, rgba(26,59,93,0.1) 100%)',
                border: '2px dashed rgba(0,108,75,0.3)',
                borderRadius: '16px',
                padding: '40px',
                transition: 'all 0.3s ease',
              }}
              whileHover={{ scale: 1.02, borderColor: 'rgba(0,108,75,0.6)' }}
            >
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎓</div>
              <div style={{ fontWeight: 600 }}>{t.degree}</div>
              <div style={{ fontSize: '14px', color: 'var(--color-muted)' }}>{t.issuer}</div>
              <button style={{
                marginTop: '24px',
                padding: '12px 24px',
                background: 'var(--color-primary)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 600,
                cursor: 'pointer'
              }}>
                {t.verifyBtn}
              </button>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              style={{ padding: '60px 0' }}
            >
              <div style={{
                width: '64px',
                height: '64px',
                border: '4px solid rgba(0,108,75,0.2)',
                borderTopColor: 'var(--color-primary)',
                borderRadius: '50%',
                margin: '0 auto',
                animation: 'spin 1s linear infinite'
              }} />
              <p style={{ marginTop: '24px', fontWeight: 600, color: 'var(--color-primary)' }}>
                {t.verifying}
              </p>
              <style dangerouslySetInnerHTML={{__html: `
                @keyframes spin { 100% { transform: rotate(360deg); } }
              `}} />
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: '16px',
                padding: '32px',
              }}
            >
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
              <h4 style={{ color: '#059669', fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>{t.successTitle}</h4>
              <p style={{ color: '#065F46', marginBottom: '24px' }}>{t.successText}</p>
              
              <div style={{ 
                background: 'white', 
                borderRadius: '8px', 
                padding: '16px', 
                textAlign: 'left',
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                marginBottom: '24px'
              }}>
                <div style={{ fontSize: '12px', color: '#6B7280', marginBottom: '4px' }}>Titular</div>
                <div style={{ fontWeight: 600, marginBottom: '12px' }}>{t.student}</div>
                <div style={{ fontSize: '12px', color: '#6B7280', marginBottom: '4px' }}>Emissor</div>
                <div style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {t.issuer}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
              </div>

              <button onClick={handleReset} style={{
                padding: '8px 16px',
                background: 'transparent',
                color: '#059669',
                border: '1px solid #059669',
                borderRadius: '6px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}>
                {t.resetBtn}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
