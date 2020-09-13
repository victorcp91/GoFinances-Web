const formatValue = (value: string): string => {
  const parsedValue = parseFloat(value);
  return `R$ ${parsedValue.toLocaleString('pt-br', {
    minimumFractionDigits: 2,
  })}`;
};

export default formatValue;
