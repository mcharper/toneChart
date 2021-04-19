import { Scale } from "../../models/Scale";
import { scaleData } from "../../models/scaleData";

export interface ScaleSelectorProps {
  onChange: (scale: Scale) => void
}

export const ScaleSelector = ({onChange}: ScaleSelectorProps) : JSX.Element => {
  return (
      <>
        <label htmlFor="scales">Choose a scale:</label>

        <select name="scales" id="scales" onChange={(ev) => onChange((scaleData.filter(s => s.name == ev.target.value))[0])}>
        {
          scaleData.map(scale => { 
            return(
              <option value={scale.name}>{scale.name}</option>
            ); })
        }
        </select>
      </>
  );
}
