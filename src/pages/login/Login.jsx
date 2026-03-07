import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaUser, FaLock, FaBasketballBall } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState:{errors} } = useForm()

    const onSubmit = (data) => {
        console.log(data);
       
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] relative overflow-hidden px-4 py-30">
          
            <div className="absolute top-0 -left-20 h-full w-64 bg-amber-400/5 skew-x-12 z-0"></div>
            <div className="absolute bottom-0 -right-20 h-full w-64 bg-amber-400/5 -skew-x-12 z-0"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-amber-400/10 rounded-full blur-125 z-0"></div>

            <div className="relative z-10 w-full max-w-md">
                <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-black uppercase tracking-tighter text-white">
                            Admin<span className="text-amber-400">Panel</span>
                        </h1>
                        <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mt-2 font-bold">
                            Acceso Restringido
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase font-black tracking-widest text-amber-400 ml-1">
                                Correo Electrónico
                            </label>
                            <div className="relative group">
                                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-amber-400 transition-colors" />
                                <input 
                                    type="email" 
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-amber-400 focus:bg-white/10 transition-all"
                                    placeholder="admin@torneo.com"
                                    {...register("email", {
                                        required:"El correo es requerido",
                                        pattern:{
                                            value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message:"El correo no es valido"
                                        }
                                    })}
                                />
                            </div>
                            {errors.email && <p className="text-red-500 text-[10px] font-bold uppercase ml-1">{errors.email.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] uppercase font-black tracking-widest text-amber-400 ml-1">
                                Contraseña
                            </label>
                            <div className="relative group">
                                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-amber-400 transition-colors" />
                                <input 
                                    type="password" 
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-amber-400 focus:bg-white/10 transition-all"
                                    placeholder="••••••••"
                                    {...register("password", {
                                        required:"La contraseña es requerida",
                                        minLength:{
                                            value:8,
                                            message:"La contraseña debe tener al menos 8 caracteres"
                                        }
                                    })}
                                />
                            </div>
                            {errors.password && <p className="text-red-500 text-[10px] font-bold uppercase ml-1">{errors.password.message}</p>}
                        </div>

                        <button 
                            type="submit"
                            className="w-full bg-amber-400 hover:bg-amber-300 text-black font-black uppercase py-4 rounded-xl transition-all transform hover:scale-[1.02] active:scale-95 tracking-widest shadow-lg shadow-amber-400/10 mt-4"
                        >
                            Ingresar al Sistema
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;