import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  WidthType,
  AlignmentType,
  BorderStyle,
  convertInchesToTwip,
} from 'docx';
import { saveAs } from 'file-saver';
import { CVData } from '../types/cv';

export async function exportToDocx(cv: CVData) {
  const primaryNavy = '0F3B6C';
  const accentBlue = '0284C7';
  const darkSlate = '1E293B';
  const bodyMuted = '475569';
  const lightBg = 'F0F7FF';
  const borderColor = 'CBD5E1';

  // Helper for section headings
  const createSectionHeading = (title: string) => {
    return new Paragraph({
      spacing: { before: 240, after: 120 },
      border: {
        bottom: {
          color: primaryNavy,
          space: 4,
          style: BorderStyle.SINGLE,
          size: 16,
        },
      },
      children: [
        new TextRun({
          text: title.toUpperCase(),
          bold: true,
          size: 22, // 11pt
          color: primaryNavy,
          font: 'Arial',
        }),
      ],
    });
  };

  // Build Left Column Paragraphs
  const leftColumnChildren: Paragraph[] = [
    createSectionHeading('Profil Professionnel'),
    new Paragraph({
      spacing: { after: 180 },
      children: [
        new TextRun({
          text: cv.profile,
          size: 18, // 9pt
          color: darkSlate,
          font: 'Arial',
        }),
      ],
    }),

    createSectionHeading('Compétences Techniques'),
    ...cv.skillCategories.flatMap((cat) => [
      new Paragraph({
        spacing: { before: 100, after: 40 },
        children: [
          new TextRun({
            text: cat.title,
            bold: true,
            size: 18,
            color: accentBlue,
            font: 'Arial',
          }),
        ],
      }),
      ...cat.skills.map(
        (skill) =>
          new Paragraph({
            bullet: { level: 0 },
            spacing: { before: 20, after: 20 },
            children: [
              new TextRun({
                text: skill,
                size: 17,
                color: bodyMuted,
                font: 'Arial',
              }),
            ],
          })
      ),
    ]),

    createSectionHeading('Langues'),
    ...cv.languages.map(
      (lang) =>
        new Paragraph({
          spacing: { before: 40, after: 40 },
          children: [
            new TextRun({
              text: `[${lang.code}]  ${lang.name}: `,
              bold: true,
              size: 18,
              color: primaryNavy,
              font: 'Arial',
            }),
            new TextRun({
              text: lang.level,
              italics: true,
              size: 17,
              color: bodyMuted,
              font: 'Arial',
            }),
          ],
        })
    ),

    createSectionHeading("Centres d'Intérêt"),
    ...cv.interests.map(
      (interest) =>
        new Paragraph({
          bullet: { level: 0 },
          spacing: { before: 30, after: 30 },
          children: [
            new TextRun({
              text: interest.title,
              bold: true,
              size: 18,
              color: darkSlate,
              font: 'Arial',
            }),
            ...(interest.subtitle
              ? [
                  new TextRun({
                    text: ` ${interest.subtitle}`,
                    italics: true,
                    size: 16,
                    color: bodyMuted,
                    font: 'Arial',
                  }),
                ]
              : []),
          ],
        })
    ),
  ];

  // Build Right Column Paragraphs
  const rightColumnChildren: Paragraph[] = [
    createSectionHeading('Expérience Professionnelle'),
    ...cv.experiences.flatMap((exp) => [
      new Paragraph({
        spacing: { before: 140, after: 40 },
        children: [
          new TextRun({
            text: exp.company,
            bold: true,
            size: 20,
            color: primaryNavy,
            font: 'Arial',
          }),
          ...(exp.companyType
            ? [
                new TextRun({
                  text: ` (${exp.companyType})`,
                  italics: true,
                  size: 17,
                  color: bodyMuted,
                  font: 'Arial',
                }),
              ]
            : []),
          new TextRun({
            text: `  |  ${exp.period}`,
            bold: true,
            size: 18,
            color: accentBlue,
            font: 'Arial',
          }),
        ],
      }),
      new Paragraph({
        spacing: { before: 20, after: 60 },
        children: [
          new TextRun({
            text: exp.role,
            bold: true,
            size: 18,
            color: darkSlate,
            font: 'Arial',
          }),
          ...(exp.location
            ? [
                new TextRun({
                  text: ` — ${exp.location}`,
                  italics: true,
                  size: 17,
                  color: bodyMuted,
                  font: 'Arial',
                }),
              ]
            : []),
        ],
      }),
      ...exp.bullets.map(
        (bullet) =>
          new Paragraph({
            bullet: { level: 0 },
            spacing: { before: 20, after: 30 },
            children: [
              new TextRun({
                text: bullet,
                size: 17,
                color: bodyMuted,
                font: 'Arial',
              }),
            ],
          })
      ),
    ]),

    createSectionHeading('Formation'),
    ...cv.education.flatMap((edu) => [
      new Paragraph({
        spacing: { before: 80, after: 40 },
        children: [
          new TextRun({
            text: edu.institution,
            bold: true,
            size: 19,
            color: primaryNavy,
            font: 'Arial',
          }),
          new TextRun({
            text: ` (${edu.location})  |  ${edu.year}`,
            bold: true,
            size: 17,
            color: accentBlue,
            font: 'Arial',
          }),
        ],
      }),
      new Paragraph({
        spacing: { before: 20, after: 60 },
        children: [
          new TextRun({
            text: edu.degree,
            size: 18,
            color: darkSlate,
            font: 'Arial',
          }),
        ],
      }),
    ]),

    createSectionHeading('Certifications'),
    ...cv.certifications.map(
      (cert) =>
        new Paragraph({
          spacing: { before: 40, after: 40 },
          children: [
            new TextRun({
              text: `• ${cert.title}`,
              bold: true,
              size: 18,
              color: darkSlate,
              font: 'Arial',
            }),
            new TextRun({
              text: ` — ${cert.provider} (${cert.platform})`,
              size: 17,
              color: bodyMuted,
              font: 'Arial',
            }),
          ],
        })
    ),

    ...(cv.projects && cv.projects.length > 0
      ? [
          createSectionHeading('Projet Data / Portfolio'),
          ...cv.projects.flatMap((proj) => [
            new Paragraph({
              spacing: { before: 80, after: 30 },
              children: [
                new TextRun({
                  text: `${proj.title} (${proj.period})`,
                  bold: true,
                  size: 18,
                  color: primaryNavy,
                  font: 'Arial',
                }),
              ],
            }),
            new Paragraph({
              spacing: { before: 0, after: 40 },
              children: [
                new TextRun({
                  text: proj.introduction,
                  size: 16,
                  color: darkSlate,
                  font: 'Arial',
                }),
              ],
            }),
            ...proj.keyFindings.map(
              (kf) =>
                new Paragraph({
                  bullet: { level: 0 },
                  spacing: { before: 20, after: 20 },
                  children: [
                    new TextRun({
                      text: `${kf.group}: `,
                      bold: true,
                      size: 16,
                      color: accentBlue,
                      font: 'Arial',
                    }),
                    new TextRun({
                      text: `${kf.highlight} — ${kf.details}`,
                      size: 16,
                      color: bodyMuted,
                      font: 'Arial',
                    }),
                  ],
                })
            ),
            new Paragraph({
              spacing: { before: 30, after: 60 },
              children: [
                new TextRun({
                  text: `Kaggle: ${proj.kaggleUrl}   |   Tableau Dashboard: ${proj.tableauUrl}`,
                  size: 15,
                  bold: true,
                  color: accentBlue,
                  font: 'Arial',
                }),
              ],
            }),
          ]),
        ]
      : []),

    createSectionHeading('Personnes de Référence'),
    ...cv.references.flatMap((ref) => [
      new Paragraph({
        spacing: { before: 60, after: 20 },
        children: [
          new TextRun({
            text: ref.name,
            bold: true,
            size: 18,
            color: primaryNavy,
            font: 'Arial',
          }),
          new TextRun({
            text: ` — ${ref.role}`,
            italics: true,
            size: 17,
            color: darkSlate,
            font: 'Arial',
          }),
        ],
      }),
      new Paragraph({
        spacing: { before: 0, after: 60 },
        children: [
          new TextRun({
            text: `${ref.email}  |  ${ref.phone}`,
            size: 16,
            color: accentBlue,
            font: 'Arial',
          }),
        ],
      }),
    ]),
  ];

  // Two column table to hold left and right side cleanly in Word
  const twoColumnTable = new Table({
    width: {
      size: 100,
      type: WidthType.PERCENTAGE,
    },
    borders: {
      top: { style: BorderStyle.NONE },
      bottom: { style: BorderStyle.NONE },
      left: { style: BorderStyle.NONE },
      right: { style: BorderStyle.NONE },
      insideHorizontal: { style: BorderStyle.NONE },
      insideVertical: {
        style: BorderStyle.SINGLE,
        size: 4,
        color: borderColor,
      },
    },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: {
              size: 38,
              type: WidthType.PERCENTAGE,
            },
            margins: {
              top: convertInchesToTwip(0.1),
              bottom: convertInchesToTwip(0.1),
              left: convertInchesToTwip(0.05),
              right: convertInchesToTwip(0.15),
            },
            children: leftColumnChildren,
          }),
          new TableCell({
            width: {
              size: 62,
              type: WidthType.PERCENTAGE,
            },
            margins: {
              top: convertInchesToTwip(0.1),
              bottom: convertInchesToTwip(0.1),
              left: convertInchesToTwip(0.15),
              right: convertInchesToTwip(0.05),
            },
            children: rightColumnChildren,
          }),
        ],
      }),
    ],
  });

  // Top Header Banner
  const headerParagraphs = [
    new Paragraph({
      alignment: AlignmentType.LEFT,
      spacing: { before: 0, after: 60 },
      children: [
        new TextRun({
          text: cv.fullName,
          bold: true,
          size: 36, // 18pt
          color: primaryNavy,
          font: 'Arial',
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.LEFT,
      spacing: { before: 0, after: 60 },
      children: [
        new TextRun({
          text: cv.title,
          bold: true,
          size: 24, // 12pt
          color: accentBlue,
          font: 'Arial',
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.LEFT,
      spacing: { before: 0, after: 100 },
      children: [
        new TextRun({
          text: cv.tags.join('  |  '),
          size: 18,
          bold: true,
          color: darkSlate,
          font: 'Arial',
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.LEFT,
      spacing: { before: 0, after: 60 },
      children: [
        new TextRun({
          text: `📍 ${cv.contact.location.replace('\n', ', ')}   •   📞 ${cv.contact.phone}   •   ✉️ ${cv.contact.email}`,
          size: 17,
          color: bodyMuted,
          font: 'Arial',
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.LEFT,
      spacing: { before: 0, after: 60 },
      children: [
        new TextRun({
          text: `LinkedIn: ${cv.contact.linkedin || ''}   •   GitHub: ${cv.contact.github || ''}   •   Kaggle: ${cv.contact.kaggle || ''}`,
          size: 15,
          color: accentBlue,
          font: 'Arial',
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.LEFT,
      spacing: { before: 0, after: 180 },
      children: [
        new TextRun({
          text: `🌐 Langues: ${cv.contact.languagesSummary}`,
          size: 17,
          color: bodyMuted,
          font: 'Arial',
        }),
        new TextRun({
          text: `     —  "${cv.bannerQuote}"`,
          italics: true,
          size: 17,
          color: accentBlue,
          font: 'Arial',
        }),
      ],
    }),
  ];

  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: convertInchesToTwip(0.4),
              bottom: convertInchesToTwip(0.4),
              left: convertInchesToTwip(0.4),
              right: convertInchesToTwip(0.4),
            },
          },
        },
        children: [...headerParagraphs, twoColumnTable],
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, `CV_${cv.fullName.replace(/\s+/g, '_')}.docx`);
}

/**
 * Alternative export: Word HTML document (.doc)
 * Preserves exact HTML formatting, colored badges, inline SVG and tables when opened in Microsoft Word!
 */
export function exportToHtmlWord(elementId: string, filename: string = 'CV_Iragi_Mihigo_Roland.doc') {
  const el = document.getElementById(elementId);
  if (!el) return;

  const htmlContent = `
    <!DOCTYPE html>
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head>
      <meta charset="utf-8">
      <title>Curriculum Vitae</title>
      <style>
        @page {
          size: A4 portrait;
          margin: 10mm;
        }
        body {
          font-family: Arial, sans-serif;
          color: #1e293b;
          background: #ffffff;
          line-height: 1.4;
        }
      </style>
    </head>
    <body>
      ${el.innerHTML}
    </body>
    </html>
  `;

  const blob = new Blob(['\ufeff', htmlContent], {
    type: 'application/msword;charset=utf-8',
  });
  saveAs(blob, filename);
}
