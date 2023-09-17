const { google } = require('googleapis');
const serviceAccount = require('../../auth.json');

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

// Configure o JWT
const jwt = new google.auth.JWT(
  serviceAccount.client_email,
  null,
  serviceAccount.private_key,
  SCOPES,
  null
);

const sheets = google.sheets({ version: 'v4', auth: jwt });

export async function appendToSheet(spreadsheetId: any, range: any, values: any) {
  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values: [values]  // O Google Sheets espera uma matriz de matrizes para os valores.
      }
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao adicionar ao Google Sheets:", error);
    throw error;
  }
}