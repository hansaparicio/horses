import React from "react";
import { Link } from "react-router-dom";

const Formularioventa = () => {
	return (
		<><div className="container bg-black text-white">
		<div className="row my-2"/>
            <div className="col-md-3">
                <label for="validationDefault01" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="validationDefault01" required
                    placeholder="Nombre del caballo"/>

            </div>
            <div className="col-md-2">
                <label for="validationDefault02" class="form-label">Fecha de nacimiento</label>
                <input type="datetime" class="form-control" id="validationDefault02" required/>
            </div>
            <div className="col-md-4">
                <label for="validationCustom04" class="form-label">Ganadería</label>
                <select class="form-select" id="validationCustom04" required>
                    <option selected disabled value="">Elige gandería</option>
                    <option> A.Y. D. JUAN MANUEL URQUIJO Y NOVALES</option>
                    
                </select>
                
            </div>
            <div className="col-md-1">
                <label for="validationCustom04" class="form-label">Sexo</label>
                <select class="form-select" id="validationCustom04" required>
                    <option selected disabled value=""></option>
                    <option>Macho</option>
                    <option>Hermbra</option>
                    <option>Castrado</option>
                    
                </select>
                
            </div>
            <div className="col-md-2">
                <label for="validationDefault03" class="form-label">Precio €</label>
                <input type="num" class="form-control" id="validationDefault02" required value=""/>
            </div>

            <div className="col-md-2">
                <label for="validationCustom04" class="form-label">Capa</label>
                <select class="form-select" id="validationCustom04" required>
                    <option selected disabled value="">Elige capa</option>
                    <option>Negro</option>
                    
                </select>
                
            </div>

            <div className="col-md-2">
                <label for="validationCustom04" class="form-label">Alzada (m)</label>
                <select class="form-select" id="validationCustom04" required>
                    <option selected disabled value="">Elige alzada</option>
                    <option>1.20 - 1.30</option>
                    
                </select>
                
            </div>
            <div className="col-md-2">
                <label for="validationCustom04" class="form-label">Provincia</label>
                <select class="form-select" id="validationCustom04" required>
                    <option selected disabled value="">Elige provincia</option>
                    <option>Almería</option>
                    
                </select>
                
            </div>
            <div className="col-md-3">
                <label for="validationCustom04" class="form-label">Nivel de doma</label>
                <select class="form-select" id="validationCustom04" required>
                    <option selected disabled value="">Elige lo más aproximado</option>
                    <option>Sin doma</option>
                    <option>Paso ,trote, galope</option>
                    <option>Domado</option>
                </select>
                <div className="invalid-feedback">
                    Por favor escoja un nivel de doma
                </div>


            </div>
            
            <div className="row mt-2 bg-black text-white">
                <div className="col-4 mt-2"><strong>Sube tus fotos, un vídeo y la carta</strong>
                    <div className="input-group input-group-sm mb-3 mt-2">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Sube tus fotos</span>
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder= "tus archivos en JPEG" required/>
                    </div>

                    <div className="input-group input-group-sm mb-3 mt-2">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Sube tu video</span>
                        <input type="text" class="form-control" aria-label="Sizing example input" placeholder= "tu archivo en MP4"aria-describedby="inputGroup-sizing-sm" required/>
                    </div>

                    <div className="input-group input-group-sm mb-3 mt-2">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Sube la carta</span>
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"placeholder= "tu archivo en PDF" required/>
                    </div>

                </div>
                
                <div className="col-8 mt-2"><strong>Descripción</strong><textarea class="form-control mt-2" id="message" name="message" placeholder="Describe aquí tu caballo"
                        rows="8" required></textarea></div>
            </div>
            <div className="row mt-2">
                <div className="col-4">
                   
                </div>
                <div className="col-8">

                    
                </div>
            </div>
            <div className="row  ms-1 mt-1 bg-black">
                <div className="d-flex p-2 justify-content-end  mt-3">
                    <button className="btn btn-warning" type="submit">Enviar</button>
                </div>
            </div>
			</div>
   
		</>
	
	);
};
 export default Formularioventa