import XLSX from 'xlsx';

export function excel2json(file, includeHeaders){
    return new Promise((resolve,reject)=>{
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
                file.value = '';
                resolve(result);
            };
            reader.readAsBinaryString(file);
        } else {
            reject("This isn't valid excel file.");
        }
    });
}