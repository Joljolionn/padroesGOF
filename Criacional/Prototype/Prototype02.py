# class Veiculo:
#    def __init__(self, modelo):
#        self.modelo = modelo
class Pessoa:
    def __init__(self, id, nome, idade):
        self.id = id
        self.nome = nome
        self.idade = idade

    def clone(self):
        return Pessoa(self.id, self.nome, self.idade)
    
class PessoaManager:
    def __init__(self):
        self.pessoas = {}

    def addPessoa(self, id, nome, idade):
        pessoa = Pessoa(id, nome, idade)
        self.pessoas[id] = pessoa

    def getPessoaById(self, id):
        pessoa_original = self.pessoas.get(id)
        if pessoa_original:
            return pessoa_original.clone()
        else:
            return null

manager = PessoaManager()

manager.addPessoa(1, 'Joao Ladrao', 19)
manager.addPessoa(2, 'Walisom Viado', 23)
manager.addPessoa(3, 'Matheus Henrique', 19)

pessoaClonada = manager.getPessoaById(1)
if(pessoaClonada):
    pessoaClonada.nome = 'Joao Apanhou da Policia'

pessoaClonada2 = manager.getPessoaById(2)
if(pessoaClonada2):
    pessoaClonada2.nome = 'Afilhado Walisom'

print('Pessoa Original ------ 1')
print(f'ID: {manager.getPessoaById(1).id}, NOME:{manager.getPessoaById(1).nome}, IDADE: {manager.getPessoaById(1).idade}')
print('Pessoa Clonada ------ 1')
print(f'id: {pessoaClonada.id}, nome: {pessoaClonada.nome}, idade: {pessoaClonada.idade}')

print('Pessoa Original ------ 2')
print(f'id: {manager.getPessoaById(2).id}, nome: {manager.getPessoaById(2).nome}, idade: {manager.getPessoaById(2).idade}')
print('Pessoa Clonada ------ 2')
print(f'id: {pessoaClonada2.id}, nome: {pessoaClonada2.nome}, idade: {pessoaClonada2.idade}')