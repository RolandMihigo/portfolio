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
  UnderlineType,
  ExternalHyperlink,
  convertInchesToTwip,
} from 'docx';
import { saveAs } from 'file-saver';
import { CVData } from '../types/cv';
import { createLogoImageRun } from './docxLogos';

export async function exportToDocx(cv: CVData) {
  const primaryNavy = '0F3B6C';
  const accentBlue = '0284C7';
  const darkSlate = '1E293B';
  const bodyMuted = '475569';
  const borderColor = 'CBD5E1';

  // Helper for section headings
  const createSectionHeading = (title: string) => {
    return new Paragraph({
      spacing: { before: 200, after: 100 },
      border: {
        bottom: {
          color: primaryNavy,
          space: 4,
          style: BorderStyle.SINGLE,
          size: 14,
        },
      },
      children: [
        new TextRun({
          text: title.toUpperCase(),
          bold: true,
          size: 20, // 10pt
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
      spacing: { after: 160 },
      children: [
        new TextRun({
          text: cv.profile,
          size: 17, // 8.5pt
          color: darkSlate,
          font: 'Arial',
        }),
      ],
    }),

    createSectionHeading('Compétences Techniques'),
    ...cv.skillCategories.flatMap((cat) => [
      new Paragraph({
        spacing: { before: 90, after: 30 },
        children: [
          new TextRun({
            text: `▸ ${cat.title}`,
            bold: true,
            size: 18,
            color: primaryNavy,
            font: 'Arial',
          }),
        ],
      }),
      ...cat.skills.map(
        (skill) =>
          new Paragraph({
            bullet: { level: 0 },
            spacing: { before: 15, after: 15 },
            children: [
              new TextRun({
                text: skill,
                size: 16,
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
          spacing: { before: 30, after: 30 },
          children: [
            new TextRun({
              text: `[${lang.code}]  ${lang.name}: `,
              bold: true,
              size: 17,
              color: primaryNavy,
              font: 'Arial',
            }),
            new TextRun({
              text: lang.level,
              italics: true,
              size: 16,
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
          spacing: { before: 20, after: 20 },
          children: [
            new TextRun({
              text: interest.title,
              bold: true,
              size: 17,
              color: darkSlate,
              font: 'Arial',
            }),
            ...(interest.subtitle
              ? [
                  new TextRun({
                    text: ` ${interest.subtitle}`,
                    italics: true,
                    size: 15,
                    color: bodyMuted,
                    font: 'Arial',
                  }),
                ]
              : []),
          ],
        })
    ),
  ];

  // Prepare Experience Rows with Company Logos
  const experienceParagraphs: Paragraph[] = [];
  for (const exp of cv.experiences) {
    const expLogo = await createLogoImageRun(exp.logoType, 16);
    experienceParagraphs.push(
      new Paragraph({
        spacing: { before: 120, after: 30 },
        children: [
          ...(expLogo ? [expLogo, new TextRun({ text: '  ' })] : []),
          new TextRun({
            text: exp.company,
            bold: true,
            size: 19,
            color: primaryNavy,
            font: 'Arial',
          }),
          ...(exp.companyType
            ? [
                new TextRun({
                  text: ` (${exp.companyType})`,
                  italics: true,
                  size: 16,
                  color: bodyMuted,
                  font: 'Arial',
                }),
              ]
            : []),
          new TextRun({
            text: `  |  ${exp.period}`,
            bold: true,
            size: 17,
            color: accentBlue,
            font: 'Arial',
          }),
        ],
      }),
      new Paragraph({
        spacing: { before: 10, after: 50 },
        children: [
          new TextRun({
            text: exp.role,
            bold: true,
            size: 17,
            color: darkSlate,
            font: 'Arial',
          }),
          ...(exp.location
            ? [
                new TextRun({
                  text: ` — ${exp.location}`,
                  italics: true,
                  size: 16,
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
            spacing: { before: 15, after: 25 },
            children: [
              new TextRun({
                text: bullet,
                size: 16,
                color: bodyMuted,
                font: 'Arial',
              }),
            ],
          })
      )
    );
  }

  // Prepare Education Rows with University Logo
  const educationParagraphs: Paragraph[] = [];
  for (const edu of cv.education) {
    const eduLogo = await createLogoImageRun(edu.logoType, 16);
    educationParagraphs.push(
      new Paragraph({
        spacing: { before: 70, after: 30 },
        children: [
          ...(eduLogo ? [eduLogo, new TextRun({ text: '  ' })] : []),
          new TextRun({
            text: edu.institution,
            bold: true,
            size: 18,
            color: primaryNavy,
            font: 'Arial',
          }),
          new TextRun({
            text: ` (${edu.location})  |  ${edu.year}`,
            bold: true,
            size: 16,
            color: accentBlue,
            font: 'Arial',
          }),
        ],
      }),
      new Paragraph({
        spacing: { before: 10, after: 50 },
        children: [
          new TextRun({
            text: edu.degree,
            size: 17,
            color: darkSlate,
            font: 'Arial',
          }),
        ],
      })
    );
  }

  // Prepare Certification Rows with Provider Logo & Clickable Link
  const certificationParagraphs: Paragraph[] = [];
  for (const cert of cv.certifications) {
    const certLogo = await createLogoImageRun(cert.logoType, 16);
    certificationParagraphs.push(
      new Paragraph({
        spacing: { before: 45, after: 45 },
        children: [
          ...(certLogo
            ? [certLogo, new TextRun({ text: '  ' })]
            : [new TextRun({ text: '• ', bold: true, color: primaryNavy })]),
          new TextRun({
            text: cert.title,
            bold: true,
            size: 17,
            color: darkSlate,
            font: 'Arial',
          }),
          new TextRun({
            text: ` — ${cert.provider} (${cert.platform})`,
            size: 16,
            color: bodyMuted,
            font: 'Arial',
          }),
          ...(cert.linkUrl && cert.linkUrl !== '#'
            ? [
                new TextRun({ text: '   ' }),
                new ExternalHyperlink({
                  children: [
                    new TextRun({
                      text: '[Vérifier le certificat ↗]',
                      bold: true,
                      size: 15,
                      color: accentBlue,
                      underline: { type: UnderlineType.SINGLE },
                      font: 'Arial',
                    }),
                  ],
                  link: cert.linkUrl,
                }),
              ]
            : cert.note
            ? [
                new TextRun({
                  text: `  [${cert.note}]`,
                  italics: true,
                  size: 14,
                  color: '64748B',
                  font: 'Arial',
                }),
              ]
            : []),
        ],
      })
    );
  }

  // Prepare Portfolio Project Rows with Tableau and Kaggle Logos & Links
  const projectParagraphs: Paragraph[] = [];
  if (cv.projects && cv.projects.length > 0) {
    for (const proj of cv.projects) {
      const kaggleIcon = await createLogoImageRun('kaggle', 14);
      const tableauIcon = await createLogoImageRun('tableau', 14);

      projectParagraphs.push(
        new Paragraph({
          spacing: { before: 80, after: 30 },
          children: [
            new TextRun({
              text: proj.title,
              bold: true,
              size: 18,
              color: primaryNavy,
              font: 'Arial',
            }),
            new TextRun({
              text: `  |  ${proj.subtitle}`,
              italics: true,
              size: 16,
              color: accentBlue,
              font: 'Arial',
            }),
          ],
        }),
        new Paragraph({
          spacing: { before: 20, after: 30 },
          children: [
            new TextRun({
              text: proj.introduction,
              size: 16,
              color: darkSlate,
              font: 'Arial',
            }),
          ],
        }),
        new Paragraph({
          spacing: { before: 20, after: 60 },
          children: [
            ...(kaggleIcon ? [kaggleIcon, new TextRun({ text: ' ' })] : []),
            new ExternalHyperlink({
              children: [
                new TextRun({
                  text: 'Étude Kaggle & SQL BigQuery ↗',
                  bold: true,
                  size: 15,
                  color: accentBlue,
                  underline: { type: UnderlineType.SINGLE },
                  font: 'Arial',
                }),
              ],
              link: proj.kaggleUrl,
            }),
            new TextRun({ text: '    •    ' }),
            ...(tableauIcon ? [tableauIcon, new TextRun({ text: ' ' })] : []),
            new ExternalHyperlink({
              children: [
                new TextRun({
                  text: 'Dashboard Tableau Public ↗',
                  bold: true,
                  size: 15,
                  color: 'E8762D',
                  underline: { type: UnderlineType.SINGLE },
                  font: 'Arial',
                }),
              ],
              link: proj.tableauUrl,
            }),
          ],
        })
      );
    }
  }

  // Build Right Column Paragraphs
  const rightColumnChildren: Paragraph[] = [
    createSectionHeading('Expérience Professionnelle'),
    ...experienceParagraphs,

    createSectionHeading('Formation Académique'),
    ...educationParagraphs,

    createSectionHeading('Certifications Professionnelles'),
    ...certificationParagraphs,

    ...(cv.projects && cv.projects.length > 0
      ? [createSectionHeading('Projet Data / Portfolio Analytique'), ...projectParagraphs]
      : []),

    createSectionHeading('Références Professionnelles'),
    ...cv.references.flatMap((ref) => [
      new Paragraph({
        spacing: { before: 60, after: 15 },
        children: [
          new TextRun({
            text: `👤 ${ref.name}`,
            bold: true,
            size: 17,
            color: primaryNavy,
            font: 'Arial',
          }),
          new TextRun({
            text: ` — ${ref.role}`,
            italics: true,
            size: 15,
            color: darkSlate,
            font: 'Arial',
          }),
        ],
      }),
      new Paragraph({
        spacing: { before: 0, after: 45 },
        children: [
          new TextRun({
            text: `✉️ ${ref.email}   |   📞 ${ref.phone}`,
            size: 15,
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
              top: convertInchesToTwip(0.08),
              bottom: convertInchesToTwip(0.08),
              left: convertInchesToTwip(0.04),
              right: convertInchesToTwip(0.12),
            },
            children: leftColumnChildren,
          }),
          new TableCell({
            width: {
              size: 62,
              type: WidthType.PERCENTAGE,
            },
            margins: {
              top: convertInchesToTwip(0.08),
              bottom: convertInchesToTwip(0.08),
              left: convertInchesToTwip(0.12),
              right: convertInchesToTwip(0.04),
            },
            children: rightColumnChildren,
          }),
        ],
      }),
    ],
  });

  // Load Social Header Icons
  const linkedinIcon = await createLogoImageRun('linkedin', 13);
  const githubIcon = await createLogoImageRun('github', 13);
  const kaggleIcon = await createLogoImageRun('kaggle', 13);

  // Top Header Banner with Interactive Links and Icons
  const headerParagraphs = [
    new Paragraph({
      alignment: AlignmentType.LEFT,
      spacing: { before: 0, after: 50 },
      children: [
        new TextRun({
          text: cv.fullName,
          bold: true,
          size: 34, // 17pt
          color: primaryNavy,
          font: 'Arial',
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.LEFT,
      spacing: { before: 0, after: 50 },
      children: [
        new TextRun({
          text: cv.title,
          bold: true,
          size: 22, // 11pt
          color: accentBlue,
          font: 'Arial',
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.LEFT,
      spacing: { before: 0, after: 80 },
      children: [
        new TextRun({
          text: cv.tags.join('  •  '),
          size: 17,
          bold: true,
          color: darkSlate,
          font: 'Arial',
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.LEFT,
      spacing: { before: 0, after: 50 },
      children: [
        new TextRun({
          text: `📍 ${cv.contact.location.replace('\n', ', ')}   •   📞 ${cv.contact.phone}   •   ✉️ ${cv.contact.email}`,
          size: 16,
          color: bodyMuted,
          font: 'Arial',
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.LEFT,
      spacing: { before: 0, after: 50 },
      children: [
        ...(linkedinIcon ? [linkedinIcon, new TextRun({ text: ' ' })] : []),
        new ExternalHyperlink({
          children: [
            new TextRun({
              text: 'LinkedIn (roland-iragi)',
              bold: true,
              color: '0077B5',
              underline: { type: UnderlineType.SINGLE },
              size: 15,
              font: 'Arial',
            }),
          ],
          link: cv.contact.linkedin || '#',
        }),
        new TextRun({ text: '    •    ' }),
        ...(githubIcon ? [githubIcon, new TextRun({ text: ' ' })] : []),
        new ExternalHyperlink({
          children: [
            new TextRun({
              text: 'GitHub (RolandMihigo)',
              bold: true,
              color: '24292E',
              underline: { type: UnderlineType.SINGLE },
              size: 15,
              font: 'Arial',
            }),
          ],
          link: cv.contact.github || '#',
        }),
        new TextRun({ text: '    •    ' }),
        ...(kaggleIcon ? [kaggleIcon, new TextRun({ text: ' ' })] : []),
        new ExternalHyperlink({
          children: [
            new TextRun({
              text: 'Kaggle (rolandiragi)',
              bold: true,
              color: '20BEFF',
              underline: { type: UnderlineType.SINGLE },
              size: 15,
              font: 'Arial',
            }),
          ],
          link: cv.contact.kaggle || '#',
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.LEFT,
      spacing: { before: 0, after: 150 },
      children: [
        new TextRun({
          text: `🌐 ${cv.contact.languagesSummary}`,
          size: 16,
          color: bodyMuted,
          font: 'Arial',
        }),
        new TextRun({
          text: `    —  "${cv.bannerQuote}"`,
          italics: true,
          size: 16,
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
              top: convertInchesToTwip(0.35),
              bottom: convertInchesToTwip(0.35),
              left: convertInchesToTwip(0.35),
              right: convertInchesToTwip(0.35),
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
 * Preserves exact HTML formatting, inline SVG logos and colored styling when opened in Microsoft Word!
 */
export function exportToHtmlWord(elementId: string, filename = 'CV_Iragi_Mihigo_Roland.doc') {
  const el = document.getElementById(elementId);
  if (!el) return;

  const htmlContent = `
    <!DOCTYPE html>
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head>
      <meta charset="utf-8">
      <title>Curriculum Vitae - Iragi Mihigo Roland</title>
      <style>
        @page {
          size: A4 portrait;
          margin: 8mm;
        }
        body {
          font-family: Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: #1e293b;
          background: #ffffff;
          line-height: 1.35;
          font-size: 12px;
        }
        a {
          color: #0284c7;
          text-decoration: underline;
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
