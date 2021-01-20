export const downloadCSV = (csvContent, filename = "download") => {
  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `${filename}.csv`);
  document.body.appendChild(link); // Required for FF
  link.click(); // This will download the data file named "my_data.csv".
};
export const generateCsv = (columns, rows) => {
  const content = [columns, ...rows];
  let csvContent = "data:text/csv;charset=utf-8,"
    + content.map(e => e.join(",")).join("\n");
  return csvContent;
};
