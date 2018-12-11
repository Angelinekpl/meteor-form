import { Mongo }  from "meteor/mongo";
const playlist = new Mongo.Collection( "playlist" );

export default playlist;