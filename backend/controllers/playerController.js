// const { players } = require("../models");
// const db = require("../models");
// const { Sequelize, Op, Model, DataTypes } = require("sequelize");

// const Players = db.players;


// const Logindata = async (req, res) => {
//   console.log(req.body);
//   const playerdata = req.body.formData;
//   // const playerinputs = req.body.inputs;
//   try {
//     playerdata.address = playerinputs.address.formatted_address;
//     playerdata.lat = playerinputs.selectedLocation.lat;
//     playerdata.lng = playerinputs.selectedLocation.lng;
//   } catch (error) {
//     console.log("Error while getting address lat and lng");
//   }

//   try {
//     const newPlayer = await Players.create(playerdata);
//     console.log(playerdata);
//     res.status(201).json(newPlayer);
//   } catch (error) {
//     console.error("Error creating player:", error);
//     res.status(500).json({ message: "Error creating player" });
//   }
// };






// const MarkerTable = async (req, res) => {
//   // const playerId = req.params.id;
//   const playerData = await players.findAll(req.body.MarkerData);
//   // Send the retrieved data in the response
//   res.status(200).json(playerData);
// };

// // this is player dasboard API
// const getClubDashboard = async (req, res) => {
//   console.log("INSIDE API");
//   const dashboardPlayers = await players.findAll(req.body.clubData); // retrieve data from the database
//   console.log(dashboardPlayers); // log the retrieved data to the console
//   res.status(200).json(dashboardPlayers); // send the retrieved data in the response
// };

// // this is club Table API
// const getPlayrDashboard = async (req, res) => {
//   console.log("INSIDE API");
//   let id = req.params.id;
//   if (!id) res.status(200).json([]);
//   const getPlayrDashboard = await players.findAll({
//     where: { id: id },
//   }); // retrieve data from the database
//   console.log(getPlayrDashboard); // log the retrieved data to the console
//   res.status(200).json(getPlayrDashboard); // send the retrieved data in the response
// };




// // this is demo

// const registerPlayer = async (req, res) => {
//   console.log(req.body);
//   const playerdata = req.body.formData;
//   const playerinputs = req.body.inputs;
//   try {
//     playerdata.address = playerinputs.address.formatted_address;
//     playerdata.lat = playerinputs.selectedLocation.lat;
//     playerdata.lng = playerinputs.selectedLocation.lng;
//   } catch (error) {
//     console.log("Error while getting address lat and lng");
//   }

//   try {
//     const newPlayer = await Players.create(playerdata);
//     console.log(playerdata);
//     res.status(201).json(newPlayer);
//   } catch (error) {
//     console.error("Error creating player:", error);
//     res.status(500).json({ message: "Error creating player" });
//   }
// };

// // this is ClubregisterPlayer API
// const getClubregisterPlayer = async (req, res) => {
//   console.log(req.body);
//   const clubdata = req.body.clubData;
//   const playerinputs = req.body.inputs;
//   clubdata.address = playerinputs.address.formatted_address;
//   clubdata.lat = playerinputs.selectedLocation.lat;
//   clubdata.lng = playerinputs.selectedLocation.lng;
//   try {
//     const newclubPlayer = await Players.create(req.body.clubData);
//     console.log("Player created:", newclubPlayer);
//     res.status(201).json(newclubPlayer);
//   } catch (error) {
//     console.error("Error creating player:", error);
//     res.status(500).json({ message: "Error creating player" });
//   }
// };

// // this is club table API
// const getClubtable = async (req, res) => {
//   console.log(req.body);
//   const clubtable = Players.findAll(req.body.formData);
//   // const saved = await clubtable.save();
//   res.send(saved);
// };

// const getAllPlayers = async () => {};

// // find all data from databa
// // get register player API
// // const getformPlayer = async (req, res) => {
// //   console.log(req.body);
// //   let queryArray = [];

