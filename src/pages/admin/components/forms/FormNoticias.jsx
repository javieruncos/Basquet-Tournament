import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaSave, FaTimes, FaImage, FaHeading, FaTag } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import {
  crearNoticia,
  editarNoticia,
  obtenerNoticiaID,
} from "../../../../services/NewsService";
import Swal from "sweetalert2";

const FormNoticias = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [preview, setPreview] = useState(null);
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const imageFile = watch("image");

  useEffect(() => {
    if (imageFile && imageFile[0]) {
      setPreview(URL.createObjectURL(imageFile[0]));
    }
  }, [imageFile]);

  useEffect(() => {
    if (id) {
      obtenerNoticiaID(id).then((data) => {
        reset({
          title: data.title,
          author: data.author,
          category: data.category,
          content: data.content,
          tags: data.tags,
          published: data.published,
          id: data._id,
        });
        setPreview(data.image?.url);
      });
    }
  }, [id, reset]);

  const onsubmitData = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("author", data.author);
    formData.append("category", data.category);
    formData.append("content", data.content);
    formData.append("published", data.published ? "true" : "false");
    console.log(data);

    //verficar que la image sea cargada
    if (data.image?.[0]) {
      formData.append("image", data.image[0]);
    }

    // Tags como array
    if (data.tags) {
      if (Array.isArray(data.tags)) {
        data.tags.forEach((tag) => formData.append("tags", tag));
      } else {
        data.tags
          .split(",")
          .map((tag) => tag.trim())
          .forEach((tag) => formData.append("tags", tag));
      }
    }

    try {
      if (id) {
        await editarNoticia(id, formData);
        await Swal.fire({
          icon: "success",
          title: "Noticia editada",
          text: "Se editó correctamente",
        });
      } else {
        await crearNoticia(formData);
        await Swal.fire({
          icon: "success",
          title: "Noticia creada",
          text: "Se creó correctamente",
        });
      }
      reset();
      navigate("/admin/noticias", {
        state: { update: true },
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo guardar la noticia",
      });
    }
  };

  return (
    <div className="bg-black/90 border border-white/10 rounded-2xl p-6 w-full  mx-auto shadow-2xl">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-3xl font-black uppercase tracking-tighter">
          Nueva <span className="text-amber-300">Noticia</span>
        </h3>
        <button
          onClick={() => navigate("/admin/noticias")}
          className="text-gray-500 hover:text-white transition-colors"
        >
          <FaTimes size={24} />
        </button>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit(onsubmitData)}>
        <div className="space-y-2">
          <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300 flex items-center gap-2">
            <FaHeading /> Título de la Noticia
          </label>
          <input
            type="text"
            name="title"
            placeholder="Ej: Gran victoria de Talleres en el clásico"
            className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-amber-300 transition-colors"
            {...register("title", {
              required: "El título es obligatorio",
              minLength: {
                value: 5,
                message: "El título debe tener al menos 5 caracteres",
              },
              maxLength: {
                value: 100,
                message: "El título no puede exceder los 100 caracteres",
              },
            })}
          />
          {errors.title && (
            <span className="text-red-500 text-[10px] font-bold uppercase">
              {errors.title.message}
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300 flex items-center gap-2">
              Autor
            </label>
            <input
              type="text"
              name="author"
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-amber-300 transition-colors"
              {...register("author", {
                required: "El autor es obligatorio",
                minLength: {
                  value: 5,
                  message: "El autor debe tener al menos 5 caracteres",
                },
                maxLength: {
                  value: 100,
                  message: "El autor no puede exceder los 100 caracteres",
                },
              })}
            />
            {errors.author && (
              <span className="text-red-500 text-[10px] font-bold uppercase">
                {errors.author.message}
              </span>
            )}
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300 flex items-center gap-2">
              <FaTag /> Categoría
            </label>
            <select
              name="category"
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-amber-300 transition-colors appearance-none"
              {...register("category", {
                required: "La categoría es obligatoria",
              })}
            >
              <option value="" className="bg-[#111]">
                Seleccionar...
              </option>
              <option value="masculino" className="bg-[#111]">
                Masculino
              </option>
              <option value="femenino" className="bg-[#111]">
                Femenino
              </option>
              <option value="juvenil" className="bg-[#111]">
                Juvenil
              </option>
            </select>
            {errors.category && (
              <span className="text-red-500 text-[10px] font-bold uppercase">
                {errors.category.message}
              </span>
            )}
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300 flex items-center gap-2">
              <FaImage /> imagen
            </label>
            <input
              type="file"
              name="image"
              placeholder="https://ejemplo.com/foto.jpg"
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-amber-300 transition-colors"
              {...register("image", {
                required: id ? false : "La imagen es obligatoria",
              })}
            />
            {preview && (
              <div className="mb-4 h-30 w-30 flex items-center">
                <img
                  src={preview}
                  alt="Imagen actual"
                  className="w-full max-h-64 object-cover rounded-lg"
                />
              </div>
            )}

            {errors.image && (
              <span className="text-red-500 text-[10px] font-bold uppercase">
                {errors.image.message}
              </span>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300 flex items-center gap-2">
            Tags (separados por coma)
          </label>
          <input
            type="text"
            name="tags"
            placeholder="ej: basquet, tucuman, torneo"
            className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-amber-300 transition-colors"
            {...register("tags", {
              required: "Los tags son obligatorios",
              minLength: {
                value: 5,
                message: "Los tags deben tener al menos 5 caracteres",
              },
              maxLength: {
                value: 60,
                message: "Los tags no pueden exceder los 100 caracteres",
              },
            })}
          />
          {errors.tags && (
            <span className="text-red-500 text-[10px] font-bold uppercase">
              {errors.tags.message}
            </span>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-[10px] uppercase font-bold tracking-widest text-amber-300">
            Contenido
          </label>
          <textarea
            name="content"
            rows="6"
            className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-amber-300 transition-colors resize-none"
            placeholder="Escribe el cuerpo de la noticia aquí..."
            {...register("content", {
              required: "El contenido es obligatorio",
              minLength: {
                value: 5,
                message: "El contenido debe tener al menos 5 caracteres",
              },
              maxLength: {
                value: 1000,
                message: "El contenido no puede exceder los 1000 caracteres",
              },
            })}
          ></textarea>
          {errors.content && (
            <span className="text-red-500 text-[10px] font-bold uppercase">
              {errors.content.message}
            </span>
          )}
        </div>

        <div className="flex items-center gap-3 py-2">
          <input
            type="checkbox"
            name="published"
            id="published"
            className="w-4 h-4 accent-amber-300"
            {...register("published")}
          />
          <label
            htmlFor="published"
            className="text-xs font-bold uppercase tracking-wider text-gray-400 cursor-pointer"
          >
            Publicar noticia
          </label>
        </div>

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
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
