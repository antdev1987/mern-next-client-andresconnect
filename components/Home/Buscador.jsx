import Dropdown from 'react-bootstrap/Dropdown';

function Buscador() {
  return (
    <div className="buscador">
      <div className="d-flex align-items-center buscador-boxOptions">
        <Dropdown>
          <Dropdown.Toggle variant="Danger" id="dropdown-basic">
            Paises
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="Danger" id="dropdown-basic">
            Provincias
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="Danger" id="dropdown-basic">
            Scorts
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <label className="buscador-plus d-flex align-items-center pointer">
          <span>
            <i className="bi bi-filter fs-4"></i>
          </span>
          <span>Filter</span>
          <input type="checkbox" className="d-none checkBoxOpen" />
        </label>

        <button className='btn'><i className="bi bi-search"></i></button>
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

            <h3 className='mt-3'>Test</h3>
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
