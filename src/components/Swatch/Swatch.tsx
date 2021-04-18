
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
                  palette.map(hexColour => { return(
                      <td style={{backgroundColor: hexColour}}>{hexColour}</td>
                  ); })
              }
          </tr>
      </table>
  );
}

