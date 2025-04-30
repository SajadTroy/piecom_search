const fs = require('fs');
const csv = require('csv-parser');

const suggestions = [];

fs.createReadStream('search_data_dataset.csv')
  .pipe(csv())
  .on('data', (row) => {
    if (row.auto_complete_suggestion) {
      suggestions.push(row.auto_complete_suggestion);
    }
  })
  .on('end', () => {
    // Save to JSON file
    fs.writeFile('suggestions.json', JSON.stringify(suggestions, null, 2), (err) => {
      if (err) {
        console.error('Error writing JSON file:', err);
      } else {
        console.log('Suggestions saved to suggestions.json');
      }
    });
  });
