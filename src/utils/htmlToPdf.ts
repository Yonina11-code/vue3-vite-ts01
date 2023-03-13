import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'
export const htmlToPdf = (htmlTitle: String, dots: any) => {
  console.log('dots', dots)
  html2Canvas(dots, {
    allowTaint: true,
    // taintTest: false,
    useCORS: true,
    y: 72, // 对y轴进行裁切
    dpi: window.devicePixelRatio * 4, // 将分辨率提高到特定的dpi 提高四倍
    scale: 4 //
  }).then(canvas => {
    console.log('canvas', canvas)
    let contentWidth = canvas.width
    let contentHeight = canvas.height
    let pageHeight = (contentWidth / 595.28) * 841.89
    let leftHeight = contentHeight
    let position = 0
    let imgWidth = 595.28
    let imgHeight = 595.28 / contentWidth * contentHeight
    let pageData = canvas.toDataURL('image/jpeg', 1.0)
    let PDF = new JsPDF('p', 'px', 'a4')
    if (leftHeight < pageHeight) {
      PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
    } else {
      while (leftHeight > 0) {
        PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
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

// 批量导出多个页面数据在一张pdf里
// html生成Canvas图片，添加到pdf里
export const downloadPDF = (htmlTitle: String, dots: any) => {
  // 判断所有图片是否都已经转成base64了，如果没有继续等待
  // 我在模板的所有图片的onload里在转base64，每转成一个就调取下载方法，
  // 下载方法就判断是否和要生成的图片总数一致
  const pdf = new JsPDF('p', 'pt', 'a4')
  html2Canvas(dots, {
    dpi: 144, // 设置dpi，会使图片高清一些
    onrendered: function (dots) {
      const contentWidth = dots.width
      const contentHeight = dots.height

      //一页pdf显示html页面生成的canvas高度;
      const pageHeight = (contentWidth / 595.28) * 841.89
      //未生成pdf的html页面高度
      let leftHeight = contentHeight
      //页面偏移
      let position = 0
      //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
      const imgWidth = 595.28
      const imgHeight = (592.28 / contentWidth) * contentHeight

      const pageData = dots.toDataURL('image/jpeg', 1.0)
      if (leftHeight < pageHeight) {
          pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
          // 为下一条数据添加空白页
            // if (i < len - 1) {
            //   pdf.addPage()
            // }
      } else {
          while (leftHeight > 0) {
            pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
            leftHeight -= pageHeight
            position -= 841.89
            //避免添加空白页
            if (leftHeight > 0) {
                pdf.addPage()
            }
          }
      }
      // if (i === len - 1) {
      pdf.save('PDF存档.pdf')
      // }
    }
  })
}