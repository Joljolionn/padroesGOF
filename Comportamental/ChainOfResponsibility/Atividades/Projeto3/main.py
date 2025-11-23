from functools import reduce

usernames: list[str] = ["joao", "maria", "allan", "matheus"]

class Form():
    def __init__(self, email: str, senha: str, username: str) -> None:
        self.email = email
        self.senha = senha
        self.username = username

class Validador():
    def __init__(self) -> None:
        self.proximo = None

    def set_proximo(self, proximo) -> None:
        self.proximo = proximo

    def processar(self, form: Form) -> None:
        raise NotImplementedError("Esse método deve ser implementado pelas subclasses")

class ValidadorEmail(Validador):
    def processar(self, form: Form) -> None:
        print("Validando email...")
        if "@" in form.email:
            print("[OK] Email em formato válido")
            if self.proximo is not None:
                self.proximo.processar(form)
        else:
            print("[ERROR] Insira um email válido")

class ValidadorSenha(Validador):
    def processar(self, form: Form) -> None:
        print("Validando senha...")
        if len(form.senha) >= 8 and any(x.islower() for x in form.senha) and any(x.isupper() for x in form.senha):
            print("[OK] Senha em formato válido")
            if self.proximo is not None:
                self.proximo.processar(form)
        else:
            print("[ERROR] Insira uma senha válida")

class ValidadorUsername(Validador):
    def processar(self, form: Form) -> None:
        print("Validando Username...")
        if form.username not in usernames:
            print("[OK] Username válido")
            if self.proximo is not None:
                self.proximo.processar(form)
        else: 
            print("[ERROR] Insira um username válido")

def main():
    validador_email = ValidadorEmail()
    validador_senha = ValidadorSenha()
    validador_username = ValidadorUsername()

    validador_email.set_proximo(validador_senha)
    validador_senha.set_proximo(validador_username)

    validador_email.processar(Form("joaogmail.com", "1234Joao", "joao1"))
    print()
    validador_email.processar(Form("joao@gmail.com", "1234joao", "joao1"))
    print()
    validador_email.processar(Form("joao@gmail.com", "1234Joao", "joao"))
    print()
    validador_email.processar(Form("joao@gmail.com", "1234Joao", "joao1"))

if __name__ == "__main__":
    main()

