function extractFunction(source, signature) {
  const start = source.indexOf(signature);
  if (start === -1) return null;

  const open = source.indexOf('{', start + signature.length);
  if (open === -1) return null;

  let depth = 0;
  let quote = null;
  let escaped = false;
  let lineComment = false;
  let blockComment = false;

  for (let i = open; i < source.length; i += 1) {
    const char = source[i];
    const next = source[i + 1];

    if (lineComment) {
      if (char === '\n') lineComment = false;
      continue;
    }
    if (blockComment) {
      if (char === '*' && next === '/') {
        blockComment = false;
        i += 1;
      }
      continue;
    }
    if (quote) {
      if (escaped) escaped = false;
      else if (char === '\\') escaped = true;
      else if (char === quote) quote = null;
      continue;
    }
    if (char === '/' && next === '/') {
      lineComment = true;
      i += 1;
    } else if (char === '/' && next === '*') {
      blockComment = true;
      i += 1;
    } else if (char === '"' || char === "'" || char === '`') {
      quote = char;
    } else if (char === '{') {
      depth += 1;
    } else if (char === '}' && --depth === 0) {
      return source.slice(start, i + 1);
    }
  }

  return null;
}

module.exports = { extractFunction };
