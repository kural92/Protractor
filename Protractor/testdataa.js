
import {Workbook, Row, Cell} from 'exceljs';

function excelReader(heetName, Row, Cell){

// set implicit time to 30 seconds
browser.manage().timeouts().implicitlyWait(30000);
// create object for workbook
var wb:Workbook = new Workbook();
// read xlsx file type
wb.xlsx.readFile("./testdata.xlsx").then(function(){
    //sheet object
    let sheet:Worksheet = wb.getWorksheet("Sheet1");
    //row objct
    let rowObject:Row = sheet.getRow(3);
    // cell object
    let cellObject:Cell = rowObject.getCell(2);
    //print
    console.log(cellObject.value);
    //use the cell value as url for navigation
    browser.get(cellObject.toString())


}





}