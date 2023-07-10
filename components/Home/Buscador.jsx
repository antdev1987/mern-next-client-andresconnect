import Form from 'react-bootstrap/Form';

function Buscador() {
  return (
    <div className="buscador">
      <div className="d-flex flex-column flex-sm-row gap-2 justify-content-center align-items-center buscador-boxOptions py-3">
        <Form.Select aria-label="Default select example">
          <option hidden>Pais</option>
          <option value="1">Republica Dominicana</option>
          <option value="3">Three</option>
        </Form.Select>
        <Form.Select aria-label="Default select example">
          <option hidden>Provincia</option>
          <option value="1">Santo Domingo</option>
        </Form.Select>
        <Form.Select aria-label="Default select example">
          <option hidden>Scort</option>
          <option value="1">Femenina</option>
        </Form.Select>

        <label className="buscador-plus d-flex align-items-center pointer">
          <span>
            <i className="bi bi-filter fs-4"></i>
          </span>
          <span>Filter</span>
          <input type="checkbox" className="d-none checkBoxOpen" />
        </label>

        <button className="btn">
          <i className="bi bi-search"></i>
        </button>
      </div>
      <div className="buscador-boxFilters">
        <div>
          <div className="p-3 px-md-5">
            <h3>Test</h3>
            <div className="ms-3">
              <label className="d-flex align-items-center gap-2">
                <input type="checkbox" />
                Test
              </label>

              <label className="d-flex align-items-center gap-2 mt-2">
                <input type="checkbox" />
                Test
              </label>
            </div>

            <h3 className="mt-3">Test</h3>
            <div className="ms-3">
              <label className="d-flex align-items-center gap-2">
                <input type="checkbox" />
                Test
              </label>

              <label className="d-flex align-items-center gap-2 mt-2">
                <input type="checkbox" />
                Test
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buscador;
