export const trimText = (text: string, limit: number) =>
  text.length > limit ? `${text.slice(0, limit)} ...` : text;
