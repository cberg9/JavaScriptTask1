class Computer {
    constructor(cName, cPrice, description, image, features) {
        this.cName = cName;
        this.cPrice = cPrice;
        this.description = description;
        this.image = image;
        this.features = features;
    }
    getCName() {
        return this.cName;
    }
    getCPrice() {
        return this.cPrice;
    }
    getDescription() {
        return this.description;
    }
    getImage() {
        return this.image;
    }
    getFeature() {
        return this.features;
    }


}

