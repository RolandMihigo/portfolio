import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  Table,
  TableRow,
  TableCell,
  WidthType,
  BorderStyle,
  AlignmentType,
} from 'docx';
import { CVData } from '../types/cv';

export async function generateDocxBlob(cvData: CVData): Promise<Blob> {
  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 720, // 0.5 inch
              right: 720,
              bottom: 720,
              left: 720,
            },
          },
        },
        children: [
          // Header: Full Name
          new Paragraph({
            text: cvData.fullName,
            heading: HeadingLevel.TITLE,
            alignment: AlignmentType.LEFT,
            spacing: { after: 100 },
            style: 'Title',
            children: [
              new TextRun({
                text: cvData.fullName,
                bold: true,
                size: 36, // 18pt
                color: '0F3E6D',
                font: 'Calibri',
              }),
            ],
          }),

          // Subtitle / Title
          new Paragraph({
            spacing: { after: 120 },
            children: [
              new TextRun({
                text: cvData.title,
                bold: true,
                size: 24, // 12pt
                color: '1E293B',
                font: 'Calibri',
              }),
            ],
          }),

          // Tags
          new Paragraph({
            spacing: { after: 140 },
            children: [
              new TextRun({
                text: cvData.tags.join('  |  '),
                bold: true,
                size: 19, // 9.5pt
                color: '0284C7',
                font: 'Calibri',
              }),
            ],
          }),

          // Contact line
          new Paragraph({
            spacing: { after: 200 },
            children: [
              new TextRun({
                text: `📍 ${cvData.contact.location.replace('\n', ', ')}   |   📞 ${cvData.contact.phone}   |   ✉️ ${cvData.contact.email}`,
                size: 18,
                color: '475569',
                font: 'Calibri',
              }),
            ],
          }),

          // Languages summary
          new Paragraph({
            spacing: { after: 240 },
            children: [
              new TextRun({
                text: `🌐 Langues : ${cvData.contact.languagesSummary}`,
                size: 18,
                italics: true,
                color: '334155',
                font: 'Calibri',
              }),
            ],
          }),

          // Quote Banner
          new Paragraph({
            spacing: { after: 300 },
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: `« ${cvData.bannerQuote} »`,
                italics: true,
                bold: true,
                size: 20,
                color: '0F3E6D',
                font: 'Georgia',
              }),
            ],
          }),

          // 2-Column Table for Profile & Experience
          new Table({
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
              insideVertical: { style: BorderStyle.NONE },
            },
            rows: [
              new TableRow({
                children: [
                  // Left Column: Profil, Compétences, Langues, Intérêts (38%)
                  new TableCell({
                    width: {
                      size: 38,
                      type: WidthType.PERCENTAGE,
                    },
                    children: [
                      // Section Header: PROFIL PROFESSIONNEL
                      new Paragraph({
                        spacing: { before: 100, after: 100 },
                        children: [
                          new TextRun({
                            text: 'PROFIL PROFESSIONNEL',
                            bold: true,
                            size: 22,
                            color: '0F3E6D',
                            font: 'Calibri',
                          }),
                        ],
                      }),
                      new Paragraph({
                        spacing: { after: 200 },
                        children: [
                          new TextRun({
                            text: cvData.profile,
                            size: 17,
                            color: '1E293B',
                            font: 'Calibri',
                          }),
                        ],
                      }),

                      // Section Header: COMPÉTENCES TECHNIQUES
                      new Paragraph({
                        spacing: { before: 140, after: 100 },
                        children: [
                          new TextRun({
                            text: 'COMPÉTENCES TECHNIQUES',
                            bold: true,
                            size: 22,
                            color: '0F3E6D',
                            font: 'Calibri',
                          }),
                        ],
                      }),
                      ...cvData.skillCategories.flatMap((cat) => [
                        new Paragraph({
                          spacing: { before: 80, after: 40 },
                          children: [
                            new TextRun({
                              text: `• ${cat.title}`,
                              bold: true,
                              size: 18,
                              color: '0F3E6D',
                              font: 'Calibri',
                            }),
                          ],
                        }),
                        ...cat.skills.map(
                          (sk) =>
                            new Paragraph({
                              spacing: { after: 20 },
                              indent: { left: 240 },
                              children: [
                                new TextRun({
                                  text: `- ${sk}`,
                                  size: 16,
                                  color: '334155',
                                  font: 'Calibri',
                                }),
                              ],
                            })
                        ),
                      ]),

                      // Section Header: LANGUES
                      new Paragraph({
                        spacing: { before: 200, after: 100 },
                        children: [
                          new TextRun({
                            text: 'LANGUES',
                            bold: true,
                            size: 22,
                            color: '0F3E6D',
                            font: 'Calibri',
                          }),
                        ],
                      }),
                      ...cvData.languages.map(
                        (lang) =>
                          new Paragraph({
                            spacing: { after: 40 },
                            children: [
                              new TextRun({
                                text: `[${lang.code}] ${lang.name} : `,
                                bold: true,
                                size: 17,
                                color: '0F3E6D',
                                font: 'Calibri',
                              }),
                              new TextRun({
                                text: lang.level,
                                size: 17,
                                color: '475569',
                                font: 'Calibri',
                              }),
                            ],
                          })
                      ),

                      // Section Header: CENTRES D'INTÉRÊT
                      new Paragraph({
                        spacing: { before: 180, after: 80 },
                        children: [
                          new TextRun({
                            text: "CENTRES D'INTÉRÊT",
                            bold: true,
                            size: 22,
                            color: '0F3E6D',
                            font: 'Calibri',
                          }),
                        ],
                      }),
                      ...cvData.interests.map(
                        (item) =>
                          new Paragraph({
                            spacing: { after: 40 },
                            children: [
                              new TextRun({
                                text: `• ${item.title} `,
                                bold: true,
                                size: 17,
                                color: '1E293B',
                                font: 'Calibri',
                              }),
                              new TextRun({
                                text: item.subtitle || '',
                                size: 15,
                                color: '64748B',
                                font: 'Calibri',
                              }),
                            ],
                          })
                      ),
                    ],
                  }),

                  // Right Column: Expériences, Formation, Certifications, Références (62%)
                  new TableCell({
                    width: {
                      size: 62,
                      type: WidthType.PERCENTAGE,
                    },
                    children: [
                      // Section Header: EXPÉRIENCE PROFESSIONNELLE
                      new Paragraph({
                        spacing: { before: 100, after: 120 },
                        children: [
                          new TextRun({
                            text: 'EXPÉRIENCE PROFESSIONNELLE',
                            bold: true,
                            size: 24,
                            color: '0F3E6D',
                            font: 'Calibri',
                          }),
                        ],
                      }),
                      ...cvData.experiences.flatMap((exp) => [
                        new Paragraph({
                          spacing: { before: 120, after: 40 },
                          children: [
                            new TextRun({
                              text: `${exp.period}  |  ${exp.company}`,
                              bold: true,
                              size: 19,
                              color: '0F3E6D',
                              font: 'Calibri',
                            }),
                            new TextRun({
                              text: exp.companyType ? ` (${exp.companyType})` : '',
                              size: 16,
                              color: '64748B',
                              font: 'Calibri',
                            }),
                          ],
                        }),
                        new Paragraph({
                          spacing: { after: 60 },
                          children: [
                            new TextRun({
                              text: exp.role,
                              bold: true,
                              size: 17,
                              color: '1E293B',
                              font: 'Calibri',
                            }),
                            new TextRun({
                              text: exp.location ? ` — ${exp.location}` : '',
                              size: 16,
                              color: '64748B',
                              font: 'Calibri',
                            }),
                          ],
                        }),
                        ...exp.bullets.map(
                          (bullet) =>
                            new Paragraph({
                              spacing: { after: 30 },
                              indent: { left: 240 },
                              children: [
                                new TextRun({
                                  text: `• ${bullet}`,
                                  size: 16,
                                  color: '334155',
                                  font: 'Calibri',
                                }),
                              ],
                            })
                        ),
                      ]),

                      // Section Header: FORMATION
                      new Paragraph({
                        spacing: { before: 200, after: 100 },
                        children: [
                          new TextRun({
                            text: 'FORMATION',
                            bold: true,
                            size: 24,
                            color: '0F3E6D',
                            font: 'Calibri',
                          }),
                        ],
                      }),
                      ...cvData.education.flatMap((edu) => [
                        new Paragraph({
                          spacing: { after: 30 },
                          children: [
                            new TextRun({
                              text: `${edu.year}  |  ${edu.institution}, ${edu.location}`,
                              bold: true,
                              size: 18,
                              color: '0F3E6D',
                              font: 'Calibri',
                            }),
                          ],
                        }),
                        new Paragraph({
                          spacing: { after: 120 },
                          children: [
                            new TextRun({
                              text: edu.degree,
                              size: 17,
                              color: '1E293B',
                              font: 'Calibri',
                            }),
                          ],
                        }),
                      ]),

                      // Section Header: CERTIFICATIONS
                      new Paragraph({
                        spacing: { before: 180, after: 100 },
                        children: [
                          new TextRun({
                            text: 'CERTIFICATIONS',
                            bold: true,
                            size: 24,
                            color: '0F3E6D',
                            font: 'Calibri',
                          }),
                        ],
                      }),
                      ...cvData.certifications.map(
                        (cert) =>
                          new Paragraph({
                            spacing: { after: 40 },
                            children: [
                              new TextRun({
                                text: `• ${cert.title}`,
                                bold: true,
                                size: 17,
                                color: '0F3E6D',
                                font: 'Calibri',
                              }),
                              new TextRun({
                                text: ` — ${cert.provider} (${cert.platform})`,
                                size: 16,
                                color: '475569',
                                font: 'Calibri',
                              }),
                            ],
                          })
                      ),

                      // Section Header: PERSONNES DE RÉFÉRENCE
                      new Paragraph({
                        spacing: { before: 220, after: 100 },
                        children: [
                          new TextRun({
                            text: 'PERSONNES DE RÉFÉRENCE',
                            bold: true,
                            size: 24,
                            color: '0F3E6D',
                            font: 'Calibri',
                          }),
                        ],
                      }),
                      ...cvData.references.map(
                        (ref) =>
                          new Paragraph({
                            spacing: { after: 40 },
                            children: [
                              new TextRun({
                                text: `• ${ref.name}`,
                                bold: true,
                                size: 17,
                                color: '0F3E6D',
                                font: 'Calibri',
                              }),
                              new TextRun({
                                text: ` — ${ref.role}, ${ref.company}\n   ${ref.email} | ${ref.phone}`,
                                size: 15,
                                color: '475569',
                                font: 'Calibri',
                              }),
                            ],
                          })
                      ),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      },
    ],
  });

  return await Packer.toBlob(doc);
}

export async function downloadDocx(cvData: CVData, filename = 'CV_Iragi_Mihigo_Roland.docx'): Promise<void> {
  const blob = await generateDocxBlob(cvData);
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
