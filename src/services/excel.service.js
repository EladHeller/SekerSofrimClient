import XLSX from 'xlsx';
import saveAs from 'save-as';
export function excel2json(fileInput, includeHeaders){
    return new Promise((resolve,reject)=>{
        const file = fileInput.files[0];
        if (file && file.name.split('.').pop().toLowerCase() === 'xlsx') {
            const reader = new FileReader();
            reader.onload = function(e) {
                const data = e.target.result;
                const workbook = XLSX.read(data, {type: 'binary'});
                const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                const options = {raw:true};
                if (!includeHeaders){
                    options.header = 1;
                }
                const result = XLSX.utils.sheet_to_json(worksheet,options);
                fileInput.value = '';
                resolve(result);
            };
            reader.readAsBinaryString(file);
        } else {
            reject("This isn't valid excel file.");
        }
    });
}

export function json2excel(json, name){
    const ws = XLSX.utils.json_to_sheet(json);
    const wb = {}
    wb.Sheets = {};
    wb.Props = {};
    wb.SSF = {};
    wb.SheetNames = [];
    wb.SheetNames.push(name);
    wb.Sheets[name] = ws;
    const wopts = { bookType:'xlsx', bookSST:false, type:'binary' };
    const wbout = XLSX.write(wb,wopts);

    saveAs(new Blob([_s2ab(wbout)],{type:"application/octet-stream"}), `${name}.xlsx`);
}

function _s2ab(s) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i=0; i!=s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
}