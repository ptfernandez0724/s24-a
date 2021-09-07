// Solution 1: Find users with letter s in their first name or d in their last name.

// db.users.find({$or: [{firstName: {$regex: 's', $options: '$i'}},{lastName: {$regex: 'd', $options: '$i'}}]},
//     {_id: 0, firstName: 1, lastName: 1}
// );

// Solution 2: Find users who are from the HR department and their age is greater then or equal to 70.

// db.users.find({$and: [{department: 'HR'},{age: {$gte: 70}}]}
    
// );


// Solution 3: Find users with the letter e in their first name and has an age of less than or equal to 30.

// db.users.find({$and: [{firstName: {$regex: 'e'}},{age: {$lte: 30}}]});