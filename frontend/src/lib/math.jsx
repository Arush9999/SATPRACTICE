import katex from 'katex';

const LATEX_PATTERN = /(\$\$[\s\S]+?\$\$|\$[^$\n]+?\$)/g;

export function renderMath(text) {
  if (!text || text === 'null') return '';

  return text.split(LATEX_PATTERN).map((part, index) => {
    if (part.startsWith('$$') && part.endsWith('$$')) {
      return katex.renderToString(part.slice(2, -2), {
        displayMode: true,
        throwOnError: false,
      });
    }
    if (part.startsWith('$') && part.endsWith('$')) {
      return katex.renderToString(part.slice(1, -1), {
        displayMode: false,
        throwOnError: false,
      });
    }
    return part;
  }).join('');
}

export function MathText({ children, className = '' }) {
  if (!children) return null;
  return (
    <span
      className={`katex-content ${className}`}
      dangerouslySetInnerHTML={{ __html: renderMath(children) }}
    />
  );
}
