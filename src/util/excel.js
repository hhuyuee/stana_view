import XLSX from 'xlsx';

/*
 * 通用的打开下载对话框方法，没有测试过具体兼容性
 * @param url 下载地址，也可以是一个blob对象，必选
 * @param saveName 保存文件名，可选
 */
export const openDownloadDialog = (url, saveName) => {
  let urlObj = url;
  if (typeof url === 'object' && url instanceof Blob) {
    urlObj = URL.createObjectURL(url); // 创建blob地址
  }
  const aLink = document.createElement('a');
  aLink.href = urlObj;
  aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
  aLink.click();
};

// 字符串转ArrayBuffer
function s2ab(s) {
  const buf = new ArrayBuffer(s.length);
  const view = new Uint8Array(buf);
  // eslint-disable-next-line
  for (let i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
  return buf;
}

/**
* 将json文件导出为excel
* @param {Object[]}  sheets 配置
* @param {String}  sheets.name excel中sheet的名字
* @param {Array}  sheets.data excel中sheet的具体内容
* @param {String} fileName 文件名
* @example
* json2excel([
* {sheet: 'sheet1', data:
* [
   ['姓名', '性别', '年龄', '注册时间'],
   ['张三', '男', 18, new Date()],
   ['李四', '女', 22, new Date()]
 ]
 }], '导出excel.xlsx')
*/
export const json2excel = (
  sheets = [{}],
  fileName = '下载文件.xlsx',
  workbookOpts = {}
) => {
  // [{sheetName, sheetData}]
  const defaultConfg = {
    sheetNamePrefix: 'sheet',
    workbookOpts: {
      bookType: 'xlsx', // 要生成的文件类型
      bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
      type: 'binary',
    },
  };

  const workbook = XLSX.utils.book_new();
  sheets.forEach((sheet, index) => {
    const worksheet = XLSX.utils.aoa_to_sheet(sheet.data);
    const sheetName =
      sheet.name || `${defaultConfg.sheetNamePrefix}${index + 1}`;
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
  });
  const wopts = Object.assign({}, defaultConfg.workbookOpts, workbookOpts);
  const wbout = XLSX.write(workbook, wopts);
  const blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
  openDownloadDialog(blob, fileName);
};
