import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export async function exportToPdf(elementId: string, filename: string = 'CV_Iragi_Mihigo_Roland.pdf'): Promise<boolean> {
  const element = document.getElementById(elementId);
  if (!element) return false;

  try {
    // Clone or capture element with exact scale
    const canvas = await html2canvas(element, {
      scale: 2.5, // High resolution for crisp print quality
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,
      windowWidth: 1200,
    });

    const imgData = canvas.toDataURL('image/jpeg', 0.98);

    // Standard A4 dimensions in mm: 210 x 297
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true,
    });

    const pdfWidth = 210;
    const pdfHeight = 297;

    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;

    if (imgHeight <= pdfHeight) {
      // Fits on a single page perfectly
      pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');
    } else {
      // If content slightly exceeds, add multi-page or fit
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
      heightLeft -= pdfHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
        heightLeft -= pdfHeight;
      }
    }

    pdf.save(filename);
    return true;
  } catch (error) {
    console.error('Erreur lors de la génération du PDF:', error);
    // Fallback to window.print() if canvas fails
    window.print();
    return false;
  }
}

export function triggerPrint() {
  window.print();
}
