import { findServiceByDateEmployeeProduct } from "../repositories/service.repository"


export const findReportServiceByDateService = async (
    idEmployee: number,
    idProduct: number,
    dateStart: string,
    dateEnd: string) => {

    function formatDate(x: string) {
        const [day, month, year] = x.split('/');
        return `${year}-${month}-${day}`;
    }
    const defaultDateStart = formatDate(dateStart)+"T00:00:00Z"
    const defaultDateEnd = formatDate(dateEnd)+"T00:00:00Z"

    const relatorio = findServiceByDateEmployeeProduct(idEmployee, idProduct, defaultDateStart, defaultDateEnd)
    return relatorio
}