import React from 'react';

/**
 * Parses and formats chemical strings with proper sub/superscripts.
 * Handles subscripts in molecular formulas (e.g. H2SO4, Fe2(SO4)3, C6H12O6),
 * ionic charges (e.g. Fe3+, SO4 2-, Cl-), equilibrium arrows, and enthalpy terms.
 */
export function formatChemicalText(text: string): React.ReactNode[] {
  if (!text) return [];

  // Replace arrow symbols for consistent representation
  const preprocessed = text
    .replace(/<->|<=>|<==>/g, '⇌')
    .replace(/-->|->/g, '→');

  // Tokenize by spaces and line breaks while keeping structure
  const lines = preprocessed.split('\n');

  return lines.map((line, lineIndex) => {
    // Split by chemical words or tokens
    const tokens = line.split(/(\s+)/);

    const renderedLine = tokens.map((token, tokenIndex) => {
      if (/^\s+$/.test(token)) {
        return <span key={`space-${lineIndex}-${tokenIndex}`}>{token}</span>;
      }

      // Handle bold syntax like **term**
      if (token.startsWith('**') && token.endsWith('**') && token.length > 4) {
        return (
          <strong key={`b-${lineIndex}-${tokenIndex}`} className="font-semibold text-slate-900">
            {formatChemicalWord(token.slice(2, -2))}
          </strong>
        );
      }

      return (
        <span key={`tok-${lineIndex}-${tokenIndex}`}>
          {formatChemicalWord(token)}
        </span>
      );
    });

    return (
      <React.Fragment key={`line-${lineIndex}`}>
        {renderedLine}
        {lineIndex < lines.length - 1 && <br />}
      </React.Fragment>
    );
  });
}

function formatChemicalWord(word: string): React.ReactNode {
  // Check for enthalpy symbols like ΔrH°298 or ΔfH°298
  if (word.includes('Δ') || word.includes('Delta')) {
    const enthalpyNormalized = word
      .replace(/Delta/g, 'Δ')
      .replace(/ΔrH°298/g, 'Δr H°298')
      .replace(/ΔfH°298/g, 'Δf H°298');

    // Split and format Δr or Δf
    return (
      <span className="font-mono tracking-tight font-medium">
        {enthalpyNormalized}
      </span>
    );
  }

  // Regex to detect chemical formula patterns like H2SO4, CaCO3, Al3+, Cl-, CH3COOH
  // Matches letters followed by numbers, parentheses, or charges
  const chemFormulaPattern = /^([A-Z][a-z]?|\(|\)|\[|\]|\+|\-|\d)+$/;

  // Don't format regular English/Vietnamese single words or numbers unless they look like chemical formulas
  const isLikelyFormula =
    chemFormulaPattern.test(word) &&
    (/[A-Z]/.test(word)) &&
    (/\d/.test(word) || /\+|\-/.test(word));

  if (!isLikelyFormula) {
    return word;
  }

  // Segment chemical formula into parts: elements, subscripts, superscripts
  // Example: Fe2(SO4)3 or Cu2+ or MnO4-
  const parts: React.ReactNode[] = [];
  let buffer = '';
  let i = 0;

  while (i < word.length) {
    const char = word[i];
    const prevChar = i > 0 ? word[i - 1] : '';

    // Check if this is a charge at the end or following number like 2+, 3-, + or -
    if ((char === '+' || char === '-') && (prevChar === '+' || prevChar === '-' || /\d|[a-z]|[A-Z]|\)/.test(prevChar))) {
      if (buffer) {
        parts.push(buffer);
        buffer = '';
      }
      parts.push(
        <sup key={`sup-${i}`} className="text-xs font-semibold text-emerald-700">
          {char}
        </sup>
      );
      i++;
      continue;
    }

    // Check if this digit is a subscript (follows an element or closing bracket)
    if (/\d/.test(char)) {
      // If the next character is '+' or '-', this digit is part of a superscript charge like 2+, 3-
      if (i + 1 < word.length && (word[i + 1] === '+' || word[i + 1] === '-')) {
        if (buffer) {
          parts.push(buffer);
          buffer = '';
        }
        parts.push(
          <sup key={`sup-${i}`} className="text-xs font-semibold text-emerald-700">
            {char}{word[i + 1]}
          </sup>
        );
        i += 2;
        continue;
      }

      // Otherwise if it follows an element or closing bracket, it's a subscript index
      if (/[A-Za-z\)\]]/.test(prevChar)) {
        if (buffer) {
          parts.push(buffer);
          buffer = '';
        }
        parts.push(
          <sub key={`sub-${i}`} className="text-xs font-medium text-slate-700">
            {char}
          </sub>
        );
        i++;
        continue;
      }
    }

    buffer += char;
    i++;
  }

  if (buffer) {
    parts.push(buffer);
  }

  return <span className="font-mono font-medium">{parts}</span>;
}

interface ChemTextProps {
  content: string;
  className?: string;
}

export const ChemText: React.FC<ChemTextProps> = ({ content, className = '' }) => {
  return <span className={`inline-block leading-relaxed ${className}`}>{formatChemicalText(content)}</span>;
};

export default ChemText;
