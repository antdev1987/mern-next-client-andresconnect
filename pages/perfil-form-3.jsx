import Layout from "@/components/Layout/Layout";
import ProcessBarComp from "@/components/ProcessBarComp/ProcessBarComp";
import { useRouter } from "next/router";

const PerfilForm3 = () => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/perfil-form-4");
  };
  return (
    <Layout title="informacion de lugar">
      <div className=" d-none d-sm-block">
        <ProcessBarComp step="4" />
      </div>

      <h2 className="py-4">INFORMACION DIRECCION DONDE VIVE ACTUALMENTE</h2>

      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-4">
          <label htmlFor="INPUTCALLE" className="form-label">
            CALLE
          </label>
          <input
            type="text"
            className="form-control border-dark"
            id="INPUTCALLE"
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="INPUTNUMERO" className="form-label">
            NUMERO
          </label>
          <input
            type="text"
            className="form-control border-dark"
            id="INPUTNUMERO"
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="INPUTSECTOR" className="form-label">
            SECTOR
          </label>
          <input
            type="text"
            className="form-control border-dark"
            id="INPUTSECTOR"
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="INPUTPISO" className="form-label">
            PISO
          </label>
          <input
            type="text"
            className="form-control border-dark"
            id="INPUTPISO"
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="INPUTMUNICIPIO" className="form-label">
            MUNICIPIO
          </label>
          <input
            type="text"
            className="form-control border-dark"
            id="INPUTMUNICIPIO"
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="INPUTPROVINCIA" className="form-label">
            PROVINCIA
          </label>
          <input
            type="text"
            className="form-control border-dark"
            id="INPUTPROVINCIA"
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="INPUTURREBA" className="form-label">
            URBANIZACION, RESIDENCIAL O BARRIO
          </label>
          <input
            type="text"
            className="form-control border-dark"
            id="INPUTURREBA"
          />
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

export default PerfilForm3;
