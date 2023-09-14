export const createdBy = (full_name: string) => {
    if(!full_name) {
        return 'Имя отсутствует'
    }

    const splittedFullName = full_name.split(' ');
    return splittedFullName[1] + ' ' + splittedFullName[0][0] + '.'
}