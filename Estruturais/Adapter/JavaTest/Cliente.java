public class Cliente {

    Request target;

    Cliente(Request target){
        this.target = target;
    }

    public void criarRequest(){
        System.out.println("Cliente - fazendo uma requisição!");
        this.target.request();
    }
}
