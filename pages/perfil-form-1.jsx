import Layout from "@/components/Layout/Layout";
import ProcessBarComp from "@/components/ProcessBarComp/ProcessBarComp";
import React, { useState } from "react";
import { useRouter } from "next/router";

const PerfilForm1 = () => {
  const [date, setDate] = useState("");

  const router = useRouter()

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setDate(selectedDate);
  };




  
  const handleSubmit = (e)=>{
    e.preventDefault()

    router.push('/perfil-form-2')
  }
  return (
    <Layout title="informacion personal">
      <div className=" d-none d-sm-block">
        <ProcessBarComp step="2" />
      </div>

      <h2 className="py-4">INFORMACION PERSONAL</h2>

      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputName" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control border-dark"
            id="inputName"
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputApellidos" className="form-label">
            Apellidos
          </label>
          <input
            type="text"
            className="form-control border-dark"
            id="inputApellidos"
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="inputNacionalidad" className="form-label">
            Nacionalidad
          </label>
          <input
            type="text"
            className="form-control border-dark"
            id="inputNacionalidad"
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="inputtelefono" className="form-label">
            Telefono
          </label>
          <input
            type="text"
            className="form-control border-dark"
            id="inputtelefono"
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="inputEdad" className="form-label">
            Edad
          </label>
          <input
            type="text"
            className="form-control border-dark"
            id="inputEdad"
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="inputSexo" className="form-label">
            Sexo
          </label>
          <select id="inputSexo" className="form-select border-dark">
            <option value="">Seleccione una opcion</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenido</option>
          </select>
        </div>

        <div className="col-md-4">
          <label htmlFor="inputEdad" className="form-label">
            Fecha de Nacimiento
          </label>
          <div>
            <input
              className="p-1  rounded-2"
              type="date"
              value={date}
              onChange={handleDateChange}
            />
          </div>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Salvar y Continuar
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default PerfilForm1;
