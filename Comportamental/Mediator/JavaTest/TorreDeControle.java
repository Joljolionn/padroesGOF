import java.util.ArrayList;
import java.util.HashSet;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

public class TorreDeControle {

    private HashSet<Aeronave> aeronaves;
    private volatile boolean pistaLivre;
    private ArrayList<Evento> fila;
    private final ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(1);

    TorreDeControle() {
        this.aeronaves = new HashSet<Aeronave>();
        this.pistaLivre = true;
        this.fila = new ArrayList<Evento>();
    }

    public void registrar(Aeronave aeronave) {
        aeronave.setMediator(this);
        this.aeronaves.add(aeronave);
    }

    public synchronized void processar() {
        if (!this.pistaLivre || this.fila.size() == 0) {
            return;
        }

        Evento evento = this.fila.removeFirst();
        this.pistaLivre = false;

        if (evento.getTipo().equals("pouso")) {
            this.pouso(evento.getRemetente());
        } else if (evento.getTipo().equals("decolagem")) {
            this.decolagem(evento.getRemetente());
        } else if (evento.getTipo().equals("emergencia")) {
            this.emergencia(evento.getRemetente(), evento.getDados());
        }
    }

    public void pouso(Aeronave aeronave) {
        System.out.println("[OK] Pouso Autorizado: " + aeronave.identificacao());
        System.out.println("-".repeat(50));

        scheduler.schedule(() -> {
            synchronized (this) {
                System.out.println("[END] Pousou: " + aeronave.identificacao());
                System.out.println("-".repeat(50));

                this.pistaLivre = true;
                this.avisarOutros(aeronave, "pousou");
                this.processar();
                this.verificarFilaVazia();
            }
        }, 1500, TimeUnit.MILLISECONDS);
    }

    public void decolagem(Aeronave aeronave) {
        System.out.println("[OK] Decolagem Autorizada: " + aeronave.identificacao());
        System.out.println("-".repeat(50));

        scheduler.schedule(() -> {
            synchronized (this) {
                System.out.println("[END] Decolou: " + aeronave.identificacao());
                System.out.println("-".repeat(50));

                this.pistaLivre = true;
                this.avisarOutros(aeronave, "decolou");
                this.processar();
                this.verificarFilaVazia();
            }
        }, 1500, TimeUnit.MILLISECONDS);
    }

    public void emergencia(Aeronave aeronave, DadosEmergencia dados) {
        System.out.println("[OK] EMERGENCIA: " + aeronave.identificacao() + " - " + dados.getMotivo());
        System.out.println("-".repeat(50));

        scheduler.schedule(() -> {
            synchronized (this) {
                System.out.println("[END] Emergência Atendida: " + aeronave.identificacao());
                System.out.println("-".repeat(50));

                this.pistaLivre = true;
                this.avisarOutros(aeronave, "emergência atendida");
                this.processar();
                this.verificarFilaVazia();
            }
        }, 1500, TimeUnit.MILLISECONDS);
    }

    public void avisarOutros(Aeronave remetente, String msg) {
        for (Aeronave aeronave : this.aeronaves) {
            if (aeronave != remetente) {
                System.out.println("[AVISO] " + aeronave.identificacao() + " -> " + msg);
            }
        }
    }

    public synchronized void notificar(Evento evento) {
        if (evento.remetente.getMediator() == null) {
            System.out.println("Aeronave não registrada com o Mediator.");
            return;
        }

        if (evento.dados != null) {
            this.fila.addFirst(evento);
        } else {
            this.fila.addLast(evento);
        }

        this.processar();
    }

    private void verificarFilaVazia() {
        if (this.fila.isEmpty() && this.pistaLivre && !scheduler.isShutdown()) {
            System.out.println("\n--- Expediente Encerrado. Desligando a Torre. ---");
            scheduler.shutdown();
        }
    }
}
