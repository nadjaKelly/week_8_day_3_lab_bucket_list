use bucketList;
db.dropDatabase();

db.goals.insertMany([
  {
    name: "Bungee Jumping",
    location: "New Zealand",
    byAge: 30
  },
  {
    name: "Own a swimming pool",
    location: "Scotland",
    byAge: 50

  },
  {
    name: "Learn Mandarin",
    location: "China",
    byAge: 20
  }
]);
