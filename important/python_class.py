# python class and object example
class Vehicle:
    def __init__(self, brand, model, year, wheels):
        self.brand = brand
        self.model = model
        self.year = year
        self.__wheels = wheels

    def display(self):
        print("Brand: ", self.brand)
        print("Model: ", self.model)
        print("Year: ", self.year)
        print("Wheels: ", self.__wheels)


# inheritance
class Car(Vehicle):
    def __init__(self, brand, model, year, doors):
        super().__init__(brand, model, year)
        self.doors = doors

    def display(self):
        super().display()
        print("Doors: ", self.doors)

    def get_doors(self):
        return self.doors

    def set_doors(self, doors):
        self.doors = doors
