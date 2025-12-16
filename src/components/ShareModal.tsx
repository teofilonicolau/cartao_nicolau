import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { X } from 'lucide-react';

interface ShareModalProps {
    isOpen: boolean;
    onClose: () => void;
    url: string;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, url }) => {
    if (!isOpen) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000,
                padding: '1rem'
            }}
            onClick={onClose}
        >
            <div
                style={{
                    backgroundColor: 'white',
                    padding: '2rem',
                    borderRadius: '16px',
                    position: 'relative',
                    maxWidth: '90%',
                    width: '320px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.5rem',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
                onClick={e => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#666'
                    }}
                >
                    <X size={24} />
                </button>

                <div style={{ textAlign: 'center' }}>
                    <h3 style={{
                        margin: '0 0 0.5rem 0',
                        color: '#051024',
                        fontFamily: "'Cinzel', serif",
                        fontWeight: 700
                    }}>
                        Compartilhar Cartão
                    </h3>
                    <p style={{
                        margin: 0,
                        color: '#666',
                        fontSize: '0.9rem'
                    }}>
                        Aponte a câmera para ler o QR Code
                    </p>
                </div>

                <div style={{
                    padding: '1rem',
                    background: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                    <QRCodeCanvas
                        value={url}
                        size={256}
                        level="M"
                        includeMargin={true}
                    />
                </div>

                <button
                    onClick={onClose}
                    style={{
                        width: '100%',
                        padding: '0.75rem',
                        background: '#D4AF37',
                        color: '#051024',
                        border: 'none',
                        borderRadius: '8px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        fontSize: '1rem'
                    }}
                >
                    Fechar
                </button>
            </div>
        </div>
    );
};
