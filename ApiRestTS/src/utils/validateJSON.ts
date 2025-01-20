export const validateAgainstEntity = (json: any, entity: any) => {
    // Crear una instancia de la entidad para obtener sus propiedades
    const entityInstance = new entity();

    // Obtener las claves de la entidad
    const entityKeys = Object.keys(entityInstance);

    // Validar que el JSON contenga todas las claves necesarias
    const missingKeys = entityKeys.filter((key) => !(key in json));
    if (missingKeys.length > 0) {
        throw new Error(`Missing required keys: ${missingKeys.join(", ")}`);
    }

    // Validar tipos de datos de las propiedades
    for (const key of entityKeys) {
        const expectedType = typeof entityInstance[key];
        const actualType = typeof json[key];

        if (expectedType !== actualType) {
            throw new Error(`Invalid type for key "${key}": expected "${expectedType}", got "${actualType}"`);
        }
    }

    // Si todo es válido, retornar true
    return true;
};