// //   if (req.body.lat) {
// //     queryArray.push({ lng: { [Op.like]: `%${req.body.lat}%` } });
// //   }
// //   if (req.body.lng) {
// //     queryArray.push({ lng: { [Op.like]: `%${req.body.lng}%` } });
// //   }
// // };

// const getFilteredPlayer = async (req, res) => {
//   console.log(req.body);
//   let queryArray = [];

//   if (req.body.sport) {
//     queryArray.push({ sport: { [Op.like]: `%${req.body.sport}%` } });
//   }
//   if (req.body.day) {
//     queryArray.push({ avail_day: { [Op.like]: `%${req.body.day}%` } });
//   }

//   const filterplayers = await Players.findAll({
//     where: {
//       [Op.and]: queryArray,
//     },
//   });
//   if (filterplayers) {
//     if (
//       !req.body.selectedLocation ||
//       !req.body.selectedLocation.lat ||
//       !req.body.selectedLocation.lng
//     ) {
//       res.json({ status: "Error", error: "Long and Lat are required" });
//       return;
//     }
//     locationPlayers = [];
//     locationLat = req.body.selectedLocation.lat;
//     locationLng = req.body.selectedLocation.lng;
//     filterplayers.forEach((player) => {
//       console.log(parseFloat(player.lat));
//       if (
//         parseFloat(player.lat) > locationLat - 0.5 &&
//         parseFloat(player.lat) < locationLat + 0.5
//       )
//         locationPlayers.push(player);
//     });
//     res.json({ status: "success", filteredPlayer: locationPlayers });
//   }
// };

// // find players data from chosing day
// const getFindplayer = async (req, res) => {
//   const fPlayers = await Players.findAll({});
//   console.log("All Players:", JSON.stringify(fPlayers, null, 2));
//   if (fPlayers) {
//     locationPlayers = [];
//     locationLat = 23.5;
//     locationLng = 77.5;
//     fPlayers.forEach((player) => {
//       console.log(parseFloat(player.lat));
//       if (
//         parseFloat(player.lat) > locationLat - 0.5 &&
//         parseFloat(player.lat) < locationLat + 0.5
//       )
//         locationPlayers.push(player);
//     });
//     res.json({ status: "success", fPlayers: locationPlayers });
//   }
// };

// // console.log(Players.avail_day);

// // find players data from choseing sport
// const getFindsport = async (req, res) => {
//   const SPlayers = await Players.findAll({
//     where: { sport: "cricket" },
//   });
//   console.log("All Players:", JSON.stringify(SPlayers, null, 2));
//   if (SPlayers) {
//     res.json({ status: "success", SPlayers: SPlayers });
//   }
// };

// // console.log(Players.sport);
// // find by location

// const getFindbyLocation = async (req, res) => {
//   const BylocationPlayers = await Players.findAll({
//     where: {
//       address: " ",
//     },
//   });
//   console.log("All Players:", JSON.stringify(BylocationPlayers, null, 2));
//   if (BylocationPlayers) {
//     res.json({ status: "success", BylocationPlayers: BylocationPlayers });
//   }
// };

// // console.log(Players.sport);

// // find players select by time frpm
// const getFindbyTimefrom = async (req, res) => {
//   const ByTimePlayers = await Players.findAll({
//     where: { _from: "center" },
//   });
//   console.log("All Players:", JSON.stringify(ByTimePlayers, null, 2));
//   if (ByTimePlayers) {
//     res.json({ status: "success", ByTimePlayers: ByTimePlayers });
//   }
// };

// // console.log(Players.sport);

// module.exports = {
//   registerPlayer,
//   getAllPlayers,
//   getFilteredPlayer,
//   getFindplayer,
//   getFindsport,
//   getFindbyLocation,
//   getFindbyTimefrom,
//   getClubregisterPlayer,
//   getClubtable,
//   getPlayrDashboard,
//   getClubDashboard,
//   MarkerTable,
//   Logindata,
//   // getformPlayer,
// };
