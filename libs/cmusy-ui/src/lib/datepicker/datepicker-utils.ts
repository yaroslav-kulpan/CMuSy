import dayjs from 'dayjs';

function sliceIntoChunks(arr: any[], chunkSize: number) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}

export function getGridDays(date: Date) {
  const daysInMonth = dayjs(date).daysInMonth();
  const startWeekday = dayjs(date).startOf('month').day();
  const endWeekday = dayjs(date).endOf('month').day();
  return sliceIntoChunks(
    [
      ...Array.from({ length: startWeekday }).fill(null),
      ...Array.from({ length: daysInMonth }, (_, i) => ({
        text: (i + 1).toString(),
        value: dayjs(date)
          .clone()
          .set('date', i + 1),
      })),
      ...Array.from({ length: 6 - endWeekday }).fill(null),
    ],
    7
  );
}

export function getYearsRange(startYear = new Date(2000, 2, 1), endYear = new Date(2022, 10, 22)) {
  const currentDate = new Date();
  const startYearOffset = dayjs(currentDate).diff(startYear, 'year') + 1;
  const endYearOffset = dayjs(currentDate).diff(endYear, 'year');
  const now = currentDate.getUTCFullYear() + endYearOffset;
  const offsetBefore = now - (startYearOffset + endYearOffset);
  return Array.from({ length: now - offsetBefore }, (v, idx) => now - idx);
}
