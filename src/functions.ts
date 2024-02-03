import xlsx from "xlsx";
import { Base64ToJSONProps } from "./types";

export interface Row {
  [key: string]: string;
}

export function base64ToJSON({
  base64CsvData,
  type,
}: Base64ToJSONProps): Row[] {
  if (type === "xlsx") {
    const base64String = base64CsvData;
    const decodedData = Buffer.from(base64String, "base64");
    const workbook = xlsx.read(decodedData, { type: "buffer" });
    const jsonData: Row[] = xlsx.utils.sheet_to_json(
      workbook?.Sheets?.[workbook?.SheetNames?.[0]]
    );
    return jsonData;
  } else if (type === "csv") {
    const base64String = base64CsvData;
    const binaryData = atob(base64String);
    const csvString = binaryData;
    const rows = csvString.split("\n");
    const headers = rows[0]
      .split(",")
      .map((header) => header?.replaceAll('"', "")?.trim());

    const jsonData: Row[] = [];
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i].split(",");
      const obj: Row = {};
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = row[j]?.replaceAll('"', "").trim();
      }
      jsonData.push(obj);
    }
    return jsonData;
  }

  // Default return statement to handle cases where type is neither "xlsx" nor "csv"
  return [];
}
