'use client'
import React from 'react';

const Modal = ({ isOpen, onClose, children }: any) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-full max-w-4xl mx-auto my-6">
                {/* Contenido del Modal */}
                <div className="bg-white rounded-lg shadow-lg relative flex flex-col w-full max-h-96 overflow-y-auto outline-none focus:outline-none">
                    {/* Encabezado del Modal */}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-2xl font-semibold">
                            Actualizar Post
                        </h3>
                        <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={onClose}
                        >
                            <span className="text-black opacity-5">×</span>
                        </button>
                    </div>
                    {/* Contenido del Modal */}
                    <div className="relative p-6 flex-auto">
                        {children}
                    </div>
                    {/* Pie del Modal */}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={onClose}
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
