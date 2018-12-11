import { Template } from "meteor/templating";
import students from "../imports/db/students";


Template.form.events
(
    {
        "click #submit" : function( event, template )
        {
            playlist.insert
            (
                {
                    firstname : template.find( "#firstname" ).value,
                    lastname : template.find( "#lastname" ).value,
                    github : template.find( "#github" ).value



                }
            )
        }

    }
)
