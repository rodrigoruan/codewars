function solution(input, markers) {
  const reg = new RegExp(`[${markers.join('')}].+`, 'gi');
  return input
    .replace(reg, '')
    .split('\n')
    .map((v) => v.trim())
    .join('\n');
}
