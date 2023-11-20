export const dashFormatDate = (date: string): string => {
    const newDate = new Date(date);

    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    const day = newDate.getDate();

    return `${year}-${month}-${day}`;
}