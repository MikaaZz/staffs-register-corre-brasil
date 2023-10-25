export default class DateTimeUtils {
  private static _format = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  static formatDateToDb(date: Date): number {
    return parseInt(DateTimeUtils._format.format(date).replace(/[^\d]/g, ''));
  }

  static getDateFromDb(date: string): Date {
    const year = parseInt(date.substring(0, 4));
    const month = parseInt(date.substring(4, 6));
    const day = parseInt(date.substring(6, 8));
    const hour = parseInt(date.substring(8, 10));
    const minute = parseInt(date.substring(10, 12));
    const second = parseInt(date.substring(12, 14));

    return new Date(year, month - 1, day, hour, minute, second);
  }

  static formatVisualizerToDateTime(date: string): Date {
    const separated = date.split('/');
    return new Date(
      parseInt(separated[2]),
      parseInt(separated[1]) - 1,
      parseInt(separated[0]),
      0,
      0,
      0,
      0
    );
  }

  static formatDateTimeToView(date: Date): string {
    return `${date.getDate().toString().padStart(2, '0')}/${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, '0')}/${date.getFullYear()}`;
  }

  static parseDate(date: Date, includeHours: boolean = false): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();

    if (!includeHours) {
      return `${day}/${month}/${year}`;
    }

    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');

    return `${day}/${month}/${year} ${hour}:${minute}`;
  }
}
