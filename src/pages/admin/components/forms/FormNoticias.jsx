import React, { useState } from 'react';
import { FaSave, FaTimes, FaImage, FaHeading, FaTag } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const FormNoticias = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        category: '',
        content: '',
        image: { url: '', public_id: '' },
        tags: '',
        published: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (name === 'imageUrl') {
            setFormData(prev => ({
                ...prev,
                image: { ...prev.image, url: value }
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: type === 'checkbox' ? checked : value
            }));
        }
    };

    return (
        <div className="bg-black/90 border border-white/10 rounded-2xl p-6 w-full  mx-auto shadow-2xl">
            <div className="flex justify-between items-center mb-8">
                <h3 className="text-3xl font-black uppercase tracking-tighter">
                    Nueva <span className="text-amber-300">Noticia</span>
                </h3>
                <button onClick={() => navigate('/admin/noticias')} className="text-gray-500 hover:text-white transition-colors">
                    <FaTimes size={24} />
                </button>
            </div>

            <form className="space-y-5">
                <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300 flex items-center gap-2">
                        <FaHeading /> Título de la Noticia
                    </label>
                    <input 
                        type="text" 
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Ej: Gran victoria de Talleres en el clásico"
                        className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-amber-300 transition-colors"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300 flex items-center gap-2">
                            Autor
                        </label>
                        <input 
                            type="text" 
                            name="author"
                            value={formData.author}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-amber-300 transition-colors"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300 flex items-center gap-2">
                            <FaTag /> Categoría
                        </label>
                        <select 
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-amber-300 transition-colors appearance-none"
                        >
                            <option value="" className="bg-[#111]">Seleccionar...</option>
                            <option value="masculino" className="bg-[#111]">Masculino</option>
                            <option value="femenino" className="bg-[#111]">Femenino</option>
                            <option value="juvenil" className="bg-[#111]">Juvenil</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300 flex items-center gap-2">
                            <FaImage /> URL de Imagen
                        </label>
                        <input 
                            type="text" 
                            name="imageUrl"
                            value={formData.image.url}
                            onChange={handleChange}
                            placeholder="https://ejemplo.com/foto.jpg"
                            className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-amber-300 transition-colors"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300 flex items-center gap-2">
                        Tags (separados por coma)
                    </label>
                    <input 
                        type="text" 
                        name="tags"
                        value={formData.tags}
                        onChange={handleChange}
                        placeholder="ej: basquet, tucuman, torneo"
                        className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-amber-300 transition-colors"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300">Contenido</label>
                    <textarea 
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        rows="6"
                        className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-amber-300 transition-colors resize-none"
                        placeholder="Escribe el cuerpo de la noticia aquí..."
                    ></textarea>
                </div>

                <div className="flex items-center gap-3 py-2">
                    <input 
                        type="checkbox" 
                        name="published"
                        id="published"
                        checked={formData.published}
                        onChange={handleChange}
                        className="w-4 h-4 accent-amber-300"
                    />
                    <label htmlFor="published" className="text-xs font-bold uppercase tracking-wider text-gray-400 cursor-pointer">Publicar inmediatamente</label>
                </div>

                <div className="flex gap-4 pt-4">
                    <button 
                        type="button"
                        className="flex-1 bg-amber-300 text-black font-black uppercase py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-amber-400 transition-all tracking-widest text-sm"
                    >
                        <FaSave /> Guardar Noticia
                    </button>
                    <button 
                        type="button"
                        onClick={() => navigate('/admin/noticias')}
                        className="px-8 border border-white/10 font-bold uppercase py-4 rounded-xl hover:bg-white/5 transition-all tracking-widest text-sm"
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormNoticias;