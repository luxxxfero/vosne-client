const cyrABC = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я', ' ']

const latABC = ['a', 'b', 'v', 'g', 'd', 'e', 'yo', 'zh', 'z', 'i', 'y', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'f', 'kh', 'ts', 'ch', 'sh', 'shch', '', 'y', '', 'e', 'yu', 'ya', '-']

const cyrToLatAlias = (text: string): string => {
  const textArr = text.toLowerCase().split("");
  let output = '';
  for (let i of textArr) {
    const idx = cyrABC.findIndex(it => it === i);
    if(idx === -1) {
      output += i;
    } else {
      output += latABC[idx]
    }
  }
  return output;
}

export default cyrToLatAlias;