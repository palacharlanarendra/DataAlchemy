# Data Alchemy: Transform Your Data with Ease

Welcome to Data Alchemy, a powerful npm package designed to streamline the process of converting base64-encoded CSV or XLSX file data into JSON format. With Data Alchemy, you can effortlessly transform your data for a wide range of applications, from data analysis to visualization.

## Introduction

Data Alchemy is built to simplify the conversion of base64-encoded CSV or XLSX file data into JSON format. Whether you're working with CSV files from spreadsheets or XLSX files from Excel, Data Alchemy provides an intuitive solution to handle your data transformation needs.

## Installation

To use Data Alchemy in your project, simply install it via npm:

```bash
npm i dataalchemy
```

## Usage

Using Data Alchemy is straightforward. Import the package into your project and call the `base64ToJSON` function with the appropriate parameters.

Here's how you can use Data Alchemy to convert base64-encoded CSV or XLSX file data to JSON:

```javascript
const { base64ToJSON } = require('data-Alchemy');

// Example base64-encoded CSV data
const base64CsvData = "UEsDBBQACAgIAMNjEEsAAAAAAAAAAAAAAAALAAAAX3JlbHMvLnJlbHOtks9KAzEQh+99ipB7d7YVRGSzvYjQm0h9gJjM/mE3mTAZdX17gwhaqaUHj0l+8803Q5rdEmb1ipxHikZvqlorjI78GHujnw736xu9a1fNI85WSiQPY8qq1MRs9CCSbgGyGzDYXFHCWF464mClHLmHZN1ke4RtXV8D/2To9oip9t5o3vuNVof3hJewqetGh3fkXgJGOdHiV6KQLfcoRi8zvBFPz0RTVaAaTrtsL3f5e04IKNZbseCIcZ24VLOMmL91PLmHcp0/E+eErv5zObgIRo/+vJJN6cto1cDRJ2g/AFBLBwhmqoK34AAAADsCAABQSwMEFAAICAgAw2MQSwAAAAAAAAAAAAAAABAAAABkb2NQcm9wcy9hcHAueG1snc8/C8IwEAXw3U9RsttU8U+RtC7i7FDdQ3K1geauJGdpv70Rwe6O7x78uKfOk++zEUJ0hJXY5IXIAA1Zh89K3JvruhRZZI1W94RQiRmiONcrdQs0QGAHMUsCxkp0zMNJymg68DrmqcbUtBS85hTDU1LbOgMXMi8PyHJbFAcJEwNasOvhB4qveBr5X9SS+fwXH808JK9WDbHuG+ehLnf74qjkclBymVK/AVBLBwgh3toQqQAAAA8BAABQSwMEFAAICAgAw2MQSwAAAAAAAAAAAAAAABEAAABkb2NQcm9wcy9jb3JlLnhtbI2STW/CMAyG7/sVVe5t+gEDRW04bOK0SZMAbdotSk2J1qRREij8+yUdFDZx2NHx6+d1bJeLo2yjAxgrOlWhLElRBIp3tVBNhTbrZTxHkXVM1aztFFToBBYt6EPJNeGdgTfTaTBOgI08SFnCdYV2zmmCseU7kMwmXqF8ctsZyZwPTYM141+sAZyn6SOW4FjNHMMBGOuRiM7Imo9IvTftAKg5hhYkKGdxlmT4qnVgpL1bMGRulFK4k4a70ktyVB+tGIV93yd9MUh9/xn+eH1ZDV+NhQqj4oBoeW6EcAPMQR15APmxu2Tei6fn9RLRPM1mcTqP02KdZWSakqL4LPGf+gAkLVPN3o+Ngoo3q6C5Po2G0u9uK/7nOAmO+YxMbx0vABp2bOAgwmnQSYlv";

// Convert CSV to JSON
const jsonData = base64ToJSON({ base64CsvData, type: "csv" });
```

Replace `base64CsvData` with your base64-encoded CSV data. Make sure to specify the correct `type` ("csv" or "xlsx") based on your data format.

That's it! You've successfully transformed your base64-encoded CSV or XLSX file data into JSON using Data Alchemy. Enjoy exploring your transformed data!