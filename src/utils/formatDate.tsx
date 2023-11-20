export const formatDate = (date: string): string => {
    
    const formattedDate = new Date(date).toLocaleString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    
    return formattedDate;
}