import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'
export const htmlToPdf = (htmlTitle: String, dots: any) => {
  console.log('dots', dots)
  html2Canvas(dots, {
    allowTaint: true,
    // taintTest: false,
    useCORS: true,
    y: 72, // 对y轴进行裁切
    // dpi: window.devicePixelRatio * 4, // 将分辨率提高到特定的dpi 提高四倍
    scale: 4 //  
  }).then(canvas => {
    console.log('canvas', canvas)
    let contentWidth = canvas.width
    let contentHeight = canvas.height
    let pageHeight = contentWidth / 595.28 * 841.89
    let leftHeight = contentHeight
    let position = 0
    let imgWidth = 595.28
    let imgHeight = 595.28 / contentWidth * contentHeight
    let pageData = canvas.toDataURL('image/jpeg', 1.0)
    let PDF = new JsPDF('portrait', 'pt', 'a4')
    if (leftHeight < pageHeight) {
      PDF.addImage(pageData, 'JPEG', 10, 10, imgWidth, imgHeight)
    } else {
      while (leftHeight > 0) {
        PDF.addImage(pageData, 'JPEG', 10, position, imgWidth, imgHeight)
        leftHeight -= pageHeight
        position -= 841.89
        if (leftHeight > 0) {
          PDF.addPage()
        }
      }
    }
    PDF.save(htmlTitle + '.pdf')
  })
}