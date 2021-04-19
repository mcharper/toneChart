
export interface SwatchProps {
    palette: Array<string>
}

export const Swatch = ({palette}: SwatchProps) : JSX.Element => {
  return (
      <table>
          <tr>
              <td colSpan={palette.length}></td>
          </tr>
          <tr>
              {
                  palette.map(hslColour => { return(
                      <td style={{backgroundColor: hslColour, height: "100px", width: "100px"}}>{hslColour}</td>
                  ); })
              }
          </tr>
      </table>
  );
}

