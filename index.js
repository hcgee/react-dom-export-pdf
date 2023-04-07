// dom转为图片
import html2canvas from 'html2canvas';
// 图片转为pdf
import JsPDF from 'jspdf';

// 保存A4纸的宽高，单位pt
const a4Size = {
  w: 595.28,
  h: 841.89,
};

// 左右边距
const plr = 56;

/**
 * dom转为img
 * @param {*} dom 
 * @param {*} options 
 * @returns 
 */
const generateImg = async (dom, options = {}) => {
  const { scale = 4, quality = 1 } = options;

  const canvas = await html2canvas(dom, {
    scale,
    y: 0,
    scrollY: 0,
    // 允许跨域
    useCORS: true,
  });
  // 获取canavs转化后的宽度
  const canvasWidth = canvas.width;
  // 获取canvas转化后的高度
  const canvasHeight = canvas.height;
  // 高度转化为PDF的高度
  const height = (a4Size.w / canvasWidth) * canvasHeight;
  let img = canvas.toDataURL('image/jpeg', quality);
  return {
    img,
    // 存储dom生成后的img的宽高 px
    imgSize: {
      w: canvasWidth,
      h: height,
    },
  };
};

// img转为PDF
const generatePdf = async ({ header, content, footer, pdfFileName = "pdf" }) => {
  // 生成三张图片， 页眉 内容 页尾
  const { img: headerImg, imgSize: headerImgSize } = await generateImg(
    header,
    { scale: 2 }
  );
  const { img: contentImg, imgSize: contentImgSize } = await generateImg(
    content,
    { scale: 2 }
  );
  const { img: footerImg, imgSize: footerImgSize } = await generateImg(
    footer,
    { scale: 2 }
  );

  // 页眉转化后在PDF每页高度
  let headerPdfHeight = headerImgSize.h;
  // 内容转化后在PDF每页高度
  let pagePdfHeight = contentImgSize.h;
  // 页脚转化后在PDF每页高度
  let footerPdfHeight = footerImgSize.h;
  // 除去页头、页眉、还有内容与两者之间的间距后 每页内容的实际高度
  const originalPageHeight = a4Size.h - headerPdfHeight - footerPdfHeight;
  // 页码
  let pageTotal = Math.ceil(pagePdfHeight / originalPageHeight);

  // 生成PDF
  let PDF = new JsPDF('p', 'pt', 'a4');

  for (let i = 0; i < pageTotal; i++) {
    // 根据定位和大小将图片放入pdf
    // （距离左边的距离，距离上边的距离，宽度，高度） pt
    PDF.addImage(
      contentImg,
      'JPEG',
      0,
      -i * originalPageHeight + headerPdfHeight,
      a4Size.w,
      pagePdfHeight
    );
    PDF.addImage(headerImg, 'JPEG', 0, 0, a4Size.w, headerPdfHeight);
    PDF.addImage(
      footerImg,
      'JPEG',
      0,
      a4Size.h - footerPdfHeight,
      a4Size.w,
      footerPdfHeight
    );
    if (i < pageTotal - 1) {
      PDF.addPage();
    }
  }
  PDF.save(`${pdfFileName}.pdf`);
};


export {
  generateImg,
  generatePdf,
  a4Size,
  plr
}