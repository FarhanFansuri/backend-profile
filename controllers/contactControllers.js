dataDummy = [
    {
      "name": "John Doe",
      "email": "johndoe@example.com",
      "phone": "123-456-7890"
    },
    {
      "name": "Jane Smith",
      "email": "janesmith@example.com",
      "phone": "987-654-3210"
    },
    {
      "name": "Michael Brown",
      "email": "michaelbrown@example.com",
      "phone": "555-123-4567"
    },
    {
      "name": "Emily Johnson",
      "email": "emilyjohnson@example.com",
      "phone": "555-987-6543"
    },
    {
      "name": "David Wilson",
      "email": "davidwilson@example.com",
      "phone": "123-555-6789"
    }
  ]
  

getContactMany = (req,res)=>{
    res.status(200).json({
        massage:"get contact"
    })
}


getContactOne = (req,res)=>{
    res.status(200).json({
        massage:`get contact, ${req.params.id}`
    })
}

postContact = (req,res)=>{
    res.status(201).json(req.body)
}

putContact = (req,res)=>{
    res.status(200).json({
        massage:`put contact, ${req.body}`
    })
}

deleteContact = (req,res)=>{
    res.status(201).json({
        massage:"delete contact"
    })
}
module.exports = {
    getContactMany,
    getContactOne,
    postContact,
    putContact,
    deleteContact 
}