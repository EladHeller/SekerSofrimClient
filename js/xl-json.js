function excelFile2Json(file, parser, callback) {
    var reader = new FileReader();
    reader.onload = function(e) {
        var data = e.target.result;

        var workbook = XLSX.read(data, {type: 'binary'});
        var sheet = workbook.Sheets[workbook.SheetNames[0]];
        var data = parser(sheet);

        callback(data);
    };
    reader.readAsBinaryString(file);
}

function excelToArray(sheet) {
    return XLSX.utils.sheet_to_json(sheet, {header: 1});
}

function json2ExcelFile(data, fileName){
    /* original data */
    //var data = [[1,2,3],[true, false, null, "sheetjs"],["foo","bar","0.3"], ["baz", null, "qux"]]
    var ws_name = "Users";
    /* set up workbook objects -- some of these will not be required in the future */
    var wb = {}
    wb.Sheets = {};
    wb.Props = {};
    wb.SSF = {};
    wb.SheetNames = [];

    /* create worksheet: */
    var ws = {}

    /* the range object is used to keep track of the range of the sheet */
    var range = {s: {c:0, r:0}, e: {c:0, r:0 }};

    /* Iterate through each element in the structure */
    for(var R = 0; R != data.length; ++R) {
        if(range.e.r < R) range.e.r = R;

        for(var C = 0; C != data[R].length; ++C) {
            if(range.e.c < C) range.e.c = C;

            /* create cell object: .v is the actual data */
            var cell = { v: data[R][C] };
            if(cell.v == null) continue;

            /* create the correct cell reference */
            var cell_ref = XLSX.utils.encode_cell({c:C,r:R});

            /* determine the cell type */
            // if(typeof cell.v === 'number') cell.t = 'n';
            // else if(typeof cell.v === 'boolean') cell.t = 'b';
            // else cell.t = 's';
            cell.t = 's';

            /* add to structure */
            ws[cell_ref] = cell;
        }
    }

    ws['!ref'] = XLSX.utils.encode_range(range);

    /* add worksheet to workbook */
    wb.SheetNames.push(ws_name);
    wb.Sheets[ws_name] = ws;

    /* write file */
    /* bookType can be 'xlsx' or 'xlsm' or 'xlsb' or 'ods' */
    var wopts = { bookType:'xlsx', bookSST:false, type:'binary' };

    var wbout = XLSX.write(wb,wopts);

    function s2ab(s) {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i=0; i!=s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    }

    /* the saveAs call downloads a file on the local machine */
    saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), fileName);
}