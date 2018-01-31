/*
Copyright 2018 Joshua Duplisea
*/

let logResults = (response) => {
	let data = JSON.stringify(response);
	console.log(data);		
	document.getElementById("main").innerHTML = data.toString();
}
let blockExplorer = () => {
	fetch('http://localhost:3001/blocks', {
		method: 'get'
	})
	.then((res) => res.json())
	.then(function(res){
		logResults(res)
	})
	.catch(function(err) {
		console.log(`Error: ${err}`);
	});
}
let addPeer = () => {
	fetch("http://localhost:3001/addPeer",
	{
		headers: {
		  'Content-Type': 'application/json'
		},
		method: "POST",
		body: JSON.stringify({"peer" : "ws://localhost:6001"})
	})
	.then((res) => res.json())
	.then(function(res){
		logResults(res)
	})
	.catch(function(err) {
		console.log(`Error: ${err}`);
	});
}
let activePeers = () => {
	fetch('http://localhost:3001/peers', {
		method: 'get'
	})
	.then((res) => res.json())
	.then(function(res){
		logResults(res)
	})
	.catch(function(err) {
		console.log(`Error: ${err}`);
	});
}
let mineBlocks = () => {
	fetch("http://localhost:3001/mineBlock",
	{
		headers: {
		  'Content-Type': 'application/json'
		},
		method: "POST",
		body: JSON.stringify({"data" : "Data in blocks past Genesis block"})
	})
	.then((res) => res.json())
	.then(function(res){
		logResults(res)
	})
	.catch(function(err) {
		console.log(`Error: ${err}`);
	});
}
document.getElementById("block-explorer").addEventListener("click", blockExplorer);
document.getElementById("add-peer").addEventListener("click", addPeer);
document.getElementById("active-peers").addEventListener("click", activePeers);
document.getElementById("mine-blocks").addEventListener("click", mineBlocks);
