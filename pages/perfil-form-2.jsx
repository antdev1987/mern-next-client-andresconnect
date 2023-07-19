import Layout from "@/components/Layout/Layout";
import ProcessBarComp from "@/components/ProcessBarComp/ProcessBarComp";
import { useRouter } from "next/router";

const PerfilForm2 = () => {

const router = useRouter()


  const handleSubmit = (e) => {
    e.preventDefault()

    router.push('/perfil-form-3')

  };
  
  return (
    <Layout title="informacion de propiedad">
      <div className=" d-none d-sm-block">
        <ProcessBarComp step="3" />
      </div>

      <h2 className="py-4">INFORMACION DE LA PROPIEDAD</h2>

      <form onSubmit={handleSubmit} className="row g-3">
        <fieldset>
          <label className="">La propiedad que usted posee es:</label>
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="propiedad"
                id="ALQUILADORADIO"
                value="option1"
              />
              <label className="form-check-label" htmlFor="ALQUILADORADIO">
                ALQUILADO
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="propiedad"
                id="PROPIORADIO"
                value="option2"
              />
              <label className="form-check-label" htmlFor="PROPIORADIO">
                PROPIO
              </label>
            </div>
            <div className="form-check disabled">
              <input
                className="form-check-input"
                type="radio"
                name="propiedad"
                id="COMPANERORADIO"
                value="option3"
                disabled
              />
              <label className="form-check-label" htmlFor="COMPANERORADIO">
                COMPANERO DE CASA
              </label>
            </div>
          </div>
        </fieldset>

        <label className="">
          Que tipo es la propiedad donde resiviras al huesped:
        </label>
        <div className="col-sm-10">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gridRadios"
              id="CASARADIO"
              value="option1"
            />
            <label className="form-check-label" htmlFor="CASARADIO">
              CASA
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gridRadios"
              id="VILLARADIO"
              value="option2"
            />
            <label className="form-check-label" htmlFor="VILLARADIO">
              VILLA
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gridRadios"
              id="APARTAMENTORADIO"
              value="option3"
            />
            <label className="form-check-label" htmlFor="APARTAMENTORADIO">
              APARTAMENTO
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gridRadios"
              id="APARAESTUDIORADIO"
              value="option4"
            />
            <label className="form-check-label" htmlFor="APARAESTUDIORADIO">
              APARTA-ESTUDIO
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gridRadios"
              id="OTRORADIO"
              value="option5"
            />
            <label className="form-check-label" htmlFor="OTRORADIO">
              OTROS
            </label>
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

export default PerfilForm2;
