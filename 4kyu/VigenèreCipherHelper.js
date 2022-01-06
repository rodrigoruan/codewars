function VigenèreCipher(key, abc) {
  this.encode = function (str) {
    const alp = abc.repeat(10);
    const keyl = key.repeat(10).slice(0, str.length);
    const newStr = str.split('').map((v, i) => {
      if (!abc.includes(v)) return v;
      return alp[alp.indexOf(v) + alp.indexOf(keyl[i])];
    });
    return newStr.join('');
  };

  this.decode = function (str) {
    const alp = abc.repeat(10);
    const keyl = key.repeat(10).slice(0, str.length);
    const newStr = str.split('').map((v, i) => {
      if (!abc.includes(v)) return v;
      const sum = alp.lastIndexOf(v) - alp.lastIndexOf(keyl[i]);
      const k = sum < 0 ? abc.length + sum : sum;
      return alp[k];
    });
    return newStr.join('');
  };
}
