public class Adapter implements Request {

    Adaptee adaptee;

    Adapter(Adaptee adaptee){
        this.adaptee = adaptee;
    }

	@Override
	public void request() {
        this.adaptee.especificaRequest();
	}

    
}
