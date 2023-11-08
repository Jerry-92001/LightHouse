import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import {test} from '@playwright/test'

const csv_records = parse(fs.readFileSync(path.join('D:/Meta and Description/data.csv')), {
    columns: true,
    skip_empty_lines: true
});

for (const csv_record of csv_records) {

    test(`check csv data  ${csv_record.first_name}`, async () => {

        console.log("first_name:" + csv_record.first_name);
        console.log("last_name:" + csv_record.last_name);

    });
}