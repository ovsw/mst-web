const typography = {
  fonts: {
    // 'sans': '-apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    // 'serif': 'Georgia, Cambria, "Times New Roman", Times, serif',
    mono: 'Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    heading: 'Jubilat, sans-serif',
    body: '"Europa", sans-serif'
  },
  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      letterSpacing: 'heading'
    },
    mainHeading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'none',
      fontSize: [5, null, 6, 7, 8, null],
      letterSpacing: '-.03em',
      mt: 0,
      mb: 5
    },
    // display: {
    //   fontFamily: 'heading',
    //   fontWeight: 'heading',
    //   lineHeight: 'heading',
    //   letterSpacing: 'heading',
    //   fontSize: [ 5, 6, 7 ]
    // },
    caps: {
      textTransform: 'uppercase'
    }
  },
  fontSizes: [
    '0.875rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '1.875rem',
    '2.25rem',
    '3rem',
    '4rem',
    '5rem'
  ],
  fontWeights: {
    hairline: '100',
    thin: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
    body: '400',
    heading: '400'
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
    heading: '-.03em'
  },
  lineHeights: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
    body: '1.625',
    heading: '1'
  }
}

export default typography
