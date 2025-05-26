from inventario.inventario import Inventario
from contabilidad.contabilidad import Contabilidad
from seguridad.seguridad import Seguridad

# Inicialización
inv = Inventario()
cont = Contabilidad()
seg = Seguridad()

# Pruebas iniciales
inv.agregar_producto("Laptop", 5)
cont.agregar_transaccion("Venta de Laptop", 1200)
seg.registrar_usuario("admin", "1234")

# Mostrar resultados
print("Inventario:", inv.mostrar_inventario())
print("Balance:", cont.obtener_balance())
print("Verificación usuario:", seg.verificar_usuario("admin", "1234"))