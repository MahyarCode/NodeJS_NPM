"use strict";
// //TODO Synchronously structured: 'readFileSync' & 'writeFileSync'
// // TODO Get the data from a text file
// const fs = require("fs");

// const textIn = fs.readFileSync("./txt/input.txt", "utf-8"); //DESC utf-8 for files that only contain English words
// console.log(textIn); // NOTE the above line will get the text from that specific file

// // TODO Creating an output file
// const textOut = `This is the output file ${textIn}.\nCreated on ${new Date(
// 	Date.now()
// )}`;
// fs.writeFileSync("./txt/output.txt", textOut);

// //TODO Asynchronously structured: 'readFile' & 'writeFile'
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
// 	if (err) return console.log("Error!");
// 	console.log("data1", data1);
// 	fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
// 		console.log("data2", data2);

// 		fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
// 			console.log("data3", data3);

// 			fs.writeFile(
// 				"./txt/outPutFile.txt",
// 				`${data2}\n${data3}`,
// 				"utf-8",
// 				(err) => {
// 					console.log("End of Reading files.");
// 				}
// 			);
// 		});
// 	});
// });
// console.log("Starts Reading files ...");

//TODO Creating Simple Web Server:

const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
	const pathName = req.url;
	console.log(pathName);

	if (pathName === "/" || pathName === "/overview") {
		res.end("This is OVERVIEW");
	} else if (pathName === "template") {
		res.end("This is TEMPLATE");
	} else {
		res.writeHead(404, {
			"content-type": "text/html",
			"my-own-header": "Hello World",
		});
	}
	res.end("<h1>Page Not Found</h1>");
});

server.listen(8000, "127.0.0.1", () => {
	console.log("Listening to port 8000");
});
