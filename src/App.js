import './App.css';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';

const soilValues = {
  "SW": [3.987, -0.815],
  "SP": [3.987, -0.815],
  "SM": [12.542, 2.955],
  "SC": [12.542, 2.955],
  "SM-SC": [12.542, 2.955],
  "CL": [15.506, 3.530],
  "ML": [11.936, 2.407],
  "CL-ML": [14.236, 3.137],
  "CH": [13.686, 2.705],
  "MH": [23.641, 5.191],
  "OL": [17.399, 3.584],
  "OH": [12.189, 1.942],
}

function App() {
  const [soilType, setSoilType] = useState(null);
  const [soilMoisture, setSoilMoisture] = useState(null);
  const [results, setResults] = useState(null);

  function handleCalcMoisture() {
    if (soilType === null) return
    if (soilMoisture === null) return
    let rci = Number(Math.exp(soilValues[soilType][0] - (soilValues[soilType][1] * Math.log(soilMoisture)))).toFixed(1);
    setResults(rci)
  }

  function handleSelectSoilType(e) {
    setSoilType(e.target.value)
  }

  function handleInputMoisture(e) {
    setSoilMoisture(e.target.value)
  }

  function handleReset() {
    setResults(null);
    setSoilType(null);
    setSoilMoisture("");
  }

  return (
    <div className="App">
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >

        <Grid item xs={3}>
          <Card variant="outlined" xs={{ maxWidth: 275 }}>
            <CardContent>
              <Typography sx={{ fontSize: 32 }} color="text.primary" gutterBottom>
                Soil Strength Calculator
              </Typography>
              <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                <TextField
                  label="Enter Soil Moisture"
                  autocomplete="off"
                  id="soilInput"
                  type="number"
                  onChange={(e) => handleInputMoisture(e)}
                  value={soilMoisture}
                />
              </Typography>
              <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                <Stack direction="row" spacing={4} alignItems="center"
                  justifyContent="center">
                  <InputLabel htmlFor="soilType" id="soilType-label">Soil Type</InputLabel>
                  <Select
                    onChange={handleSelectSoilType}
                    labelId="soilType-label"
                    name="soilType" id="soilType" value={soilType}>
                    <MenuItem value="SW">SW</MenuItem >
                    <MenuItem value="SP">SP</MenuItem >
                    <MenuItem value="SM">SM</MenuItem >
                    <MenuItem value="SC">SC</MenuItem >
                    <MenuItem value="SM-SC">SM-SC</MenuItem >
                    <MenuItem value="CL">CL</MenuItem >
                    <MenuItem value="ML">ML</MenuItem >
                    <MenuItem value="CL-ML">CL-ML</MenuItem >
                    <MenuItem value="CH">CH</MenuItem >
                    <MenuItem value="MH">MH</MenuItem >
                    <MenuItem value="OL">OL</MenuItem >
                    <MenuItem value="OH">OH</MenuItem >
                  </Select>
                </Stack>
              </Typography>
              <Stack direction="row" spacing={1} justifyContent="space-evenly" mt={4}>
                <Button variant="outlined" onClick={handleCalcMoisture} >Calc</Button>
                <Button variant="outlined" color="error" onClick={handleReset} >Reset</Button>
              </Stack>
              <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom mt={4}>
                {results && `The soil strength for ${soilType} with ${soilMoisture} is: ${results} kPa`}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            If you have any questions, comments, or concerns, please reach out to Lt Williams<br />
            <br />
            <h3>UCSC Soil Descriptions</h3>
            SW: This group comprises well-graded gravelly and sandy soils having little or no non-plastic fines.<br />
            SP: This group comprises poorly-graded gravels and sands containing little or no non-plastic fines.<br />
            SM: This group comprises gravels or sands with fines having low or no plasticity.<br />
            SC: This group comprises sandy soils with fines that have either low or high plasticity. The gradation
            of the materials is not considered significant and both well- and poorly- graded materials are included.<br />
            SM-SC: A borderline soil that exhibits characteristics of both SM and SC soil groups. The SM soil group
            comprises silty sands while the SC group comprises clayey sands.<br />
            CL: Primarily inorganic clays with low liquid limit (i.e. less than 50).<br />
            ML: This group comprises predominantly silty materials and micaceous or diatomaceous soils with low liquid limits.<br />
            CLML: This grroup comprises a borderline soil that exhibits characteristics of both CL and ML soil groups. The CL
            soil comprises low plasticity clays and the ML soil group comprises silt with low plasticity.<br />
            CH: This group comprises predominantly primarily inorganic clays with high liquid limit (i.e. greater than 50).<br />
            MH: This group comprises predominantly silty materials and micaceious or diatomaceous soils with high liquid limits.<br />
            OL: This group is characterized by the presence of organic matter. Organic silts and clays are classified in this group
            if they have materials with low plasticity.<br />
            OH: This group is characterized by the presence of organic mateer. Organic silts and clays are classified in this group
            if they have materials with high plasticity.<br />
          </Card>
        </Grid>

      </Grid>



    </div >
  );
}

export default App;
