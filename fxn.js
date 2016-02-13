require ('qualifications');
require ('guacamole');

function findJrDev(qualifications, candidate) {
  candidate.extraInterests();
  if (qualifications.skills === candidate.skills && qualifications.qualities === candidate.qualities) {

    // var hungry = {
    //   metaphorically: true,
    //   physically: function() {
    //     if (guacamole.status === "eaten" && guacamole.eater === candidate) {
    //       return false;
    //     } else {
    //       return true;
    //     }
    //   }
    // }

    var jrDev = candidate;
    return jrDev;
    // , hungry;
  } 
}



var rebecca = {
  skills: ["Javascript", "CSS", "Rails", "Node"],
  qualities: ["imaginative", "hard-working", hungry],
  exp: ["web content", "non-profit"],
  interests: ["music", guacamole],
  completeInterests: function() {
    this.interests = this.interests.concat(this.skills);
  }
};

findJrDev(qualifications, rebecca);

