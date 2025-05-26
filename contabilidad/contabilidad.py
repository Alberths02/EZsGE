class Contabilidad:
    def __init__(self):
        self.transacciones = []

    def agregar_transaccion(self, descripcion, monto):
        self.transacciones.append({"descripcion": descripcion, "monto": monto})

    def obtener_balance(self):
        return sum(t["monto"] for t in self.transacciones)