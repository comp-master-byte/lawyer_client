export const editProfileMapper = function(data: any) {
    const result: any = {};

    for(let key in data) {
        if(data[key] !== "") {
            result[key] = data[key]
        }
    }

    if('birthday' in data) {
        let newBirth;
        const splitBirth = data.birthday.split('.');
        newBirth = splitBirth[2] + '-' + splitBirth[1] + '-' + splitBirth[0];
        result.birthday = newBirth;
    }

    return result;
}