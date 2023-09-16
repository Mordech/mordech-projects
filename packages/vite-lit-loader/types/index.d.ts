declare module '*.html?lit' {
  const src: import('lit/directive.js').DirectiveResult<
    import('lit/directives/unsafe-html').UnsafeHTMLDirective
  >;
  export default src;
}

declare module '*.svg?lit' {
  const src: import('lit/directive.js').DirectiveResult<
    import('lit/directives/unsafe-svg').UnsafeSVGDirective
  >;
  export default src;
}

declare module '*.scss?lit' {
  const src: import('lit').CSSResult;
  export default src;
}

declare module '*.sass?lit' {
  const src: import('lit').CSSResult;
  export default src;
}

declare module '*.css?lit' {
  const src: import('lit').CSSResult;
  export default src;
}
