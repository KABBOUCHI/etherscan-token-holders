import axios from "axios";
import { JSDOM } from "jsdom";
import HtmlTableToJson from "html-table-to-json"

const token = '0xB8c77482e45F1F44dE1745F52C74426C631bDD52'

const { data } = await axios.get(`https://etherscan.io/token/generic-tokenholders2`, {
    params: {
        a: token
    }
})

const { window: { document } } = new JSDOM(data);

const table = document.querySelector('table')!;

console.log(HtmlTableToJson.parse(table.outerHTML).results[0])