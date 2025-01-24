import { validateOrReject, ValidationError } from "class-validator";

export const validateEntity = async (entity: object) => {
    try {
        await validateOrReject(entity);
    } catch (errors: unknown) {
        if (Array.isArray(errors)) {
            const validationMessages = errors.map(({ property, constraints = {} }: ValidationError) => {
                const messages = Object.entries(constraints).map(([key, message]) =>
                    key === 'isDefined' ? `${message} (Este campo es obligatorio)` : message
                );

                const filteredMessages = constraints.isDefined
                    ? messages.filter((_, index) => Object.keys(constraints)[index] === 'isDefined')
                    : messages;

                return { Propiedad: property, Mensaje: filteredMessages };
            });
            throw (JSON.stringify(validationMessages));
        }
        throw new Error("Ocurrió un error desconocido durante la validación.");
    }
};