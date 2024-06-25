/* TASK THREE */
// userinfo.js
export function createUserProfiles(ArrayofNames = [], ArrayOfModifiedNames = []) {
    const ArrayofObject = [];

    if (ArrayofNames.length === 0 && ArrayOfModifiedNames.length === 0) {
        console.log("Both arrays are empty");
        return 0;
    } else if (ArrayofNames.length !== ArrayOfModifiedNames.length) {
        console.log("Both arrays must be of the same size");
        return 0;
    }

    for (let i = 0; i < ArrayofNames.length; i++) {
        ArrayofObject.push({
            id: i + 1,
            originalName: ArrayofNames[i],
            modifiedName: ArrayOfModifiedNames[i]
        });
    }

    return ArrayofObject;
}
