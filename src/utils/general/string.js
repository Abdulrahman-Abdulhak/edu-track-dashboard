export function words(str = "") {
  return str.split(" ");
}

export function initials(name = "") {
  const _words = words(name);
  const firstInitial = _words[0][0];
  const lastInitial = (_words[1] ?? firstInitial)[0];

  return `${firstInitial}${lastInitial}`.toLowerCase();
}
