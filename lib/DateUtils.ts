export const calculateTimeAgo = (dateString: string): string => {
  const now = new Date();
  const noteDate = new Date(dateString);

  const secondsAgo = Math.floor((now.getTime() - noteDate.getTime()) / 1000);
  if (secondsAgo < 60) return `Hace ${secondsAgo} segundos`;

  const minutesAgo = Math.floor(secondsAgo / 60);
  if (minutesAgo < 60) return `Hace ${minutesAgo} minutos`;

  const hoursAgo = Math.floor(minutesAgo / 60);
  if (hoursAgo < 24) return `Hace ${hoursAgo} horas`;

  const daysAgo = Math.floor(hoursAgo / 24);
  if (daysAgo < 30) return `Hace ${daysAgo} días`;

  const monthsAgo = Math.floor(daysAgo / 30);
  if (monthsAgo < 12) return `Hace ${monthsAgo} meses`;
  
  const yearsAgo = Math.floor(monthsAgo / 12);
  return `Hace ${yearsAgo} años`;
}

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
