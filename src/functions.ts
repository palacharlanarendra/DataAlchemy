import xlsx from "xlsx";
import { Base64ToJSONProps } from "./types";

export interface Row {
  [key: string]: string;
}

export function base64ToJSON({
  base64CsvData,
  type,
}: Base64ToJSONProps): Row[] {
  const base64String = base64CsvData;
  const decodedData = Buffer.from(base64String, "base64");

  switch (type) {
    case "xlsx":
      const workbook = xlsx.read(decodedData, { type: "buffer" });
      return (
        xlsx.utils.sheet_to_json(
          workbook?.Sheets?.[workbook?.SheetNames?.[0]]
        ) || []
      );

    case "csv":
      const binaryData = atob(base64String);
      const csvString = binaryData;
      const [headerLine, ...dataLines] = csvString.split("\n");
      const headers = headerLine
        .split(",")
        .map((header) => header.replace(/"/g, "").trim());
      const jsonData: Row[] = dataLines.map((line) => {
        const row = line
          .split(",")
          .map((item) => item.replace(/"/g, "").trim());
        return headers.reduce((obj, header, index) => {
          obj[header] = row[index];
          return obj;
        }, {} as Row);
      });
      return jsonData;

    default:
      return [];
  }
}
