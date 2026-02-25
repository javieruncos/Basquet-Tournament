import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  FaSave,
  FaTimes,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaPalette,
  FaImage,
  FaInfoCircle,
} from "react-icons/fa";
import { crearClub, editarClub, obtenerClubID } from "../../../../services/ClubesService";
import Swal from "sweetalert2";

const FormClubes = () => {
  const navigate = useNavigate();
  const [preview, setPreview] = useState(null);
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      active: true,
      category: "Masculino",
    },
  });

  useEffect(() => {
    if (!id) return;
    obtenerClubID(id).then((data) => {
      reset({
        name: data?.name,
        shortname: data?.shortname,
        city: data?.city,
        category: data?.category,
        colors: {
          primary: data?.colors?.primary,
          secondary: data?.colors?.secondary,
        },
        description: data?.description,
        active: data?.active,
        id: data._id,
      });
      setPreview(data.logo.url);
    });
  }, [id, reset]);

  const swalCustomConfig = {
    background: "#111",
    color: "#fff",
    confirmButtonColor: "#fbbf24",
    cancelButtonColor: "#333",
    customClass: {
      popup: "border border-white/10 rounded-2xl",
      title: "font-black uppercase tracking-tighter",
    },
  };

  const imageFile = watch("logo");

  const onSubmit = async (data) => {
    console.log(data);

    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("shortname", data.shortname);
    formData.append("city", data.city);
    formData.append("category", data.category);
    formData.append("description", data.description);
    formData.append("active", data.active ? "true" : "false");
    formData.append("colors", JSON.stringify(data.colors));

    // ✅ Imagen
    if (data.logo && data.logo[0]) {
      formData.append("logo", data.logo[0]);
    }

    if (id) {
      const result = await Swal.fire({
        title: "¿Confirmar edición?",
        text: "Se actualizará el club",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, actualizar",
        cancelButtonText: "Cancelar",
        ...swalCustomConfig,
      });

      if (!result.isConfirmed) return;

      await editarClub(id, formData);

      await Swal.fire({
        icon: "success",
        title: "Resultado actualizado",
        text: "Los cambios se guardaron correctamente",
        ...swalCustomConfig,
      });

      navigate("/admin/ClubesAdmin", {
        state: { update: true },
      });

      return;
    }

    await crearClub(formData);

    await Swal.fire({
      icon: "success",
      title: " Club Creado",
      text: "El Club se ha registrado correctamente",
      ...swalCustomConfig,
    });
  };

  return (
    <div className="bg-black/90 border border-white/10 rounded-2xl p-6 w-full max-w-4xl mx-auto shadow-2xl">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-3xl font-black uppercase tracking-tighter">
          Gestionar <span className="text-amber-300">Club</span>
        </h3>
        <button
          onClick={() => navigate("/admin/clubesAdmin")}
          className="text-gray-500 hover:text-white transition-colors"
        >
          <FaTimes size={24} />
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Nombre del Club */}
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300 flex items-center gap-2">
              <FaShieldAlt /> Nombre de la Institución
            </label>
            <input
              type="text"
              {...register("name", { required: "El nombre es obligatorio" })}
              placeholder="Ej: Club Atlético Estación Experimental"
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-amber-300 transition-colors"
            />
            {errors.name && (
              <span className="text-red-500 text-[10px] uppercase font-bold">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Siglas / Shortname */}
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300 flex items-center gap-2">
              Siglas (Shortname)
            </label>
            <input
              type="text"
              {...register("shortname", { maxLength: 10 })}
              placeholder="Ej: CAEE"
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-amber-300 transition-colors uppercase"
            />
          </div>

          {/* Ciudad */}
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300 flex items-center gap-2">
              <FaMapMarkerAlt /> Ciudad
            </label>
            <input
              type="text"
              {...register("city")}
              placeholder="Ej: Las Talitas"
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-amber-300 transition-colors"
            />
          </div>

          {/* Categoría */}
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300 flex items-center gap-2">
              Categoría Principal
            </label>
            <select
              {...register("category", { required: true })}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-amber-300 transition-colors appearance-none"
            >
              <option value="Masculino" className="bg-[#111]">
                Masculino
              </option>
              <option value="Femenino" className="bg-[#111]">
                Femenino
              </option>
              <option value="Juvenil" className="bg-[#111]">
                Juvenil
              </option>
            </select>
          </div>
        </div>

        {/* Colores del Club */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-white/5 rounded-xl border border-white/5">
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300 flex items-center gap-2">
              <FaPalette /> Color Primario
            </label>
            <input
              type="color"
              {...register("colors.primary")}
              className="w-full h-12 bg-transparent border-none cursor-pointer"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300 flex items-center gap-2">
              <FaPalette /> Color Secundario
            </label>
            <input
              type="color"
              {...register("colors.secondary")}
              className="w-full h-12 bg-transparent border-none cursor-pointer"
            />
          </div>
        </div>

        {/* Logo / Escudo */}
        <div className="space-y-2">
          <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300 flex items-center gap-2">
            <FaImage /> Escudo del Club (Imagen)
          </label>
          <div className="flex items-center gap-4">
            <input
              type="file"
              {...register("logo")}
              className="flex-1 bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-amber-300 transition-colors"
            />
            <div className="w-16 h-16 bg-white/10 rounded-full border border-white/20 flex items-center justify-center overflow-hidden">
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-11 h-full object-contain"
                />
              ) : (
                <FaShieldAlt className="text-gray-600" size={24} />
              )}
            </div>
          </div>
        </div>

        {/* Descripción */}
        <div className="space-y-2">
          <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300 flex items-center gap-2">
            <FaInfoCircle /> Historia / Descripción
          </label>
          <textarea
            {...register("description")}
            rows="4"
            placeholder="Breve reseña del club..."
            className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-amber-300 transition-colors resize-none"
          ></textarea>
        </div>

        {/* Estado Activo */}
        <div className="flex items-center gap-3 py-2">
          <input
            type="checkbox"
            id="active"
            {...register("active")}
            className="w-4 h-4 accent-amber-300"
          />
          <label
            htmlFor="active"
            className="text-xs font-bold uppercase tracking-wider text-gray-400 cursor-pointer"
          >
            Club Activo en la Temporada
          </label>
        </div>

        {/* Botones de Acción */}
        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="flex-1 bg-amber-300 text-black font-black uppercase py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-amber-400 transition-all tracking-widest text-sm"
          >
            <FaSave /> Guardar Institución
          </button>
          <button
            type="button"
            onClick={() => navigate("/admin/clubesAdmin")}
            className="px-8 border border-white/10 font-bold uppercase py-4 rounded-xl hover:bg-white/5 transition-all tracking-widest text-sm"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormClubes;
