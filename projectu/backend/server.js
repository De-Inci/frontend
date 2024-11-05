const express = require ('express');
const cors = require ('cors');
const fs = require ('fs');
const app = express ();
const PORT = 5000;

app.use (cors ());
app.use (express.json ());

const dataFilePath = './data.json';

// Function to read data from JSON file
const readDataFromFile = () => {
  if (fs.existsSync (dataFilePath)) {
    const data = fs.readFileSync (dataFilePath);
    return JSON.parse (data);
  }
  return [];
};

// Function to write data to JSON file
const writeDataToFile = data => {
  try {
    fs.writeFileSync (dataFilePath, JSON.stringify (data, null, 2), 'utf-8');
  } catch (error) {
    console.error ('Error writing to file', error);
  }
};

// GET endpoint to fetch data
app.get ('/data', (req, res) => {
  const data = readDataFromFile ();
  res.json (data);
});

// POST endpoint to add new data
app.post ('/data', (req, res) => {
  console.log ('Adding data:', req.body);
  const newData = {id: Date.now ().toString (), ...req.body};
  const data = readDataFromFile ();
  data.push (newData);
  writeDataToFile (data);
  console.log ('Updated data:', data);
  res.status (201).json (newData);
});

app.put ('/data/:id', (req, res) => {
  const data = readDataFromFile ();
  const index = data.findIndex (d => d.id === req.params.id);
  if (index !== -1) {
    const updatedEntry = {...data[index], ...req.body}; // Merge existing data with new data
    data[index] = updatedEntry; // Update the entry in the array
    writeDataToFile (data);
    res.json (updatedEntry); // Return the updated entry
  } else {
    res.status (404).send ('Data not found');
  }
});

// DELETE endpoint to remove data
app.delete ('/data/:id', (req, res) => {
  let data = readDataFromFile ();
  data = data.filter (d => d.id !== req.params.id);
  writeDataToFile (data);
  res.status (204).send ();
});

app.listen (PORT, () => console.log (`Server running on port ${PORT}`));
