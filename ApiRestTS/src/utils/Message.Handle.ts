export class MessageHandle {

    // Mensaje para campos requeridos
    ErrorIsDefined(fieldName: string) {
        return { message: `El campo ${fieldName} es requerido.` };
    }

    // Mensaje para campos que deben ser booleanos
    ErrorIsBoolean(fieldName: string) {
        return { message: `El campo ${fieldName} debe ser un valor booleano (true o false).` };
    }

    // Mensaje para campos que deben ser enteros
    ErrorIsInt(fieldName: string) {
        return { message: `El campo ${fieldName} debe ser un número entero.` };
    }

    // Mensaje para campos que deben tener un valor mínimo
    ErrorMinValue(fieldName: string, minValue: number) {
        return { message: `El campo ${fieldName} debe ser mayor o igual a ${minValue}.` };
    }

    // Mensaje para campos que deben tener un valor máximo
    ErrorMaxValue(fieldName: string, maxValue: number) {
        return { message: `El campo ${fieldName} no puede exceder ${maxValue}.` };
    }

    // Mensaje para campos que no pueden estar vacíos
    ErrorIsNotEmpty(fieldName: string) {
        return { message: `El campo ${fieldName} no puede estar vacío.` };
    }

    // Mensaje para campos que deben ser cadenas de texto
    ErrorIsString(fieldName: string) {
        return { message: `El campo ${fieldName} debe ser una cadena de texto.` };
    }

    // Mensaje para campos que deben cumplir con un formato específico (ejemplo: email)
    ErrorInvalidFormat(fieldName: string, format: string) {
        return { message: `El campo ${fieldName} debe tener un formato válido (${format}).` };
    }

    // Mensaje para campos que deben ser únicos
    ErrorUniqueField(fieldName: string) {
        return { message: `El campo ${fieldName} debe ser único.` };
    }

    // Mensaje para campos que deben ser fechas válidas
    ErrorIsDate(fieldName: string) {
        return { message: `El campo ${fieldName} debe ser una fecha válida.` };
    }

    // Mensaje para campos que deben ser arreglos
    ErrorIsArray(fieldName: string) {
        return { message: `El campo ${fieldName} debe ser un arreglo.` };
    }

    // Mensaje para campos que deben ser objetos
    ErrorIsObject(fieldName: string) {
        return { message: `El campo ${fieldName} debe ser un objeto.` };
    }
}