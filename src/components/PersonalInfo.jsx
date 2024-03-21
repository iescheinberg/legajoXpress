import React, { useState } from "react";


const PersonalInfo = () => {
    const [formData, setFormData] = useState({
        apellido: '',
        nombre: '',
        dni: '',
        fechaNacimiento: '',
        provincia: '',
        cedulaIdentidad: '',
        expendidaPor: '',
        domicilioLegal: '',
        profesion: '',
        genero: '',
        estadoCivil: '',
        casadoEnNupcias: '',
        viudoEnNupcias: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí se podría manejar la lógica para guardar los datos parciales
    };

    const handleReset = () => {
        setFormData({
            apellido: '',
            nombre: '',
            dni: '',
            fechaNacimiento: '',
            provincia: '',
            cedulaIdentidad: '',
            expendidaPor: '',
            domicilioLegal: '',
            profesion: '',
            genero: '',
            estadoCivil: '',
            casadoEnNupcias: '',
            viudoEnNupcias: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Apellido:</label>
                <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} />
            </div>
            <div>
                <label>Nombre:</label>
                <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
            </div>
            <div>
                <label>DNI:</label>
                <input type="text" name="dni" value={formData.dni} onChange={handleChange} />
            </div>
            <div>
                <label>Fecha de Nacimiento:</label>
                <input type="date" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} />
            </div>
            <div>
                <label>Provincia:</label>
                <select name="provincia" value={formData.provincia} onChange={handleChange}>
                    <option value={''}>Seleccione una provincia</option>
                    <option value={'Corrientes'}>Corrientes</option>
                    <option value={'Otro'}>Otro</option>
                </select>
            </div>
            <div>
                <label>Cedula de Identidad:</label>
                <input type="text" name="cedulaIdentidad" value={formData.cedulaIdentidad} onChange={handleChange} />
            </div>
            <div>
                <label>Expendida por:</label>
                <input type="text" name="expendidaPor" value={formData.expendidaPor} onChange={handleChange} />
            </div>
            <div>
                <label>Domicilio Legal:</label>
                <input type="text" name="domicilioLegal" value={formData.domicilioLegal} onChange={handleChange} />
            </div>
            <div>
                <label>Profesión:</label>
                <input type="text" name="profesion" value={formData.profesion} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="#">Género:</label>
                <select name="genero" value={formData.genero} onChange={handleChange}>
                    <option value={''}>Seleccione un género</option>
                    <option value={'Masculino'}>Masculino</option>
                    <option value={'Femenino'}>Femenino</option>
                    <option value={'Otro'}>Otro</option>
                </select>
            </div>
            <div>
                <label htmlFor="#">Estado Civil:</label>
                <select name="estadoCivil" value={formData.estadoCivil} onChange={handleChange}>
                    <option value={''}>Seleccione...</option>
                    <option value={'Casado'}>Casado</option>
                    <option value={'Divorciado'}>Divorciado</option>
                    <option value={'Viudo'}>Viudo</option>
                </select>
            </div>
            {formData.estadoCivil === 'Casado' && (
                <div>
                    <label>Casado en qué nupcías:</label>
                    <select name="casadoEnNupcias" value={formData.casadoEnNupcias} onChange={handleChange}>
                        <option value={''}>Seleccione...</option>
                        <option value={'1'}>Opción 1</option>
                        <option value={'2'}>Opción 2</option>
                    </select>
                </div>
            )};
            {formData.estadoCivil === 'Viudo' && (
                <div>
                    <label>Viudo en qué nupcías:</label>
                    <select name="viudoEnNupcias" value={formData.viudoEnNupcias} onChange={handleChange}>
                        <option value={''}>Seleccione...</option>
                        <option value={'1'}>Opción 1</option>
                        <option value={'2'}>Opción 2</option>
                    </select>
                </div>
            )};
            <button type="submit">Guardar Parcialmente</button>
            <button type="button" onChange={handleReset}>Vaciar</button>
        </form>
    );
};

export default PersonalInfo;