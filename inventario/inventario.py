class Inventario:
    def __init__(self):
        self.productos = {}

    def agregar_producto(self, nombre, cantidad):
        self.productos[nombre] = cantidad

    def mostrar_inventario(self):
        return self.productos