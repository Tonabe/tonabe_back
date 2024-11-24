import { findReportProductByService } from "../repositories/product.repository";
import { findServiceByDateEmployeeProduct } from "../repositories/service.repository"

export const findReportServiceByDateService = async (
  idEmployee: number,
  idProduct: number,
  dateStart: string,
  dateEnd: string) => {


  const defaultDateStart = dateStart + "T00:00:00Z"
  const defaultDateEnd = dateEnd + "T00:00:00Z"

  const relatorio = await findServiceByDateEmployeeProduct(idEmployee, idProduct, defaultDateStart, defaultDateEnd)

  if (!relatorio || !Array.isArray(relatorio)) {
    throw new Error("Erro ao buscar o relatório.")
  }

  function formatDate(dateString: string): string {
    const date = new Date(dateString)
    date.setUTCHours(0, 0, 0, 0)
    const year = date.getUTCFullYear()
    const month = String(date.getUTCMonth() + 1).padStart(2, "0")
    const day = String(date.getUTCDate()).padStart(2, "0")
    return `${year}-${month}-${day}`
  }
  const formattedRelatorios = relatorio.map(item => {
    const formattedEmployee = item.employee
      ? {
        ...item.employee,
        hiringDate: item.employee.hiringDate
          ? formatDate(String(item.employee.hiringDate))
          : undefined
      }
      : undefined;

    return {
      ...item,
      date: item.date ? formatDate(String(item.date)) : undefined,
      employee: formattedEmployee
    };
  });
  return formattedRelatorios
}

export const findReportProductByDateService = async (
  idProduct: number,
  dateStart: string,
  dateEnd: string) => {

  const defaultDateStart = dateStart + "T00:00:00Z"
  const defaultDateEnd = dateEnd + "T00:00:00Z"

  const relatorio = findReportProductByService(idProduct, defaultDateStart, defaultDateEnd)
  return relatorio
}