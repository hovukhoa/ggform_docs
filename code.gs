function exportNewEntry() {
  var templateFileId = "12-b6jerocBsAkmOE59-s4c59F9xMoaAayMdk_v6qL2w"; // File mẫu
  var folderId = "1sH_pH8tAmtVQ_84UVm_GFdBcj3S9h6lb"; // Thư mục lưu file
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var lastRow = sheet.getLastRow(); // Lấy dòng mới nhất
  var row = sheet.getRange(lastRow, 1, 1, sheet.getLastColumn()).getValues()[0]; // Lấy dữ liệu hàng cuối

  var fileName = "Bản cam kết - " + row[1]; // Họ tên ở cột thứ 2

  // Mở file mẫu và tạo bản sao
  var templateFile = DriveApp.getFileById(templateFileId);
  var copiedFile = templateFile.makeCopy(fileName, DriveApp.getFolderById(folderId));
  
  // 🔹 Chờ 2 giây để Google Drive xử lý file
  Utilities.sleep(2000);

  // 🔹 Mở file để chỉnh sửa
  var doc = DocumentApp.openById(copiedFile.getId());
  var body = doc.getBody();

  // 🔄 Thay thế thông tin trong file
  body.replaceText("{{HỌ_TÊN}}", row[1]);  
  body.replaceText("{{NGÀY_SINH}}", row[2]);  
  body.replaceText("{{CMND_CCCD}}", row[3]);  
  body.replaceText("{{ĐỊA_CHỈ}}", row[4]);  
  body.replaceText("{{SĐT}}", row[5]);  
  body.replaceText("{{NGƯỜI_LH}}", row[6]);  
  body.replaceText("{{SĐT_LH}}", row[7]);  
  body.replaceText("{{SỨC_KHỎE}}", row[8]);  

  doc.saveAndClose();
}
