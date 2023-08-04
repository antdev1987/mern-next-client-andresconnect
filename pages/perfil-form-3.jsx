import Layout from "@/components/Layout/Layout";
import ProcessBarComp from "@/components/ProcessBarComp/ProcessBarComp";
import { context } from "@/context/ContextProvider";
import { useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

export async function getServerSideProps(context) {
  const session = await getSession(context);
  console.log(session, "sever side props");
  if (session?.user.isVerificationProcess) {
    return {
      redirect: {
        destination: "/gestionar-cuenta",
        permanent: false,
      },
    };
  }
  return { props: {} };
}

const provincias = [
  "DISTRITO NACIONAL",
  "AZUA",
  "BAHORUCO",
  "BARAHONA",
  "DAJABON",
  "DUARTE",
  "EL SEYBO",
  "ELIAS PIÑA",
  "ESPAILLAT",
  "HATO MAYOR",
  "HERMANAS MIRABAL",
  "INDEPENDENCIA",
  "LA ALTAGRACIA",
  "LA ROMANA",
  "LA VEGA",
  "MARIA TRINIDAD SANCHEZ",
  "MONSEÑOR NOUEL",
  "MONTE PLATA",
  "MONTECRISTI",
  "PEDERNALES",
  "PERAVIA",
  "PUERTO PLATA",
  "SAMANA",
  "SAN CRISTOBAL",
  "SAN JOSE DE OCOA",
  "SAN JUAN",
  "SAN PEDRO DE MACORIS",
  "SANCHEZ RAMIREZ",
  "SANTIAGO",
  "SANTIAGO RODRIGUEZ",
  "SANTO DOMINGO",
  "VALVERDE",
];

const municipios = {
  1: {
    "DISTRITO NACIONAL": ["Santo Domingo de Guzmán"],
  },
  2: {
    AZUA: [
      "Azua",
      "Barro Arriba",
      "Las Barías-La Estancia",
      "Los Jovillos",
      "Puerto Viejo",
      "Barreras",
      "Doña Emma Balaguer Vda. Vallejo",
      "Clavellina",
      "Las Lomas",
      "Las Charcas",
      "Palmar de Ocoa",
      "Las Yayas de Viajama",
      "Villarpando",
      "Hato Nuevo Cortés",
      "Padre Las Casas",
      "Las Lagunas",
      "La Siembra",
      "Monte Bonito",
      "Los Fríos",
      "Peralta",
      "Sabana Yegua",
      "Proyecto 4",
      "Ganadero",
      "Proyecto 2-C",
      "Pueblo Viejo",
      "El Rosario",
      "Tábara Arriba",
      "Tábara Abajo",
      "Amiama Gómez",
      "Los Toros",
      "Guayabal",
      "Estebanía",
    ],
  },
  3: {
    BAHORUCO: [
      "Neiba",
      "El Palmar",
      "Galván",
      "El Salado",
      "Tamayo",
      "Uvilla",
      "Santana",
      "Montserrat",
      "Cabeza de Toro",
      "Mena",
      "Santa Bárbara El 6",
      "Villa Jaragua",
      "Los Ríos",
      "Las Clavellinas",
    ],
  },
  4: {
    BARAHONA: [
      "Barahona",
      "El Cachón",
      "La Guázara",
      "Villa Central",
      "Cabral",
      "Enriquillo",
      "Arroyo Dulce",
      "Paraíso",
      "Los Patos",
      "Vicente Noble",
      "Canoa",
      "Quita Coraza",
      "Fondo Negro",
      "El Peñón",
      "La Ciénaga",
      "Baoruco",
      "Fundación",
      "Pescadería",
      "Las Salinas",
      "Polo",
      "Jaquimeyes",
      "Palo Alto",
    ],
  },
  5: {
    DAJABON: [
      "Dajabón",
      "Cañongo",
      "Loma de Cabrera",
      "Capotillo",
      "Santiago de la Cruz",
      "Partido",
      "Restauración",
      "El Pino",
      "Manuel Bueno",
    ],
  },
  6: {
    DUARTE: [
      "San Francisco de Macorís",
      "La Peña",
      "Cenoví",
      "Jaya",
      "Presidente Don Antonio Guzmán Fernández",
      "Arenoso",
      "Las Coles",
      "El Aguacate",
      "Castillo",
      "Pimentel",
      "Villa Riva",
      "Agua Santa del Yuna",
      "Cristo Rey de Guaraguao",
      "Las Taranas",
      "Barraquito",
      "Las Guáranas",
      "Eugenio María de Hostos",
      "Sabana Grande",
    ],
  },
  7: {
    "EL SEYBO": [
      "El Seibo",
      "Pedro Sánchez",
      "San Francisco-Vicentillo",
      "Santa Lucía",
      "Miches",
      "El Cedro",
      "La Gina",
    ],
  },
  8: {
    "ELIAS PIÑA": [
      "Comendador",
      "Sabana Larga",
      "Guayabo",
      "Bánica",
      "Sabana Cruz",
      "Sabana Higüero",
      "El Llano",
      "Guanito",
      "Hondo Valle",
      "Rancho de la Guardia",
      "Pedro Santana",
      "Río Limpio",
      "Juan Santiago",
    ],
  },
  9: {
    ESPAILLAT: [
      "Moca",
      "José Contreras",
      "Juan López",
      "Las Lagunas",
      "Canca La Reyna",
      "El Higüerito",
      "Monte de La Jagua",
      "La Ortega",
      "Cayetano Germosén",
      "Gaspar Hernández",
      "Joba Arriba",
      "Veragua",
      "Villa Magante",
      "Jamao al Norte",
      "San Víctor",
    ],
  },
  10: {
    "HATO MAYOR": [
      "Hato Mayor",
      "Yerba Buena",
      "Mata Palacio",
      "Guayabo Dulce",
      "Sabana de la Mar",
      "Elupina Cordero de las Cañitas",
      "El Valle",
    ],
  },
  11: {
    "HERMANAS MIRABAL": [
      "Salcedo",
      "Jamao Afuera",
      "Tenares",
      "Blanco",
      "Villa Tapia",
    ],
  },
  12: {
    INDEPENDENCIA: [
      "Jimaní",
      "El Limón",
      "Boca de Cachón",
      "Duvergé",
      "Vengan a Ver",
      "La Descubierta",
      "Postrer Río",
      "Guayabal",
      "Cristóbal",
      "Batey 8",
      "Mella",
      "La Colonia",
    ],
  },
  13: {
    "LA ALTAGRACIA": [
      "Higüey",
      "Las Lagunas de Nisibón",
      "La Otra Banda",
      "Verón Punta Cana",
      "San Rafael del Yuma",
      "Boca del Yuma",
      "Bayahibe",
    ],
  },
  14: {
    "LA ROMANA": [
      "La Romana",
      "Caleta",
      "Guaymate",
      "Villa Hermosa",
      "Cumayasa",
    ],
  },
  15: {
    "LA VEGA": [
      "La Vega",
      "Río Verde Arriba",
      "El Ranchito",
      "Taveras",
      "Don Juan Rodríguez",
      "Constanza",
      "Tireo",
      "La Sabina",
      "Jarabacoa",
      "Buena Vista",
      "Manabao",
      "Jima Abajo",
      "Rincón",
    ],
  },
  16: {
    "MARIA TRINIDAD SANCHEZ": [
      "Nagua",
      "San José de Matanzas",
      "Las Gordas",
      "Arroyo al Medio",
      "Cabrera",
      "Arroyo Salado",
      "La Entrada",
      "El Factor",
      "El Pozo",
      "Río San Juan",
    ],
  },
  17: {
    "MONSEÑOR NOUEL": [
      "Bonao",
      "Sabana del Puerto",
      "Juma Bejucal",
      "Arroyo Toro-Masipedro",
      "Jayaco",
      "La Salvia-Los Quemados",
      "Maimón",
      "Piedra Blanca",
      "Villa de Sonador",
      "Juan Adrián",
    ],
  },
  18: {
    "MONTE PLATA": [
      "Monte Plata",
      "Don Juan",
      "Chirino",
      "Boyá",
      "Bayaguana",
      "Sabana Grande de Boyá",
      "Gonzalo",
      "Majagual",
      "Yamasá",
      "Los Botados",
      "Mamá Tingó",
      "Peralvillo",
    ],
  },
  19: {
    "MONTE CRISTI": [
      "Monte Cristi",
      "Castañuelas",
      "Palo Verde",
      "Guayubín",
      "Villa Elisa",
      "Hatillo Palma",
      "Cana Chapetón",
      "Las Matas de Santa Cruz",
      "Pepillo Salcedo (Manzanillo)",
      "Santa María",
      "Villa Vásquez",
    ],
  },
  20: {
    PEDERNALES: [
      "Pedernales",
      "José Francisco Peña Gómez",
      "Oviedo",
      "Juancho",
    ],
  },
  21: {
    PERAVIA: [
      "Baní",
      "Villa Fundación",
      "Sabana Buey",
      "Paya",
      "Villa Sombrero",
      "El Carretón",
      "Catalina",
      "El Limonal",
      "Las Barías",
      "Nizao",
      "Pizarrete",
      "Santana",
      "Matanzas",
    ],
  },
  22: {
    "PUERTO PLATA": [
      "Puerto Plata",
      "Yásica Arriba",
      "Maimón",
      "Altamira",
      "Río Grande",
      "Guananico",
      "Imbert",
      "Los Hidalgos",
      "Navas",
      "Luperón",
      "La Isabela",
      "Belloso",
      "Estrecho de Luperón Omar Bross",
      "Sosúa",
      "Cabarete",
      "Sabaneta de Yásica",
      "Villa Isabela",
      "Estero Hondo",
      "La Jaiba",
      "Gualete",
      "Villa Montellano",
    ],
  },
  23: {
    SAMANA: [
      "Samana",
      "El Limón",
      "Arroyo Barril",
      "Las Galeras",
      "Sánchez",
      "Las Terrenas",
    ],
  },
  24: {
    "SAN CRISTOBAL": [
      "San Cristóbal",
      "Hato Damas",
      "Hatillo",
      "Sabana Grande de Palenque",
      "Bajos de Haina",
      "El Carril",
      "Quita Sueño (DM)",
      "Cambita Garabitos",
      "Cambita El Pueblecito",
      "Villa Altagracia",
      "San José del Puerto",
      "Medina",
      "La Cuchilla",
      "Yaguate",
      "Doña Ana",
      "San Gregorio de Nigua",
      "Los Cacaos",
    ],
  },
  25: {
    "SAN JOSE DE OCOA": [
      "San José de Ocoa",
      "La Ciénaga",
      "Nizao-Las Auyamas",
      "El Pinar",
      "El Naranjal",
      "Sabana Larga",
      "Rancho Arriba",
    ],
  },
  26: {
    "SAN JUAN": [
      "San Juan",
      "Pedro Corto",
      "Sabaneta",
      "Sabana Alta",
      "El Rosario",
      "Hato del Padre",
      "Guanito",
      "La Jagua",
      "Las Maguanas-Hato Nuevo",
      "Las Charcas de María Nova",
      "Las Zanjas",
      "Bohechío",
      "Arroyo Cano",
      "Yaque",
      "El Cercado",
      "Derrumbadero",
      "Batista",
      "Juan de Herrera",
      "Jínova",
      "Las Matas de Farfán",
      "Matayaya",
      "Carrera de Yegua",
      "Vallejuelo",
      "Jorjillo",
    ],
  },
  27: {
    "SAN PEDRO DE MACORIS": [
      "San Pedro de Macorís",
      "Los Llanos",
      "El Puerto",
      "Gautier",
      "Ramón Santana",
      "Consuelo",
      "Quisqueya",
      "Guayacanes",
    ],
  },
  28: {
    "SANCHEZ RAMIREZ": [
      "Cotuí",
      "Quita Sueño",
      "Caballero",
      "Comedero Arriba",
      "Platanal",
      "Zambrana Abajo",
      "Cevicos",
      "La Cueva",
      "Fantino",
      "La Mata",
      "La Bija",
      "Angelina",
      "Hernando Alonzo",
    ],
  },
  29: {
    SANTIAGO: [
      "Santiago",
      "Pedro García",
      "La Canela",
      "San Francisco de Jacagua",
      "Hato del Yaque",
      "Bisonó",
      "Jánico",
      "Juncalito",
      "El Caimito",
      "Licey al Medio",
      "Las Palomas",
      "San José de las Matas",
      "El Rubio",
      "La Cuesta",
      "Las Placetas",
      "Tamboril",
      "Canca La Piedra",
      "Villa González",
      "Palmar Arriba",
      "El Limón",
      "Puñal",
      "Guayabal",
      "Canabacoa",
      "Sabana Iglesia",
      "Baitoa",
    ],
  },
  30: {
    "SANTIAGO RODRIGUEZ": [
      "San Ignacio de Sabaneta",
      "Villa Los Almácigos",
      "Monción",
    ],
  },
  31: {
    "SANTO DOMINGO": [
      "Santo Domingo Este",
      "San Luis",
      "Santo Domingo Oeste",
      "Santo Domingo Norte",
      "La Victoria",
      "Boca Chica",
      "La Caleta",
      "San Antonio de Guerra",
      "Hato Viejo",
      "Los Alcarrizos",
      "Palmarejo-Villa Linda",
      "Pantoja",
      "Pedro Brand",
      "La Guáyiga",
      "La Cuaba",
    ],
  },
  32: {
    VALVERDE: [
      "Mao",
      "Ámina",
      "Jaibón (Pueblo Nuevo)",
      "Guatapanal",
      "Esperanza",
      "Maizal",
      "Jicomé",
      "Boca de Mao",
      "Paradero",
      "Laguna Salada",
      "Jaibón",
      "La Caya",
      "Cruce de Guayacanes",
    ],
  },
};

const PerfilForm3 = () => {
  const { state, dispatch } = useContext(context);
  const [canContinue, setCanContinue] = useState(false);
  const [inputProvincia, setInputProvincia] = useState('')
  const [inputValue, setInputValue] = useState({
    calle: state.direccionInfo?.calle || "",
    numero: state.direccionInfo?.numero || "",
    piso: state.direccionInfo?.piso || "",
    barrio: state.direccionInfo?.barrio || "",
    sector: state.direccionInfo?.sector || "",
    municipio: state.direccionInfo?.municipio || "",
    provincia: state.direccionInfo?.provincia || "",
  });
  const router = useRouter();

  const setValues = (e) =>
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });

  useEffect(() => {
    if (!state.propiedadInfo?.estadoPropiedad) {
      router.push("/perfil-form-2");
    }
  }, []);

  useEffect(() => {
    const valores = Object.entries(inputValue);
    console.log(valores);

    for (const valor of valores) {
      if (
        valor[1] === "" || // Verificar si es una cadena vacía
        !valor[1].trim()
      ) {
        setCanContinue(false);
        return;
      }
    }
    setCanContinue(true);
  }, [inputValue]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: "DIRECCION_INFO", payload: { ...inputValue } });

    router.push("/perfil-form-4");
  };

  const chooseOnMap = () => {
    router.push("/mapScreen");
  };

  const handleProvinciaChange = (e) => setInputProvincia(e.target.value)
  // console.log(inputProvincia)

  const selectedMunicipio = ()=>{
    // const muncipios = municipios.filter(muni => muni == )

    
    const prov = municipios[inputProvincia]

    // console.log(prov)

    const provSelected = Object.keys(prov)[0] //aqui saco la provincia

    // console.log(prov)

    const municipiosSelected = prov[provSelected]
    // console.log(municipiosSelected)

    return municipiosSelected
  }

  //  selectedMunicipio()

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
            onChange={setValues}
            type="text"
            className="form-control border-dark"
            id="INPUTCALLE"
            name="calle"
            value={inputValue.calle}
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="INPUTNUMERO" className="form-label">
            NUMERO
          </label>
          <input
            onChange={setValues}
            type="text"
            className="form-control border-dark"
            id="INPUTNUMERO"
            name="numero"
            value={inputValue.numero}
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="INPUTSECTOR" className="form-label">
            PISO
          </label>
          <input
            onChange={setValues}
            type="text"
            className="form-control border-dark"
            id="INPUTSECTOR"
            name="piso"
            value={inputValue.piso}
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="INPUTPISO" className="form-label">
            BARRIO, URBANIZACION, RESIDENCIAL
          </label>
          <input
            onChange={setValues}
            type="text"
            className="form-control border-dark"
            id="INPUTPISO"
            name="barrio"
            value={inputValue.barrio}
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="INPUTMUNICIPIO" className="form-label">
            SECTOR
          </label>
          <input
            onChange={setValues}
            type="text"
            className="form-control border-dark"
            id="INPUTMUNICIPIO"
            name="sector"
            value={inputValue.sector}
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="INPUTPROVINCIA" className="form-label">
            MUNICIPIO
          </label>
          <input
            onChange={setValues}
            type="text"
            className="form-control border-dark"
            id="INPUTPROVINCIA"
            name="municipio"
            value={inputValue.municipio}
          />
        </div> 

        <div className="col-md-4">
          <label htmlFor="INPUTURREBA" className="form-label">
            PROVINCIA
          </label>
          <input
            onChange={setValues}
            type="text"
            className="form-control border-dark"
            id="INPUTURREBA"
            name="provincia"
            value={inputValue.provincia}
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="inputSexo" className="form-label">
            PROVINCIA
          </label>

          <select
            id="inputSexo"
            className="form-select border-dark"
            name="genero"
            value={inputProvincia}
            onChange={handleProvinciaChange}
          >
            <option value="" hidden>
              Seleccione una opcion
            </option>

            {provincias.map((prov, index) => (
              <option key={index} value={index + 1}>
                {prov}
              </option>
            ))}
          </select>
        </div>


{/* select dinamico que depende de elegir provincia */}
        {
          inputProvincia && (
            <div className="col-md-4">
          <label htmlFor="inputSexo" className="form-label">
            MUNICIPIO
          </label>

          <select
            id="inputSexo"
            className="form-select border-dark"
            name="genero"
            // value={inputValue.genero}
            // onChange={setValues}
          >
            <option value="" hidden>
              Seleccione una opcion
            </option>

            {selectedMunicipio().map((muni, index) => (
              <option key={index} value={muni}>
                {muni}
              </option>
            ))}
          </select>
        </div>
          )
        }

        

        {/* <button type="button" className="btn btn-primary" onClick={chooseOnMap}>
          map
        </button> */}

        <div className="col-12">
          {canContinue && (
            <button type="submit" className="btn btn-primary">
              Salvar y Continuar
            </button>
          )}
        </div>
      </form>
    </Layout>
  );
};

PerfilForm3.auth = true;

export default PerfilForm3;
