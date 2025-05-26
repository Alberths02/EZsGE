class Seguridad:
    def __init__(self):
        self.usuarios = {}

    def registrar_usuario(self, usuario, clave):
        self.usuarios[usuario] = clave

    def verificar_usuario(self, usuario, clave):
        return self.usuarios.get(usuario) == clave