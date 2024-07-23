export const generateKey = (text: string) => {
    let valueInput = text;
    let newId =
        valueInput
            .split("")
            .slice()
            .map((char) => char.charCodeAt(0))
            .join("") + `_${Date.now()}`;
    return newId;
}