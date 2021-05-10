class Mkulima {
    constructor() {
        this.farms = [];

        this.products = [];
    
        this.orders = [];
    }


    addFarm(farmId, name, farmer, phone, address) {
        let farm = {
            farmId: farmId,
            name: name,
            farmer: farmer,
            phone: phone,
            address: address
        }
        this.farms.push(farm)
    }

    updateFarm(farmId, name, farmer, phone, address) {
        let farm = {
            farmId: farmId,
            name: name,
            farmer: farmer,
            phone: phone,
            address: address
        }
        this.farms.push(farm)
    }
     
    removeFarm(farmId) {
           let farm = this.getFarm(farmId)
           let farmindex = this.farms.indexOf(farm)
           this.farms.splice(farmindex, 1)
    }

    getFarm(farmId){
       for (var i = 0; i < this.farms.length; i++) {
           let farm = this.farms[i]
           if(farm.farmId === farmId){
               return farm
           }
       } 
    }
}

var mkulima = new Mkulima()
mkulima.addFarm(2, "Kababi", "Sam", "73873244", "Wall street")
mkulima.addFarm(5, "Gikomba", "Duncan", "290537350", "City Stadium")
console.log(mkulima.farms)


var update = new Mkulima()
update.updateFarm(3, "Kababi", "Sam", "sam@gmail.com", "Wall street")
console.log(update.farms)


var remove = new Mkulima()
remove.removeFarm(2)
console.log(remove.farms)

var get = new Mkulima()
get.getFarm(2)
console.log(get.farms)


