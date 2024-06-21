import { CartItem } from "../types/Cart";

const formatRupiah = (value: number , locale: string = "id-ID"): string => {
  const formatOptions: Intl.NumberFormatOptions = {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  };

  return new Intl.NumberFormat(locale, formatOptions).format(value);
};

const totalAmount = (items: CartItem[]):number => {
  const total = items.reduce((total, item) => {
    return total + item.value * item.quantity;
  }, 0);

  return total
};

const convertUfToState = (uf: string): string => {
  switch (uf.toUpperCase()) {
    case 'AC':
      return 'Acre';
    case 'AL':
      return 'Alagoas';
    case 'AP':
      return 'Amapá';
    case 'AM':
      return 'Amazonas';
    case 'BA':
      return 'Bahia';
    case 'CE':
      return 'Ceará';
    case 'DF':
      return 'Distrito Federal';
    case 'ES':
      return 'Espírito Santo';
    case 'GO':
      return 'Goiás';
    case 'MA':
      return 'Maranhão';
    case 'MT':
      return 'Mato Grosso';
    case 'MS':
      return 'Mato Grosso do Sul';
    case 'MG':
      return 'Minas Gerais';
    case 'PA':
      return 'Pará';
    case 'PB':
      return 'Paraíba';
    case 'PR':
      return 'Paraná';
    case 'PE':
      return 'Pernambuco';
    case 'PI':
      return 'Piauí';
    case 'RJ':
      return 'Rio de Janeiro';
    case 'RN':
      return 'Rio Grande do Norte';
    case 'RS':
      return 'Rio Grande do Sul';
    case 'RO':
      return 'Rondônia';
    case 'RR':
      return 'Roraima';
    case 'SC':
      return 'Santa Catarina';
    case 'SP':
      return 'São Paulo';
    case 'SE':
      return 'Sergipe';
    case 'TO':
      return 'Tocantins';
    default:
      return 'Invalid UF';
  }
};

export { formatRupiah, totalAmount, convertUfToState };


