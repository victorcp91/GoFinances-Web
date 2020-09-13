const formatDate = (value: Date): string => {
  const date = new Date(value);
  const dia = date.getDate().toString();
  const diaF = dia.length === 1 ? `0${dia}` : dia;
  const mes = (date.getMonth() + 1).toString();
  const mesF = mes.length === 1 ? `0${mes}` : mes;
  const anoF = date.getFullYear();
  return `${diaF}/${mesF}/${anoF}`;
};

export default formatDate;
