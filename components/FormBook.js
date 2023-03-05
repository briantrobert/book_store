import { useForm } from "react-hook-form";

export default function FormBook({props}) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
        props[0](true)
        props[1](data)
        console.log(props)
    };


    return (
        <div className="w-30">
            <div>

            </div>
            <div className="m-2">
                <form className="grid grid-cols-1 gap-2" onSubmit={handleSubmit(onSubmit)}>
                    <input className="border px-1 py-1 rounded-sm" placeholder="Título" {...register("nombre", { required: true })} />
                    {errors.nombre && <span>Requerido</span>}
                    <input className="border px-1 py-1 rounded-sm" placeholder="ISBM" {...register("isbn", { required: true })} />
                    {errors.isbn && <span>Requerido</span>}
                    <input className="border px-1 py-1 rounded-sm" placeholder="Publicado en.." {...register("year_published")} />
                    {errors.year_published && <span>Requerido</span>}
                    <input className="border px-1 py-1 rounded-sm" placeholder="Descripción" {...register("descripción")} />
                    {errors.descripción && <span>Requerido</span>}

                    <button className='px-4 py-1 bg-sky-400 m-2 rounded text-center text-gray-800 font-semibold focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800' type="submit" >
                        Insertar
                    </button>
                </form>
            </div>

        </div>
    );
}