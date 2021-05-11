var  XLSX = require('xlsx');

class xlReader{

    //read_from_excel(sheetName, filepath){

//var workbook = XLSX.readFile(filepath);
//var worksheet = workbook.Sheets[sheetName];

////return XLSX_utils_sheet_to_json(worksheet);



   // }

}


function read_excel(sheetName, row, cell){

var filepath = require('./testdata.xlsx');

var workbook = XLSX.readFile(filepath);
var worksheet = workbook.SheetNames(sheetName);
var Row = worksheet.row(row);
var cell = workbook.cell(cell);





}

module.exports = new xlReader();