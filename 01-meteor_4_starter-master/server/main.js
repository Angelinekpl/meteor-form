import { Meteor } from 'meteor/meteor'

import students from "../imports/db/students";


Meteor.startup(() => {
  if( students.find().count() <= 0 )
  {
    students.insert(
      {
        firstname : "Angéline",
        lastname : "Kapala",
        github : "Angelinekpl"
      }
    );
  }
});
