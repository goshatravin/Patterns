# from abc import ABC, abstractmethod

# TRANSPORT = 'train'

# class Transport(ABC):
#     @abstractmethod
#     def calculate_cost(self):
#         pass

#     @abstractmethod
#     def deliver(self):
#         pass


# class Truck(Transport):
#     def calculate_cost(self):
#         return 10
    
#     def deliver(self):
#         return 'Delivering by truck'


# class Ship(Transport):
#     def calculate_cost(self):
#         return 20
    
#     def deliver(self):
#         return 'Delivering by ship'


# class Train(Transport):
#     def calculate_cost(self):
#         return 15
    
#     def deliver(self):
#         return 'Delivering by train'


# class Logistics(ABC):
#     @abstractmethod
#     def create_transport(self):
#         pass

#     def return_full_package(self):
#         transport =  self.create_transport()
#         return 'Cost: {cost}, Description: {description}'.format(
#             cost=transport.calculate_cost(),
#             description=transport.deliver(),
#         )


# class TruckLogistics(Logistics):
#     def create_transport(self):
#         return Truck()

# class ShipLogistics(Logistics):
#     def create_transport(self):
#         return Ship() 

# class TrainLogistics(Logistics):
#     def create_transport(self):
#         return Train()


# def main():
#     if TRANSPORT == 'truck':
#         transport = TruckLogistics()
#     elif TRANSPORT == 'ship':
#         transport = ShipLogistics()
#     elif TRANSPORT == 'train':
#         transport = TrainLogistics()
#     else:
#         raise 'Not available'

#     print(transport.return_full_package())

# if __name__ == '__main__':
#     main()
