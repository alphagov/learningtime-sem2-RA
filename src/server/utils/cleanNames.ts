export const cleanName = (key: string) =>
    key
        .split('-')
        .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
        .join(' ')
